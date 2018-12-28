import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

// Image local
import london from '../../assets/images/london.png';
import iconShare from '../../assets/images/share.png';

// Styles
import styles from './CardItem.style';

// Data Dummy
import data from '../../dataDummy/dataDummy';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToTravelDetail = () => {
    const { navigation } = this.props;
    navigation.navigate('TravelDetail');
  }

  renderItem = ({ item, index }) => (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={this.goToTravelDetail} activeOpacity={0.8}>
        <Image
          source={london}
          style={styles.imageSize}
        />
        <View style={styles.row}>
          <View style={styles.margin16}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
          <View style={styles.margin16}>
            <Image
              source={iconShare}
              style={styles.iconSize}
            />
          </View>
        </View>
        <View style={styles.margin16}>
          <Text style={styles.textDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <FlatList
        data={data}
        // horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default withNavigation(CardItem);
