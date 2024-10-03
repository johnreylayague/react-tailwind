import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { Button, Grid } from '@mui/material';

import { clearTokenOnLogout, getToken } from '../../../services/storage/indexedDB';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const [access_token, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setAccessToken(token);
    };

    fetchToken();
  }, []);

  const handleLogout = async () => {
    await clearTokenOnLogout();
    const updated_access_token = await getToken(); // Retrieve the token again after logout
    console.log('Stored Token after clicked:', updated_access_token);
    window.location.reload();
  };

  if (!access_token) {
    navigate('/');
  }

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button> */}
      <Sidebar/>
      
      {/* <header className={classes.header}>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/permissions">Permissions</Link></li>
          </ul>
        </nav>
      </header> */}


    </>
  );
};

export default Header;
