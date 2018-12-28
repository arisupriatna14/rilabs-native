import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Image
} from 'react-native';

import logo from '../../assets/images/jetpacktocat.png';

class SignOut extends Component {
  componentDidMount() {
    this.logout();
  }

  logout = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eee'
        }}
      >
        <Image
          source={logo}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>RILABS</Text>
      </View>
    );
  }
}

export default SignOut;
