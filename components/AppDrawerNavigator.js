import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import NotificationScreen from '../screens/NotificationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    NotificationScreen : {
      screen : NotificationScreen
    },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
