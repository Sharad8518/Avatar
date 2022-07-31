import { View, Text,TouchableHighlight, Animated, Button } from 'react-native'
import Swipeable from 'react-native-swipeable';
import React from 'react'

const leftButtons = [
<Animated.View style={{flexDirection:"column",backgroundColor:"#2ecc71" ,marginTop:20,height:50,alignItems:"flex-end",justifyContent:"center",marginRight:20}}><TouchableHighlight ><Text style={{color:"#000"}}>asffdsdf</Text></TouchableHighlight></Animated.View>

];
 
const rightButtons = [
  <Animated.View style={{flexDirection:"column",backgroundColor:"#2ecc71" ,marginTop:20,height:50,alignItems:"flex-start",justifyContent:"center"}}>
  <TouchableHighlight onPress={()=>alert("ok")}><Text style={{marginLeft:20}}>Edit</Text></TouchableHighlight>
  </Animated.View>,
  <Animated.View style={{flexDirection:"column",backgroundColor:"#EA2027" ,marginTop:20,height:50,alignItems:"flex-start",justifyContent:"center"}}>
  <TouchableHighlight onPress={()=>alert("no")}><Text style={{marginLeft:20}}>Delete</Text></TouchableHighlight>
  </Animated.View>
];

export default function SwipeablesPage() {
  return (
    <Swipeable leftButtons={leftButtons} rightButtons={rightButtons}  >
      <Animated.View style={{flexDirection:"column",backgroundColor:"#000" ,marginTop:20,height:50,alignItems:"center",justifyContent:"center"}}>
        
    <Text style={{color:"#fff"}}>My swipeable content</Text>
    </Animated.View>
  </Swipeable>
  )
}