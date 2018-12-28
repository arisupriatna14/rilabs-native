import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';

// Logo
import logo from '../../assets/images/logo-rilabs.jpg';
// Component
import FormInput from '../../components/Form/FormInput.screen';
// Style
import styles from './Login.style';

class Login extends Component {
  signAsync = async () => {
    const { navigation } = this.props;
    AsyncStorage.setItem('userToken', 'abcd123');
    navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={logo}
            style={styles.imageSize}
          />
          <Text style={styles.text}>Rilabs</Text>
        </View>
        <FormInput
          title="Email"
          placeholder="Enter your email"
          secureTextEntry={false}
        />
        <FormInput
          title="Password"
          placeholder="Enter your password"
          secureTextEntry
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={this.signAsync}
        >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
