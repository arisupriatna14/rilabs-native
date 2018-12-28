import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const Header = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: '#eeee'
      }}
    >
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Image
          source={{ uri: 'https://static.thenounproject.com/png/966948-200.png' }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
