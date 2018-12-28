import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewIconMarker: {
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16
  },
  iconMarker: {
    width: 25,
    height: 35
  },
  viewTextInput: {
    marginLeft: 16,
    marginRight: 16
  },
  textInput: {
    marginTop: 16,
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 5,
    fontSize: 15,
    borderBottomColor: '#8e8e93',
    borderBottomWidth: 1,
    width: 230
  },
  viewIconSearch: {
    marginRight: 16,
    marginTop: 20,
    marginBottom: 16
  },
  iconSearch: {
    width: 25,
    height: 25
  }
});

export default styles;
