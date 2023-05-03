import SyncIcon from '@mui/icons-material/Sync';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const DataLoading = ({ message = 'Loading...' }) => {
  return (
    <React.Fragment>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: 'flex',
          flexDirection: 'column',
        }}
        open={true}
      >
        <SyncIcon fontSize="large" />
        <Typography sx={{ margin: '20px' }}>{message}</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

DataLoading.propTypes = {
  message: PropTypes.object,
};

export default DataLoading;
