import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

// Image
import london from '../../assets/images/london.png';

// Icons
import iconWeather from '../../assets/images/weather1.png';
import iconCurrency from '../../assets/images/currency1.png';
import iconLanguage from '../../assets/images/language1.png';

// Utils
import { width } from '../../utils/Dimension';

class Overview extends Component {
  static navigationOptions = {
    title: 'Overview'
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Image
            source={london}
            style={{ height: 300, width }}
          />
        </View>
        <View style={{ margin: 16 }}>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#8e8e93' }}>
            England is full of pageantry and tradition,
            and nowhere else is that on display so
            vividly than in London. Yet the capital of
            the United Kingdom is hardly living in the
            past, continually courting innovation and
            growth in its art, architecture, restaurants,
            and hotels.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFF',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 4,
            margin: 16
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 16, marginTop: 16 }}>
                <Image
                  source={iconWeather}
                  style={{ width: 32, height: 20 }}
                />
              </View>
              <View style={{ margin: 16 }}>
                <Text>Weather</Text>
              </View>
            </View>
            <View style={{ margin: 16 }}>
              <Text>20 Derajat</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 16, marginTop: 16 }}>
                <Image
                  source={iconLanguage}
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View style={{ margin: 16 }}>
                <Text>Language</Text>
              </View>
            </View>
            <View style={{ margin: 16 }}>
              <Text>Indonesian</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 16, marginTop: 16 }}>
                <Image
                  source={iconCurrency}
                  style={{ width: 25, height: 27 }}
                />
              </View>
              <View style={{ margin: 16 }}>
                <Text>Currency</Text>
              </View>
            </View>
            <View style={{ margin: 16 }}>
              <Text>Indonesian rupiah</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Overview;
