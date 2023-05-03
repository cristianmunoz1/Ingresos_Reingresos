import jwtDecode from 'jwt-decode';

export const verify = (token) => {
  const { id, claims } = jwtDecode(token);
  return {
    id,
    email: claims.email,
    username: claims.username,
    roles: claims.roles,
  };
};
