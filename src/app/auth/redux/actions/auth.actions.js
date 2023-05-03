import types from '../../../shared/redux/types/types';

export const loginAction = (
  id,
  username,
  firstName,
  lastName,
  email,
  roles
) => ({
  type: types.authLogin,
  payload: { id, username, firstName, lastName, email, roles },
});

export const logoutAction = () => ({
  type: types.authLogout,
  payload: {},
});

export const startAuthLoading = (authLoadingMessage) => ({
  type: types.startAuthLoading,
  payload: { authLoadingMessage },
});
export const finishAuthLoading = () => ({
  type: types.finishAuthLoading,
  payload: {},
});
