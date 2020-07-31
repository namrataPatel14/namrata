/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './app/navigation/StackNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <StackNavigation></StackNavigation>;
  }
}
export default App;
