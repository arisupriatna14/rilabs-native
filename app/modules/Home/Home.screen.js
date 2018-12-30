import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert
} from 'react-native';

// Images
import octocat from '../../assets/images/octocat.png';
import octocat2 from '../../assets/images/octocat-2.png';

// Component
import SearchBar from '../../components/SearchBar/SearchBar.screen';
import CardItem from '../../components/CardItem/CardItem.screen';

// Styles
import styles from './Home.style';
import Color from '../../utils/Color';

const url = 'https://kanban-ari.firebaseapp.com/';


class Home extends Component {
  static navigationOptions = {
    title: 'Rilabs',
    headerStyle: {
      backgroundColor: Color.BLUE
    },
    headerTitleStyle: {
      color: Color.WHITE,
      fontWeight: '500'
    }
  }

  openWebview = () => {
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        Alert.alert('Can\'t handle url', url);
      } else {
        return Linking.openURL(url);
      }
      return null;
    });
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar />
          <CardItem />
          <View style={styles.row}>
            <View style={styles.sizeCard}>
              <Image
                source={octocat}
                style={styles.sizeImage}
              />
              <Text style={styles.textStyle}>
                Notes
              </Text>
            </View>
            <View style={styles.sizeCard}>
              <Image
                source={octocat2}
                style={styles.sizeImage}
              />
              <Text style={styles.textStyle}>
                Github
              </Text>
            </View>
          </View>
          <View style={[styles.row, { marginBottom: 20 }]}>
            <View style={styles.sizeCard}>
              <Image
                source={octocat}
                style={styles.sizeImage}
              />
              <Text style={styles.textStyle}>
                Movie
              </Text>
            </View>
            <View style={styles.sizeCard}>
              <TouchableOpacity onPress={this.openWebview}>
                <Image
                  source={octocat}
                  style={styles.sizeImage}
                />
                <Text style={styles.textStyle}>
                  Kanban
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
