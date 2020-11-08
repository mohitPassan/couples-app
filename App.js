import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store'
import CustomRouter from './components/CustomRouter';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="default"
      />
      <CustomRouter />
    </Provider>
  );
}