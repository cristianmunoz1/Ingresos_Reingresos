import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './admin1-page.component';

const AdminPage1 = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: '60px',
        }}
      >
        <Outlet />
      </Box>
    </React.Fragment>
  );
};

export default AdminPage1;
