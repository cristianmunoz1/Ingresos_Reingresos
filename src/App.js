import React from 'react';
import './App.css';
import store from './app/shared/redux/store/store.config';
import AppRouter from './config/routers/AppRouter';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const App = () => {
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
      <AppRouter />
    </Provider>
    </LocalizationProvider>
  );
};

export default App;
