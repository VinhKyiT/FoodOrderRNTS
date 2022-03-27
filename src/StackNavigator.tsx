import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AccountScreen from './screens/AccountScreen';
import OfferScreen from './screens/OfferScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={CartScreen} />
      </Tab.Navigator>
    </>
  );
};

export default StackNavigator;
