import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sizeCard: {
    width: 150,
    height: 150,
    margin: 16
  },
  sizeImage: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  textStyle: {
    color: Color.BLACK,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 6
  }
});

export default styles;
