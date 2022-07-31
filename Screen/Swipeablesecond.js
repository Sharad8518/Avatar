
import React from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
export default function Swipeablesecond() {
    <RectButton style={{backgroundColor:"#EA2027"}} >
        <Animated.Text>
          Archive
        </Animated.Text>
      </RectButton>
  return (
    <View>
      <Swipeable renderLeftActions={this.renderLeftActions}>
        <Text>"hello"</Text>
      </Swipeable>
    </View>
  )
}