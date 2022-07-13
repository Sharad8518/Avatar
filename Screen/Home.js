import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


export default function Home() {
 
  return (
    <View>
    <Text>Bezier Line Chart</Text>
    <LineChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 500,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
             
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={500}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#fff"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 1
      }}
    />
  </View>
  )
}