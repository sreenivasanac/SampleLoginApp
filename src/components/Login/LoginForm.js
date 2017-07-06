import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}  
          placeholder="username" 
          keyboardType="email-address"
          autoCapitalize="none"  
          autoCorrect={false}
        />
        <TextInput  
          style={styles.textInput} 
          placeholder="password" 
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text 
          style={styles.buttonText}
          secureTextEntry> LOGIN </Text>
        </TouchableOpacity>

      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    flex: 1,
  },
  textInput: {
    height: 40,
    backgroundColor: 'rgb(255,255,255)',
    opacity: 0.7,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  }
});
