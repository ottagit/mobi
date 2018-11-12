import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let tubeId = this.props.navigation.getParam('ytubeId', 'No VIDEO');
    let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;

    return (
      <WebView 
        style={{ paddingTop: 20 }}
        javascriptenabled={true}
        source={{ uri: tubeUrl}}
      />
    );
  }
}
