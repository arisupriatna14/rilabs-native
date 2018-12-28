import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  Image,
  Text
} from 'react-native';

import logo from '../../assets/images/jetpacktocat.png';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eee',
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

export default AuthLoading;
