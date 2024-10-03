import { useState, useEffect } from 'react';
import { MAX_INACTIVITY_TIME } from '../../../utils/constants';
import { clearTokenOnLogout, getToken } from '../../../services/storage/indexedDB';

function MouseActivityCheck() {
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [isKeyboardActive, setIsKeyboardActive] = useState(true);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const fetchToken = async () => {
    const token = await getToken();
    // console.log('Token in IndexedDB:', token);
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    const checkActivity = () => {
      const inactivityTime = Date.now() - lastActivityTime;
      const maxInactivityTime = MAX_INACTIVITY_TIME;
      // console.log('inactivityTime::', inactivityTime)
      fetchToken();
      if (inactivityTime > maxInactivityTime) {
        setIsMouseActive(false);
        setIsKeyboardActive(false);
      } else {
        setIsMouseActive(true);
        setIsKeyboardActive(true);
      }
    };

    const handleMouseActivity = () => {
      setLastActivityTime(Date.now());
      localStorage.setItem('activity', 'active');
    };

    const handleKeyboardActivity = () => {
      setLastActivityTime(Date.now());
      localStorage.setItem('activity', 'active');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setLastActivityTime(Date.now());
        localStorage.setItem('activity', 'active');
      } else {
        localStorage.setItem('activity', 'inactive');
      }
    };

    window.addEventListener('mousemove', handleMouseActivity);
    window.addEventListener('keydown', handleKeyboardActivity);
    window.addEventListener('storage', checkStorageActivity);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const interval = setInterval(checkActivity, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseActivity);
      window.removeEventListener('keydown', handleKeyboardActivity);
      window.removeEventListener('storage', checkStorageActivity);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, [lastActivityTime]);

  const checkStorageActivity = (event) => {
    if (event.key === 'activity' && event.newValue === 'active') {
      setLastActivityTime(Date.now());
      localStorage.setItem('activity', 'inactive');
    }
  };

  useEffect(() => {
    if (!isMouseActive && !isKeyboardActive && isAuthenticated) {
      clearTokenOnLogout();
      window.location.reload();
    }
  }, [isMouseActive, isKeyboardActive, isAuthenticated]);

  return null;
  // return (
  //   <div>
  //     {isMouseActive && isKeyboardActive ? (
  //       <p>Mouse and keyboard are active</p>
  //     ) : (
  //       <p>No mouse or keyboard activity detected</p>
  //     )}
  //   </div>
  // );
}

export default MouseActivityCheck;
