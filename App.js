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
import {GettingStarted} from './src/screens/GettingStarted';
import {ChooseTopic} from './src/screens/ChooseTopic';
import {Reminders} from './src/screens/Reminders';
import {Home} from './src/screens/Home';
import {CourseDetails} from './src/screens/CourseDetails';
import {Meditate} from './src/screens/Meditate';
import {Music} from './src/screens/Music';
const App: () => React$Node = () => {
  return <Music />;
};

export default App;
