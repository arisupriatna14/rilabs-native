import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Modules
import Overview from '../TravelOverview/Overview.screen';
import Highlight from '../TravelHighlight/Highlight.screen';
import Hotel from '../TravelHotels/Hotels.screen';
import Transport from '../TravelTransport/Transport.screen';

// Icons
import iconOverview from '../../assets/images/overview.png';
import iconHighlight from '../../assets/images/highlights.png';
import iconHotels from '../../assets/images/hotels.png';
import iconTransport from '../../assets/images/transport.png';

const TabBottom = createBottomTabNavigator({
  Overview: {
    screen: Overview,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Image
          source={iconOverview}
          style={{ width: 30, height: 18 }}
        />
      )
    })
  },
  Highlight: {
    screen: Highlight,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Image
          source={iconHighlight}
          style={{ width: 25, height: 22 }}
        />
      )
    })
  },
  Hotel: {
    screen: Hotel,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Image
          source={iconHotels}
          style={{ width: 33, height: 20 }}
        />
      )
    })
  },
  Transport: {
    screen: Transport,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Image
          source={iconTransport}
          style={{ width: 40, height: 20 }}
        />
      )
    })
  }
});

const TabContainer = createAppContainer(TabBottom);

class TravelDetail extends Component {
  static navigationOptions = {
    title: 'Travel Detail'
  }

  render() {
    return (
      <TabContainer />
    );
  }
}

export default TravelDetail;
