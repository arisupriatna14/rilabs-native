import { StyleSheet } from 'react-native';
import { width } from '../../utils/Dimension';
import Color from '../../utils/Color';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    backgroundColor: Color.WHITE,
    margin: 16
  },
  imageSize: {
    width: width - 32,
    height: 250,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  margin16: {
    margin: 16
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    color: Color.BLACK
  },
  iconSize: {
    width: 25,
    height: 25
  },
  textDescription: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#8e8e93'
  }
});

export default styles;
