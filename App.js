import 'react-native-gesture-handler';
import React from 'react';

import ShopView from './components/ShopView'
import CartView from './components/CartView'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Shop' component={ShopView} />
        <Tab.Screen name='Cart' component={CartView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}