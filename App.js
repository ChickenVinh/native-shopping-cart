import 'react-native-gesture-handler'
import React from 'react'

import ShopView from './components/ShopView'
import CartView from './components/CartView'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen
          name='Shop'
          component={ShopView}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name='shop' color={focused ? '#33cc00' : '#808080'} size={30} />
            )
          }}
        />
        <Tab.Screen
          name='Cart'
          component={CartView}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name='shopping-cart' color={focused ? '#33cc00' : '#808080'} size={30} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}