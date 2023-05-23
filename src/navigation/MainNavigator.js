import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Hometabs' component={HomeBottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
