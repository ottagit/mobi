import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Text> This will be the home page</Text>
        <Text> This will be another section</Text>
        <Text> This will be a section too</Text>
        <Header message = 'Press to Login' />
      </View>
    );
  }
}
