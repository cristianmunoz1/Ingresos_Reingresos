import types from '../types/types';

export const startLoading = (message) => ({
  type: types.startLoading,
  payload: { message },
});
export const finishLoading = () => ({
  type: types.finishLoading,
  payload: {},
});

export const setUIError = (message) => ({
  type: types.uiSetError,
  payload: { message },
});
export const removeUIError = () => ({
  type: types.uiRemoveError,
  payload: {},
});
