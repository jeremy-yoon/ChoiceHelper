import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {AccountCreateScreen} from './screens/AccountCreateScreen';
import { QRcodeScreen } from './screens/QRcodeScreen/index';
import { NoticeScreen } from './screens/NoticeScreen/index';
import { PayScreen } from './screens/PayScreen/index';
import { ConfirmScreen } from './screens/ConfirmScreen/index';
import { AccountConfScreen } from './screens/AccountConfScreen/index';

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
      <Stack.Screen name="HomeScreen" 
        component={HomeScreen} 
      />
      <Stack.Screen
        name="AccountCreateScreen"
        component={AccountCreateScreen}
      />            
      <Stack.Screen
        name="QRcodeScreen"
        component={QRcodeScreen}
      />
      <Stack.Screen
        name="NoticeScreen"
        component={NoticeScreen}
      />  
      <Stack.Screen
        name="PayScreen"
        component={PayScreen}
      />          
       <Stack.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
      />              
      <Stack.Screen
      name="AccountConfScreen"
      component={AccountConfScreen}
      />
    </Stack.Navigator>
  );
};
