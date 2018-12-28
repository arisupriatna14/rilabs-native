import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

// Components
import SearchBar from '../../components/SearchBar/SearchBar.screen';
import CardItem from '../../components/CardItem/CardItem.screen';

class TravelHome extends Component {
  static navigationOptions = {
    title: 'Explore'
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <CardItem />
      </ScrollView>
    );
  }
}

export default TravelHome;
