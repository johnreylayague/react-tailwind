import React, { useState, useEffect } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { getToken } from '../../../services/storage/indexedDB';
import Sidebar from '../../layout/Sidebar/Sidebar';
import { Grid, CircularProgress, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const ProtectedLayout = ({ isSidebarOpen, toggleSidebar }) => { // Added props here
  const outlet = useOutlet();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchToken = async () => {
    const token = await getToken();
    setIsAuthenticated(!!token);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <IconButton onClick={toggleSidebar} aria-label="menu" style={{ position: 'fixed', zIndex: 1001 }}>
        <MenuIcon style={{ color: 'white' }} />
      </IconButton>

      <Grid container alignItems="flex-start" sx={{ border: 0, backgroundColor: '#2A2A2A' }}>
        <Grid item xs={12} sm={2} sx={{ border: 0, display: isSidebarOpen ? 'block' : 'none' }}>
          <Sidebar />
        </Grid>
        <Grid item sm={isSidebarOpen ? 10 : 12}>
          {outlet}
        </Grid>
      </Grid>
    </>
  );
};

export default ProtectedLayout;