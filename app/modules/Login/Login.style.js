import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  button: {
    backgroundColor: Color.BLUE,
    height: 36,
    justifyContent: 'center',
    borderRadius: 2,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowColor: 'grey',
    margin: 16
  },
  textBtn: {
    textAlign: 'center',
    color: Color.WHITE,
    fontWeight: '600',
    fontSize: 14
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50
  },
  imageSize: {
    width: 150,
    height: 150
  }
});

export default styles;
