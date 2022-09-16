import { View, Text,Image } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-native-shared-element';

export default function Detail() {
  return (
    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <SharedElement id="image">
    <Image source={{uri:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}}  style={{width:350,height:500}}  />
    </SharedElement>
    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

    </View>
  )
}