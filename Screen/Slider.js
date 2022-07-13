import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Animated } from 'react-native';
import React from 'react'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'four Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'five Item',
      },

      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'six Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'seven Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'eigth Item',
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
export default function Slider() {
    const scrollY =React.useRef(new Animated.Value(0)).current
    const renderItem = ({ item }) => (
     
        <Item title={item.title} />
      );

  return (
    <SafeAreaView style={styles.container}>
       
    <Animated.FlatList
    onScroll={Animated.event(
        [{nativeEvent:{contentoffset:{y:scrollY}}}],
        {useNativeDriver:true}
    )}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    ></Animated.FlatList>
   
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });