import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {colors} from 'styles/colors';
import n from 'helper/normalize';
import {HomeNavigation} from 'navigation/HomeNavigation/index';

const Tab = createBottomTabNavigator();

const mainRoutes = [
  {
    name: '홈',
    component: HomeNavigation,
  },
];

const isTabBarVisible = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';
  return ['HomeScreen'].includes(routeName);
};

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {display: isTabBarVisible(route) ? 'flex' : 'none'},
        headerShown: false,
      })}
      // screenOptions={{tabBarVisible: true}}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          backgroundColor: '#FFF',
          borderTopLeftRadius: n(20),
          borderTopRightRadius: n(20),
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.08,
          position: 'absolute',
        },
        showLabel: false,
        labelStyle: {},
        tabBarOnPress: () => {
          alert('으이~');
        },
      }}>
      {mainRoutes.map(({name, component, options}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};
