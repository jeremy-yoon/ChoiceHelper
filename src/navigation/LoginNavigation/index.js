import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {LoginScreen} from './screens/LoginScreen';

const Stack = createStackNavigator();

export const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.select({android: false, ios: true}),
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
