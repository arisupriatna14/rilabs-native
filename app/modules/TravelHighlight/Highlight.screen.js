import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

// Icon
import iconPin from '../../assets/images/pin_copy.png';
import london from '../../assets/images/london.png';

// Utils
import { width } from '../../utils/Dimension';
import data from '../../dataDummy/dataDummy';

class Highlight extends Component {
  static navigationOptions = {
    title: 'Highlights'
  }

  renderItem = ({ item }) => (
    <View
      style={{
        margin: 16,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 16,
        backgroundColor: '#fff',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'normal' }}>{item.title}</Text>
        </View>
        <View>
          <Image
            source={iconPin}
            style={{ width: 15, height: 23 }}
          />
        </View>
      </View>
      <View>
        <Image
          source={london}
          style={{
            width: width - 32,
            height: 180
          }}
        />
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Highlight;
