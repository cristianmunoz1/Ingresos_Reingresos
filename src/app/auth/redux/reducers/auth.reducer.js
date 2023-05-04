import types from '../../../shared/redux/types/types';

// state = { id, username, email, firstName, lastName, roles, authLoadingState, authLoadingMessage }

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      console.log({
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        roles: action.payload.roles,
      });
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        roles: action.payload.roles,
      };

    case types.authLogout:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
