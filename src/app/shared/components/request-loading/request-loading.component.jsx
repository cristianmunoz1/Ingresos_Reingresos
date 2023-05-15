import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const RequestLoading = ({ message }) => {
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
        <HourglassBottomIcon fontSize="large" />
        <Typography sx={{ margin: '20px' }}>{message}</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

RequestLoading.propTypes = {
  message: PropTypes.string,
};

export default RequestLoading;
