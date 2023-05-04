import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../../../auth/redux/reducers/auth.reducer';
import sharedReducer from '../reducers/shared.reducer';

const reducer = combineReducers({
  authentication: authReducer,
  shared: sharedReducer,
});

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [thunk],
});

export default store;
