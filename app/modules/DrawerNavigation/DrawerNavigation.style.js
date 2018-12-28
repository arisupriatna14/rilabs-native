import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewProfile: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 24,
    paddingTop: 40,
    alignItems: 'center'
  },
  imageSize: {
    width: 50,
    height: 50
  },
  textUsername: {
    marginLeft: 16,
    color: '#000'
  },
  itemDrawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center'
  }
});

export default styles;
