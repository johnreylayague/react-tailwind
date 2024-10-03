import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import { getToken } from '../../../services/storage/indexedDB';

const ProtectedRoute = () => {
  const [access_token, setAccessToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setAccessToken(!!token);
    };

    fetchToken();
  }, []);

  // if (access_token === null) {
  //   // Still loading token, return a loading indicator or null
  //   return null;
  // }
  console.log('access_token ProtectedRoute::::',access_token)
  if (!access_token) {
    console.log('redirect sa login')
    return <Navigate to="/" replace />;
  }

  console.log('Access token in ProtectedRoute:', access_token);
  return <Outlet />;
};

export default ProtectedRoute;


// import React, { useEffect, useState } from 'react';
// import { Navigate, useNavigate, Outlet } from 'react-router-dom';
// import { getToken } from '../../../services/storage/indexedDB';

// const ProtectedRoute = () => {
//     const [access_token, setAccessToken] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//     const fetchToken = async () => {
//         const token = await getToken();
//         setAccessToken(!!token);
//     };

//     fetchToken();
//     }, []);

//     if (!access_token) {
//         navigate('/');
//         return null;
//     }
//     console.log('ni agi sa ProtectedRoute:', access_token)  
//   return <Outlet />;
// };

// export default ProtectedRoute;



