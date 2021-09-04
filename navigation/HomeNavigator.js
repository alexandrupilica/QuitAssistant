 import React from 'react';
 import { View, StyleSheet } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import UpdatePage from '../components/UpdatePage';

 const Stack = createNativeStackNavigator();

 const HomeNavigator = () => {
  return (    
      <Stack.Group> 
          <Stack.Screen name='Acasa2' component={Home}></Stack.Screen>
          <Stack.Screen name='Update Stats' component={UpdatePage}></Stack.Screen>
      </Stack.Group>    
  );
};
  
export default HomeNavigator;