/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Libraries from '../screens/Profile';
import Profile from '../screens/Libraries';
import { BottomTabParamList, TabHomeParamList, TabLibrariesParamList, TabProfileParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Libraries"
        component={LibrariesTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
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
        component={Profile}
      />
    </TabProfileStack.Navigator>
  );
}
