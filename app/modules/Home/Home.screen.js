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

// const url = 'https://kanban-ari.firebaseapp.com/'
const url = 'com.whatsapp.w4b';


class Home extends Component {
  static navigationOptions = {
    title: 'Rilabs'
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
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 150, height: 150, margin: 16 }}>
              <Image
                source={octocat}
                style={{ width: 150, height: 150, borderRadius: 10 }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontWeight: '600',
                  marginTop: 6
                }}
              >
                Notes
              </Text>
            </View>
            <View style={{ width: 150, height: 150, margin: 16 }}>
              <Image
                source={octocat2}
                style={{ width: 150, height: 150, borderRadius: 10 }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontWeight: '600',
                  marginTop: 6
                }}
              >
                Github
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 150, height: 150, margin: 16 }}>
              <Image
                source={octocat}
                style={{ width: 150, height: 150, borderRadius: 10 }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontWeight: '600',
                  marginTop: 6
                }}
              >
                Movie
              </Text>
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                margin: 16
              }}
            >
              <TouchableOpacity onPress={() => this.openWebview()}>
                <Image
                  source={octocat}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: '600',
                    marginTop: 6
                  }}
                >
                  Kanban
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
            <View style={{ width: 150, height: 150, margin: 16 }}>
              <Image
                source={octocat}
                style={{ width: 150, height: 150, borderRadius: 10 }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontWeight: '600',
                  marginTop: 6
                }}
              >
                E-Money
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
