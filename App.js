/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {SplashScreen} from './src/screens/SplashScreen';
import {Login} from './src/screens/Login';
import {SignUp} from './src/screens/SignUp';
const App: () => React$Node = () => {
  return <SignUp />;
};

export default App;
