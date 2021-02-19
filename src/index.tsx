import React from 'react';
import { render } from 'react-dom'
import rootReducer from "./slices"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { AlertProvider } from "./context_providers/alert_provider"

import App from './App';

export const store = configureStore({ reducer: rootReducer });

render(
  // <React.StrictMode>
  <AlertProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

