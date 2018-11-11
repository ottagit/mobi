import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message = 'Login' />
        <Hero />
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
