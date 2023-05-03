import types from '../types/types';

export const setUIError = (message, cause) => ({
  type: types.uiSetError,
  payload: { message, cause },
});

export const removeUIError = () => ({
  type: types.uiSetError,
  payload: {},
});
