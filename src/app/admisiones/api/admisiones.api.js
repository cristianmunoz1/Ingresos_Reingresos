import env from '../../../environment/credentials';
import * as axiosAdapter from './adapters/axios/admisiones-axios.adapter';
import {
  finishLoading,
  setUIError,
  startLoading,
} from '../../shared/redux/actions/shared.actions';

export const registerStudentAction = (body) => {
  return async (dispatch) => {
    // eslint-disable-next-line quotes
    dispatch(startLoading('Estamos guardando tu registro'));
    try {
      const token = localStorage.getItem('access_token');
      const response = await axiosAdapter.post(
        `${env.BACKEND_URL}/admisiones/register`,
        { ...body },
        { headers: { authorization: `Bearer ${token}` } }
      );
      const { data, status } = response;
      const { ok } = data;
      if (status !== 201) {
        throw new Error('Error en la petición');
      }
      if (!ok) {
        throw new Error('Petición no exitosa');
      }
    } catch (err) {
      dispatch(setUIError('Error en registro de estudiante'));
    } finally {
      dispatch(finishLoading());
    }
  };
};
