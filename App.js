import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Splash.js';
import Login from './src/components/Login/Login.js'

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
