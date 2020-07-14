import React from 'react';
import {Image, View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      //headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: () => <Image source={logo} />, // Descobrir como centralizar a logo do Instagram
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
