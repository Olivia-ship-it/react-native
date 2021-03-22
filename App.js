import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/HomeScreen';
import Favorites from './src/screens/FavoritesScreen';
import Profile from './src/screens/ProfileScreen';
import Upload from './src/screens/UploadScreen'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#264653"
      barStyle={{ backgroundColor: '#2a9d8f', paddingBottom: 15}}
      tabBarOptions={{ showLabel: false }}
      labeled={false}
    >
      <Tab.Screen 
        name="Upload" 
        component={Upload}
        tabBarOptions={{ showLabel: false }}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        tabBarOptions={{ showLabel: false }} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
