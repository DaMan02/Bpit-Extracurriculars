import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import colors from "./src/assets/colors/UiColors";
import {Header} from 'native-base';
import Home from "./src/containers/Home/Home";
import Event from "./src/containers/Event/Event";
import Login from "./src/containers/Login/Login";
import SocietiesHome from "./src/containers/Societies/SocietiesHome";
import {createStackNavigator,createAppContainer}  from 'react-navigation'; 
//import {setTopLevelNavigator,navigate} from './src/Helpers/NavigationService';


class FirstScreen extends React.Component {

    static navigationOptions = {
        header: null ,
       
      };   

    render() {
        return (
            <View style={styles.masterContainer}>
                <StatusBar
                    backgroundColor={colors.statusBar}
                    barStyle="light-content"/>
                <Home/>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
      Login: {
        screen: FirstScreen,
  
      },
      Home: {
        screen: Home,
        navigationOptions:{header:null}
      },
      Event: {
        screen: Event,
      },
      Societies: {
          screen: SocietiesHome,
      }
    },
    {
      initialRouteName: 'Login',
    }
  );


const styles = StyleSheet.create({
    masterContainer: {
        flex: 1
    }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }