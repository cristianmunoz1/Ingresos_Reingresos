import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ allRequiredRoles = [], anyRequiredRole = [] }) => {
  const auth = useSelector((state) => state.authentication);

  const { roles = [] } = auth;

  const verifyUserHasAllRoles = (roles, allRequiredRoles) => {
    return allRequiredRoles.every((requiredRole) =>
      roles.some((role) => {
        console.table({ role, requiredRole, result: role === requiredRole });
        return role === requiredRole;
      })
    );
  };

  const verifyUserHasAnyRole = (roles, anyRequiredRole) => {
    const result = anyRequiredRole.some((requiredRole) =>
      roles.some((role) => role === requiredRole)
    );
    return result;
  };

  const verifyAuthorization = (roles, allRequiredRoles, anyRequiredRole) => {
    if (roles.length === 0) {
      return false;
    }
    if (allRequiredRoles.length > 0 && anyRequiredRole.length > 0) {
      return false;
    }
    if (allRequiredRoles.length === 0 && anyRequiredRole.length === 0) {
      return false;
    }
    if (allRequiredRoles.length > 0) {
      return verifyUserHasAllRoles(roles, allRequiredRoles);
    }
    if (anyRequiredRole.length > 0) {
      return verifyUserHasAnyRole(roles, anyRequiredRole);
    }
    return false;
  };

  const authorized = verifyAuthorization(
    roles,
    allRequiredRoles,
    anyRequiredRole
  );

  console.table({ authorized, roles, allRequiredRoles, anyRequiredRole });

  if (!authorized) {
    return <Navigate to="/not-found" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

PrivateRoute.propTypes = {
  allRequiredRoles: PropTypes.arrayOf(PropTypes.string),
  anyRequiredRole: PropTypes.arrayOf(PropTypes.string),
};

export default PrivateRoute;
