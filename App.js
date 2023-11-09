import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/stackNavigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
