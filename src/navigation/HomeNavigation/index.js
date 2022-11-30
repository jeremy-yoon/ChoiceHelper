import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {AddWorryScreen} from './screens/AddWorryScreen';
import {WorryDetailScreen} from './screens/WorryDetailScreen';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.select({android: false, ios: true}),
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddWorryScreen" component={AddWorryScreen} />
      <Stack.Screen name="WorryDetailScreen" component={WorryDetailScreen} />
    </Stack.Navigator>
  );
};
