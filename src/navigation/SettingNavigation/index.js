import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {SettingScreen} from './screens/SettingScreen';

const Stack = createStackNavigator();

export const SettingNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.select({android: false, ios: true}),
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
