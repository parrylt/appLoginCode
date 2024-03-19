import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';


import Ignorados from './ignorados';
import Home from './home';
import Legais from './legais';

const Tab = createBottomTabNavigator();

export default function rotinhas() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Gente Legal"
        component={Legais}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="legais" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Homepage"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ignorados"
        component={Ignorados}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}