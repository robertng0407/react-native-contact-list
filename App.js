import React from 'react';
import storeInitializer from './src/store/storeInitializer';
import { Provider } from 'react-redux';

import AppNavigator from './routes';

const store = storeInitializer();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};