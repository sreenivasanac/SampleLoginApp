import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View><Text style={styles.title}>Splash Text Hello World</Text></View>
        <View><Text style={styles.subtitle}>Powered By React Native</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },
  footerText: {
    fontSize: 12,
    color: 'white',
  }
});
