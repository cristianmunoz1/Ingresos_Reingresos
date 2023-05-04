import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import SnackbarAlert from '../../app/shared/components/snackbar-alert/snackbar-alert.component';
import { removeUIError } from '../../app/shared/redux/actions/shared.actions';

const PublicRoute = () => {
  const auth = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const { id } = auth;
  const [displaySnackbarAlarm, setDisplaySnackbarAlarm] = useState();
  const { error } = useSelector((state) => state.shared);
  const { state: errorState, message: errorMessage } = error;

  useEffect(() => {
    if (errorState) {
      setDisplaySnackbarAlarm({
        message: `${errorMessage} ❌`,
        timeout: 3500,
      });
      setTimeout(() => dispatch(removeUIError()), 3500);
    }
  }, []);

  if (id) {
    return <Navigate to="/home/admisiones" />;
  }
  return (
    <React.Fragment>
      {displaySnackbarAlarm && <SnackbarAlert {...displaySnackbarAlarm} />}
      <Outlet />
    </React.Fragment>
  );
};

export default PublicRoute;
