import types from '../../../shared/redux/types/types';

// state = { error, errorMessage }

const initialState = {
  error: false,
  errorMessage: '',
  errorCause: '',
};

const uiErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
        errorCause: action.payload.errorCause,
      };

    case types.uiRemoveError:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default uiErrorReducer;
