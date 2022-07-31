import { View, Text ,Animated,StyleSheet,StatusBar,TouchableOpacity,TouchableHighlight,SafeAreaView,FlatList} from 'react-native'
import React,{useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import Notifications from "./Notification"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemBox from './ItemBox';

const data =[
  {id:"1",name:"Pavan"},
  {id:"2",name:"iShan"},
  {id:"3",name:"Durgesh"},
  {id:"4",name:"Pankaj"}

 ]

export default function SliderDelete() {

const [lists,setLists] =useState(data)
  

  
  return (
    <SafeAreaView>
      <FlatList  
      data={lists}
      renderItem={
        ({item})=>{

          return <ItemBox data={item}/>

        }}

        ItemSeparatorComponent={()=>{
          return <View style={styles.seperatorLine}></View>
        }}
      
      />
      </SafeAreaView>
  
  )
}
const styles =StyleSheet.create({
  seperatorLine:{
    height:1,
    backgroundColor:"#000"
  }

})