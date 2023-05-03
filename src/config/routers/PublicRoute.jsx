import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const auth = useSelector((state) => state.authentication);
  const { id } = auth;

  if (id) {
    return <Navigate to="/home/home1" />;
  }
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PublicRoute;
