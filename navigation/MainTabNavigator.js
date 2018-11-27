import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TextInputExample from '../components/TextInputExample';
import ActionSheetExample from '../components/ActionSheetExample';
import NotificationsExample from '../components/NotificationsExample';
import StyledComponentExample from '../components/StyledComponentExample';
import RestExample from '../components/RestExample';

export const Examples = {
  TextInputExample,
  ActionSheetExample,
  NotificationsExample,
  StyledComponentExample,
  RestExample,
}

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ...Examples,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  // LinksStack,
});
