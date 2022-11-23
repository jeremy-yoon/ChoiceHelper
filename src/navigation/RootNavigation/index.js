import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {BottomNavigation} from '../BottomNavigation';
import {St, Sv} from 'components/index';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};
