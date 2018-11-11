import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message = 'Press to Login' />
        <Text style={{flex: 8}}> This will be the home page</Text>
        <Text style={{flex: 6}}> This will be another section</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
