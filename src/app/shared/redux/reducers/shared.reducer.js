import types from '../../../shared/redux/types/types';

const initialState = {
  loading: {
    state: false,
    message: '',
  },
  error: {
    state: false,
    message: '',
  },
};

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLoading:
      return {
        ...state,
        loading: {
          state: true,
          message: action.payload.message,
        },
      };

    case types.finishLoading:
      return {
        ...state,
        loading: {
          state: false,
          message: '',
        },
      };

    case types.uiSetError:
      return {
        ...state,
        error: {
          state: true,
          message: action.payload.message,
        },
      };

    case types.uiRemoveError:
      return {
        ...state,
        error: {
          state: false,
          message: '',
        },
      };

    default:
      return state;
  }
};

export default sharedReducer;
