import { Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Discover, Home, Inbox, Profile, Upload } from '../screens';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        tabBarItemStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Discover'
        component={Discover}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='search1' color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Upload'
        component={Upload}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/upload-button.png')}
              style={{ height: 35, resizeMode: 'contain' }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name='Inbox'
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='message-minus-outline'
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
