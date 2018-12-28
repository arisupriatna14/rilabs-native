import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Image
import umasapna from '../../assets/images/umasapna.png';
import iconPin from '../../assets/images/pin_copy.png';

class Hotel extends Component {
  static navigationOptions = {
    title: 'Hotels'
  }

  render() {
    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 16 }}>
            <Image
              source={umasapna}
              style={{
                width: 50,
                height: 50
              }}
            />
          </View>
          <View style={{ margin: 16 }}>
            <Text>
              Jl. Drupadi No. 20XX, Basangkasa, Seminyak, Bali, Indonesia, 80361 agoda
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={iconPin}
            style={{ width: 15, height: 23 }}
          />
        </View>
      </View>
    );
  }
}

export default Hotel;
