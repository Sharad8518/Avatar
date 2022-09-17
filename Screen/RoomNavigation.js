import { View, Text, Easing } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Share from './Share';
import Detail from './Detail';
import { TransitionSpecs } from 'react-navigation-stack';


  const Stack =  createNativeStackNavigator();


  // const MySwitch = createAnimatedSwitchNavigator(
  //   {
  //     Home: HomeScreen,
  //     Other: OtherScreen,
  //   },
  //   {
  //     // The previous screen will slide to the bottom while the next screen will fade in
  //     transition: (
  //       <Transition.Together>
  //         <Transition.Out
  //           type="slide-bottom"
  //           durationMs={400}
  //           interpolation="easeIn"
  //         />
  //         <Transition.In type="fade" durationMs={500} />
  //       </Transition.Together>
  //     ),
  //   }
  // );


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

 const closeConfig ={
  
  animation: 'timing',
  
  config:{
  
    duration:200,
    easing  :Easing.linear,

  }


 }

const customTransition ={
gestureEnabled:true,
gestureDirection:"horizontal",
transitionSec:{

  open:TransitionSpecs.TransitionIOSSpec,
  close:TransitionSpecs.TransitionIOSSpec,
},

cardStyleInterpolator:({current,next,layouts})=>{
return{
cardStyle:{
  transform:[
      {
        translateX:current.progress.interpolate({

            
        })
      }
  ]
}

}


}

}



export default function RoomNavigation() {

    
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{  
     gestureEnabled:true,
     gestureDirection:"vertical",
     transitionConfig :{
      open:config,
      close:closeConfig,
     },
    

  }}  >
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Detail" component={Detail}
      
      
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}