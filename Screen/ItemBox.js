import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import React from 'react'

const SCREEN_WIDTH =Dimensions.get('window').width

export default function ItemBox(props) {
  return (
    <View style={styles.container}>
      <Text>My name is{props.data.name}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
 container:{
    height:80,
    width :SCREEN_WIDTH,
    backgroundColor:"white",
    justifyContent:"center",
    padding:16,

 }



})