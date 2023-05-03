import {
  loginAction,
  startAuthLoading,
  finishAuthLoading,
} from '../redux/actions/auth.actions';
import * as axiosAdapter from './adapters/axios/auth-axios.adapter';
import * as jwtAdapter from './adapters/jwt/auth-jwt.adapter';
import env from '../../../environment/credentials';
import { setUIError } from '../../shared/redux/actions/shared.actions';

export const login = (username, password) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startAuthLoading("We're logging you in"));
    try {
      const loginResponse = await axiosAdapter.post(
        `${env.BACKEND_URL}/auth/login`,
        { username, password }
      );
      const { data, status } = loginResponse;
      console.log({ loginResponse });
      // const { ok, firstName, lastName, token } = loginResponse.data;
      // const { id, email, roles } = jwtAdapter.verify(token);
      const { ok, result } = data;
      const { firstName, lastName, token } = result;
      const { id, email, roles } = jwtAdapter.verify(token);

      localStorage.setItem('access_token', token);

      if (status !== 201) {
        throw new Error('Error en la petición');
      }
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
      dispatch(loginAction(id, username, firstName, lastName, email, roles));
    } catch (err) {
      dispatch(setUIError('Error en Login', 'some error'));
    } finally {
      dispatch(finishAuthLoading());
    }
  };
};

export const refreshToken = (currentToken) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startAuthLoading("We're logging you in"));
    try {
      const refreshTokenResponse = await axiosAdapter.get(
        `${env.BACKEND_URL}/auth/refresh`,
        { headers: { authorization: `Bearer ${currentToken}` } }
      );
      const { data, status } = refreshTokenResponse;
      // const { ok, firstName, lastName, token } = loginResponse.data;
      // const { id, email, roles } = jwtAdapter.verify(token);
      const { ok, result } = data;
      const { firstName, lastName, token } = result;
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
      dispatch(setUIError('Error en Refresh token', 'some error'));
    } finally {
      dispatch(finishAuthLoading());
    }
  };
};

export const register = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startAuthLoading("We're signing you up"));
    try {
      const registerResponse = await axiosAdapter.post(
        `${env.BACKEND_URL}/auth/register`,
        { firstName, lastName, email, password, username: email.split('@')[0] }
      );
      if (registerResponse.status !== 201) {
        throw new Error('Error en la petición');
      }
      const { ok } = registerResponse.data;
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
    } catch (err) {
      dispatch(setUIError('Error en registro', 'some error'));
    } finally {
      dispatch(finishAuthLoading());
    }
  };
};
