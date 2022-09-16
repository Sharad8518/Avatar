import { View, Text,Image ,Animated,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef
} from 'react-native-shared-element';
import Detail from './Detail';

export default function Share({navigation}) {
   
  let endAncestor;
let endNode;
let startAncestor;
let startNode;
const position = new Animated.Value(0);
  return (
    <>
<View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
  <Text>Move</Text>
  </TouchableOpacity>
</View>


    </>



  )
}





