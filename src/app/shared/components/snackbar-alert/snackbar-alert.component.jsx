import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const SnackbarAlert = (props) => {
  const [open, setOpen] = useState(true);
  const { message, timeout } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        autoHideDuration={timeout}
        onClose={handleClose}
        message={message}
      />
    </React.Fragment>
  );
};

SnackbarAlert.propTypes = {
  message: PropTypes.string,
  timeout: PropTypes.number,
};

export default SnackbarAlert;
