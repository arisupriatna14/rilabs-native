import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

import styles from './SearchBar.style';

// Icon
import iconSearch from '../../assets/images/Search.png';
import iconMarker from '../../assets/images/marker.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeText = (text) => {
    const lengthWord = text.length;
    console.log(lengthWord);
  }

  submitSearch = () => {
    Alert.alert('Terpanggil');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewIconMarker}>
          <Image
            source={iconMarker}
            style={styles.iconMarker}
          />
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            placeholder="London, United Kingdom"
            onChangeText={this.onChangeText}
            numberOfLines={1}
            clearButtonMode="always"
            style={styles.textInput}
          />
        </View>
        <View style={styles.viewIconSearch}>
          <TouchableOpacity
            onPress={this.submitSearch}
          >
            <Image
              source={iconSearch}
              style={styles.iconSearch}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SearchBar;
