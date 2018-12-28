import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProfileUser extends Component {
  static navigationOptions = {
    title: 'Profile User'
  }

  render() {
    return (
      <View>
        <Text>Halaman Profile User</Text>
      </View>
    );
  }
}

export default ProfileUser;
