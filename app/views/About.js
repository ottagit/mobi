import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

const aboutReactNative = `React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.`;

const whatReactNative = `With React Native, you do not build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that is indistinguishable from an app built using Objective-C or Java.`;

export class About extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.pics} source={require('../sections/img/self.jpg')}/>
        
        <Text style={styles.aboutTitle}>React Native</Text>
        <Text style={styles.aboutText}>{aboutReactNative}</Text>

        <Image style={styles.pics} source={require('../sections/img/1.png')}/>
        
        <Text style={styles.aboutTitle}>More on React Native</Text>
        <Text style={styles.aboutText}>{whatReactNative}</Text>

        <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>Go Back</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff'
  },
  pics: {
    height: 300
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center'
  },
  aboutText: {
    paddingBottom: 20
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }
});
