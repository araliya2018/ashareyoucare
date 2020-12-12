import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import Chat from '../screens/ChatScreen';
import UserRegister from '../screens/UserRegister'

import MyLocation from '../screens/MyLocation'

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Chat: {screen: Chat},
    UserRegister: {screen: UserRegister},
    MyLocation:{screen:MyLocation}
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("../assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Chat"){
          return(
            <Image
            source={require("../assets/chat-icon.png")}
            style={{width:20, height:20,}}
          />)

        }

        else if(routeName === "UserRegister"){
          return(
            <Image
            source={require("../assets/friend.png")}
            style={{width:20, height:20,}}
          />)

        }
        else if(routeName === "MyLocation"){
          return(
            <Image
            source={require("../assets/forest.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);