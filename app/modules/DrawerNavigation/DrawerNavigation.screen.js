import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from './DrawerNavigation.style';

const DrawerNavigation = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewProfile}>
        <Image source={{ uri: 'https://png2.kisspng.com/20180709/zag/kisspng-github-computer-icons-computer-software-clip-art-github-icon-5b4428aa6f0263.7944057715311935144547.png' }} style={styles.imageSize} />
        <Text style={styles.textUsername}>Ari Supriatna</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.itemDrawer}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Travel')} style={styles.itemDrawer}>
        <Text>Travel App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.itemDrawer}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('WebBrowser')} style={styles.itemDrawer}>
        <Text>Web Browser</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignOut')} style={styles.itemDrawer}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerNavigation;
