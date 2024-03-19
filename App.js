import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';

import Login from './pages/login';
import Rotas from './pages/rotinhas';

const Rota = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Rotinhas" component={Rotas} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}