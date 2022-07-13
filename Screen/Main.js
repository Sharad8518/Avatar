import { View, Text,StyleSheet ,SafeAreaView,Image,TouchableOpacity, Animated} from 'react-native'
import React,{useRef, useState} from 'react'
import Feather from 'react-native-vector-icons/Feather';
export default function Main() {

 const[showMenu,setShowMenu] =useState(false)

 const offsetValue = useRef(new Animated.Value(0)).current;
 // Scale Intially must be One...
 const scaleValue = useRef(new Animated.Value(1)).current;
 const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView  style={styles.container}>
    <View  style={{justifyContent:"flex-start",padding:15}} >

     



      <Image source={{uri:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"}} style={{width:60,height:60,borderRadius:10}}/>
      <Text style={{ fontSize:20,fontWeight:"bold" ,color:"#fff",marginTop:20 }}>Pavan Kumar</Text>

    <TouchableOpacity>
        <Text  style={{
         marginTop:6,
         color:"#fff"
        }}>View Profile</Text>
    </TouchableOpacity>

    </View>





    <View style={{flexDirection:"row",backgroundColor:"#fff",width:150,height:40, alignItems:"center",justifyContent:"center",marginLeft:10,borderRadius:10}}>
  <Feather name="home" size={20}  style={{marginTop:2,color:"#000"}}/>
<Text style={{fontSize:19,marginLeft:5,fontWeight:"700",color:"#000"}}>Home</Text>
    </View>







{
        //over lay View

     }
     <Animated.View  style={{
     flexGrow:1,
     backgroundColor:"#fff",
     position:"absolute",
     top:0,
     bottom:0,
     left:0,
     right:0,
     paddingHorizontal:15,
     paddingVertical:20,
     borderRadius: showMenu ? 15:0,
     transform:[
      {scale:scaleValue},
      {translateX:offsetValue}
      
     ]


     }}>

<Animated.View style={{
  transform :[{
    translateY:closeButtonOffset
  }]
}}>


  
<TouchableOpacity onPress={()=>{
      
      Animated.timing(scaleValue,{
        toValue:showMenu?1:0.88,
        duration:300,
        useNativeDriver:true
      })
        .start()

        Animated.timing(offsetValue,{
          toValue:showMenu?0 : 220,
          duration:300,
          useNativeDriver:true
        })
          .start()

         Animated.timing(closeButtonOffset,{
            toValue: !showMenu?-30 : 0,
            duration:300,
            useNativeDriver:true
          })
            .start()



      setShowMenu(!showMenu)

  
    }}>
       <View style={{marginTop:10,marginLeft:10,backgroundColor:"#5359D1",width:50}}>
        {
          showMenu ?
           <>
           <Feather name="x" size={30} color="#fff" style={{padding:10}} />
           </>
          :
          <Feather name="align-left" size={30} color="#fff" style={{padding:10}} />
        }

       
       </View>

    </TouchableOpacity>

     <Text style={{marginTop:10,fontSize:30,marginLeft:10}}>Home</Text>

</Animated.View>







     </Animated.View>







    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1  ,
    backgroundColor:"#5359D1",
    alignItems:"flex-start",
    justifyContent:"flex-start"
}


})