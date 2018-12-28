import React, { Component } from 'react';
import { WebView } from 'react-native';

class WebBrowser extends Component {
  static navigationOptions = {
    title: 'Kanban'
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://kanban-ari.firebaseapp.com/' }}
        originWhitelist={['*']}
        startInLoadingState
      />
    );
  }
}

export default WebBrowser;
