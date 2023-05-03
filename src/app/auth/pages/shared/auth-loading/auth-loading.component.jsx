import LockOpenIcon from '@mui/icons-material/LockOpen';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const AuthLoading = ({ message }) => {
  return (
    <div>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: 'flex',
          flexDirection: 'column',
        }}
        open={true}
      >
        <LockOpenIcon fontSize="large" />
        <Typography sx={{ margin: '20px' }}>{message}</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

AuthLoading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AuthLoading;
