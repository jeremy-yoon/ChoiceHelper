import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {DealScreen} from './screens/DealScreen';

const Stack = createStackNavigator();

export const DealNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DealScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.select({android: false, ios: true}),
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="DealScreen" component={DealScreen} />
    </Stack.Navigator>
  );
};
