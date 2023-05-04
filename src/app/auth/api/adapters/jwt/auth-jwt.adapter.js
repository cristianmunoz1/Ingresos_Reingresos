import jwtDecode from 'jwt-decode';

export const verify = (token) => {
  const { sub, username, email, roles } = jwtDecode(token);
  return {
    id: sub,
    email,
    username,
    roles,
  };
};
