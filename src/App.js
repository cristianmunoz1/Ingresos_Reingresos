import React from 'react';
import './App.css';
import store from './app/shared/redux/store/store.config';
import AppRouter from './config/routers/AppRouter';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
