import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#313746"/>
    <Routes />
  </Provider>
);

export default App;
