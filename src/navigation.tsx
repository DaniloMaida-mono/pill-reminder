import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Add from '@assets/img/add.svg';
import Gallery from '@assets/img/gallery.svg';
import Calendar from '@assets/img/calendar.svg';
import Chat from '@assets/img/chat.svg';
import Circle from '@assets/img/circle.svg';
import Demo from './components/Demo';
import Home from './components/Home';
import {colors} from './theme/colors';
import Plan from './components/Plan';

export type RootStackParamList = {
  Plan: undefined;
  Home: undefined;
};
const Tab = createBottomTabNavigator();
const customTabBarStyle: BottomTabNavigationOptions = {
  tabBarActiveTintColor: colors.green,
  tabBarInactiveTintColor: colors.darkerGrey,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 0,
    height: 100,
    paddingBottom: 0,
  },
  tabBarHideOnKeyboard: true,
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={customTabBarStyle}
        sceneContainerStyle={{
          backgroundColor: colors.white,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <Gallery width={size} height={size} fill={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Demo}
          options={{
            tabBarIcon: ({size, color}) => (
              <Calendar width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Plan}
          options={{
            tabBarIcon: ({size, color}) => (
              <Add width={50} height={50} fill={colors.green} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Demo"
          component={Demo}
          options={{
            tabBarIcon: ({size, color}) => (
              <Chat width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Circle"
          component={Demo}
          options={{
            tabBarIcon: ({size, color}) => (
              <Circle width={size} height={size} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
