import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  SUBNETS_FEATURE_KEY,
  subnetsReducer,
} from '@aws/shared/subnets/data-access';

import {
  SECURITYGROUPS_FEATURE_KEY,
  securityGroupsReducer,
} from '@aws/shared/security-groups/data-access';

const store = configureStore({
  reducer: {
    [SECURITYGROUPS_FEATURE_KEY]: securityGroupsReducer,
    [SUBNETS_FEATURE_KEY]: subnetsReducer,
  },
  // Additional middleware can be passed to this array
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
