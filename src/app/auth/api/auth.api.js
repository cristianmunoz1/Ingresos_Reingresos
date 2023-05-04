import env from '../../../environment/credentials';
import {
  finishLoading,
  setUIError,
  startLoading,
} from '../../shared/redux/actions/shared.actions';
import { loginAction } from '../redux/actions/auth.actions';
import * as axiosAdapter from './adapters/axios/auth-axios.adapter';
import * as jwtAdapter from './adapters/jwt/auth-jwt.adapter';

export const login = (username, password) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startLoading("We're logging you in"));
    try {
      const loginResponse = await axiosAdapter.post(
        `${env.BACKEND_URL}/auth/login`,
        { username, password }
      );
      const { data, status } = loginResponse;
      const { ok, firstName, lastName, token } = data;
      const { id, email, roles } = jwtAdapter.verify(token);
      localStorage.setItem('access_token', token);
      if (status !== 201) {
        throw new Error('Error en la petición');
      }
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
      dispatch(loginAction(id, username, firstName, lastName, email, roles));
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ firstName, lastName })
      );
    } catch (err) {
      dispatch(setUIError('Error en Login'));
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const refreshToken = (currentToken) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startLoading('Refreshing credentials'));
    try {
      const refreshTokenResponse = await axiosAdapter.get(
        `${env.BACKEND_URL}/auth/refresh-token`,
        { headers: { authorization: `Bearer ${currentToken}` } }
      );
      const { data, status } = refreshTokenResponse;
      const userInfo = JSON.parse(localStorage.getItem('loggedInUser'));
      const firstName = userInfo.firstName || '';
      const lastName = userInfo.lastName || '';
      const { ok, token } = data;
      const { id, email, username, roles } = jwtAdapter.verify(token);
      localStorage.setItem('access_token', token);
      if (status !== 200) {
        throw new Error('Error en la petición');
      }
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
      dispatch(loginAction(id, username, firstName, lastName, email, roles));
    } catch (err) {
      dispatch(setUIError('Error en Refresh token'));
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const register = (
  firstName,
  lastName,
  email,
  password,
  address,
  phoneNumber
) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startLoading("We're signing you up"));
    try {
      const registerResponse = await axiosAdapter.post(
        `${env.BACKEND_URL}/auth/register`,
        {
          firstName,
          lastName,
          email,
          password,
          address,
          phoneNumber,
          username: email.split('@')[0],
        }
      );
      if (registerResponse.status !== 201) {
        throw new Error('Error en la petición');
      }
      const { ok } = registerResponse.data;
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
    } catch (err) {
      dispatch(setUIError('Error en registro'));
    } finally {
      dispatch(finishLoading());
    }
  };
};
