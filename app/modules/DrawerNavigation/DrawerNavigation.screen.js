import React, { Component, Fragment } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList
} from 'react-native';
import styles from './DrawerNavigation.style';

// List drawer
import listDrawer from './ListDrawer';

// Icon
import photoProfile from '../../assets/images/logo-rilabs.jpg';

class DrawerNavigation extends Component {
  goToNavigation = navigationName => () => {
    const { navigation } = this.props;
    navigation.navigate(navigationName);
  }

  renderItem = ({ item }) => (
    <Fragment>
      <TouchableOpacity
        onPress={this.goToNavigation(item.navigation)}
        style={styles.itemDrawer}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </Fragment>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewProfile}>
          <Image
            source={photoProfile}
            style={styles.imageSize}
          />
          <Text style={styles.textUsername}>Ari Supriatna</Text>
        </View>
        <FlatList
          data={listDrawer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default DrawerNavigation;
