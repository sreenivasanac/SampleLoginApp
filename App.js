import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Splash.js';

export default class App extends React.Component {
  render() {
    return (
      <Splash />
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
