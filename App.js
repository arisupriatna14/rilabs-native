import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Login from './app/modules/Login/Login.screen';
import AuthLoading from './app/modules/AuthLoading/AuthLoading.screen';
import Home from './app/modules/Home/Home.screen';
import ProfileUser from './app/modules/ProfileUser/ProfileUser.screen';
// import Header from './app/components/Header/Header.screen';
import SignOut from './app/modules/SignOut/SignOut.screen';
import DrawerNavigation from './app/modules/DrawerNavigation/DrawerNavigation.screen';
import WebBrowser from './app/components/WebView/WebView.screen';
import TravelHome from './app/modules/TravelHome/TravelHome.screen';
import TravelDetail from './app/modules/TravelDetail/TravelDetail.screen';

const { width } = Dimensions.get('window');

const OpenDrawer = props => (
  <View style={{ margin: 16 }}>
    <TouchableOpacity onPress={() => { props.navigate.toggleDrawer(); }}>
      <Image
        source={{ uri: 'https://image.flaticon.com/icons/png/512/56/56763.png' }}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  </View>
);

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <OpenDrawer navigate={navigation} />
    })
  },
  Travel: {
    screen: TravelHome
  },
  TravelDetail: {
    screen: TravelDetail
  },
  Profile: {
    screen: ProfileUser
  },
  WebBrowser: {
    screen: WebBrowser
  },
  SignOut: {
    screen: SignOut
  }
});

const AuthNavigator = createStackNavigator({
  SignIn: {
    screen: Login
  }
}, {
  headerMode: 'none'
});

const AppDrawerNavigation = createDrawerNavigator({
  Home: {
    screen: HomeStack
  }
}, {
  contentComponent: props => (<DrawerNavigation {...props} />),
  drawerWidth: width - 60
});

const AppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading,
  App: AppDrawerNavigation,
  Auth: AuthNavigator,
}, {
  initialRouteName: 'AuthLoading'
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
