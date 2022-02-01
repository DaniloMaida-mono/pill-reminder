import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import EditPlan from '@components/EditPlan';
import Home from './components/Home';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={EditPlan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
