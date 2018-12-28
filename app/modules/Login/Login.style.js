import { StyleSheet } from 'react-native';

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
    backgroundColor: '#005cb2',
    height: 30,
    justifyContent: 'center',
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowColor: 'grey',
    marginTop: 16
  },
  textBtn: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600'
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
