/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home/Home';
import BookDetail from '../screens/BookDetail/index';
import Libraries from '../screens/Profile';
import Profile from '../screens/Libraries';
import { BottomTabParamList, TabHomeParamList, TabLibrariesParamList, TabProfileParamList } from '../types';
import Search from '../screens/Search';

const homeIcon = require('../assets/images/home.png');
const librariesIcon = require('../assets/images/libraries.png');
const profileIcon = require('../assets/images/user.png');

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="BookDetail"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <Image source={homeIcon} />,
        }}
      />
      <BottomTab.Screen
        name="Libraries"
        component={LibrariesTab}
        options={{
          tabBarIcon: ({ color }) => <Image source={librariesIcon} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <Image source={profileIcon} />,
        }}
      />

      <BottomTab.Screen
        name="BookDetail"
        component={DetailTab}
        options={{
          tabBarIcon: ({ color }) => <Image source={profileIcon} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabHomeParamList>();

function HomeTab() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={Home}

      />
    </TabOneStack.Navigator>
  );
}

const TabLibrariesStack = createStackNavigator<TabLibrariesParamList>();

function LibrariesTab() {
  return (
    <TabLibrariesStack.Navigator>
      <TabLibrariesStack.Screen
        name="Libraries"
        component={Libraries}
      />
    </TabLibrariesStack.Navigator>
  );
}

const TabProfileStack = createStackNavigator<TabProfileParamList>();

function ProfileTab() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="Profile"
        component={Search}
      />
    </TabProfileStack.Navigator>
  );
}

const TabDetailStack = createStackNavigator<TabProfileParamList>();

function DetailTab() {
  return (
    <TabDetailStack.Navigator>
      <TabDetailStack.Screen
        name="Profile"
        component={BookDetail}
      />
    </TabDetailStack.Navigator>
  );
}
