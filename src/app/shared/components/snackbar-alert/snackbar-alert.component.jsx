import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import React from 'react';

const SnackbarAlert = (props) => {
  const { message, timeout, open = true, setOpen } = props;

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    }
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
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default SnackbarAlert;
