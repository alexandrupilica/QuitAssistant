import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeNavigator } from './HomeNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UpdatePage from '../components/UpdatePage';
import Home from '../components/Home';
import Trophies from '../components/Trophies';
import Health from '../components/Health';
import TabBar from '../components/TabBar';
import Diary from '../components/Diary';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
    return (     
        <Stack.Group> 
            <Stack.Screen name='Acasa' component={Home}></Stack.Screen>
            <Stack.Screen name='Update Stats' component={UpdatePage}></Stack.Screen>
        </Stack.Group>    
    );
  };

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (    
        <Tab.Navigator tabBar={(props) => <TabBar {...props} /> }>
            <Tab.Screen name='Acasa2' component={HomeNavigator}  initialParams={{icon: 'home'}}></Tab.Screen>
            <Tab.Screen name='Trofee' component={Trophies} initialParams={{icon: 'trophy'}}></Tab.Screen>
            <Tab.Screen name='Sanatate' component={Health} initialParams={{icon: 'briefcase-medical'}}></Tab.Screen>
            <Tab.Screen name='Jurnal' component={Diary} initialParams={{icon: 'book'}}></Tab.Screen>
        </Tab.Navigator>    
    );
};


export default TabNavigator;