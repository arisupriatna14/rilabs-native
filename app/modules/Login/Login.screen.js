import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ScrollView
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewImage}>
            <Image
              source={logo}
              style={styles.imageSize}
            />
            <Text style={styles.text}>Rilabs</Text>
          </View>
          <FormInput
            placeholder="Enter your email"
          />
          <FormInput
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
        </ScrollView>
      </View>
    );
  }
}

export default Login;
