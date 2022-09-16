import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Share from './Share';
import Detail from './Detail';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

  const Stack =  createNativeStackNavigator();

 const config ={
  
  animation: 'spring',

  config:{
    stiffness:1000,
    damping:50,
    mass:3,
    overshootClamping:false,
    restDisplacementThreshold:0.01,
    restSpeedThreshold:0.01 
  }

 }


export default function RoomNavigation() {

    
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal',
     
     transitionSpec:{
      open:config,
      close:config
     }

  }}  >
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Detail" component={Detail}
      
      
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}