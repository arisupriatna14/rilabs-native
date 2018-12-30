import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  Image,
  Text
} from 'react-native';

import logo from '../../assets/images/jetpacktocat.png';
import styles from './AuthLoading.style';

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
      <View style={styles.container}>
        <Image
          source={logo}
          style={styles.logoSize}
        />
        <Text style={styles.textStyle}>RILABS</Text>
      </View>
    );
  }
}

export default AuthLoading;
