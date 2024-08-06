import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { Eating, Enjoying, Go, Goarrow, Relaxing, Water } from '../../Assets/svg';

const Activities = () => {
  const data = [
    {
      id: 1,
      name: "Mon",
    },
    {
      id: 2,
      name: "Tue",
    },
    {
      id: 3,
      name: "Wed",
    },
    {
      id: 4,
      name: "Thu",
    },
    {
      id: 5,
      name: "Fri",
    },
    {
      id: 6,
      name: "Sat",
    },
    {
      id: 7,
      name: "Sun",
    },
  ]
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <Text style={styles.text}>Activities</Text>
      <Text style={styles.text1}>June 6 . 3 activities left</Text>

      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text2}>{item.name}</Text>
              <Text style={styles.text2}>{item.id}</Text>
            </TouchableOpacity>
          )
        }}
      />

      <View style={styles.view4}>

        <View style={styles.view1}>
          <View style={styles.view3}>
            <Water />
            <View style={styles.view2}>
              <Text style={styles.text3}>Healthy activity</Text>
              <Text style={styles.text4}>Drink 8 glasses of water per day</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Goarrow />
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <View style={styles.view3}>
            <Relaxing />
            <View style={styles.view2}>
              <Text style={styles.text3}>Relaxation activity</Text>
              <Text style={styles.text4}>Deep breathing</Text>
              <Text style={styles.text3}>6:00 PM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Goarrow />
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <View style={styles.view3}>
            <Eating />
            <View style={styles.view2}>
              <Text style={styles.text3}>Healthy activity</Text>
              <Text style={styles.text4}>Eat and healthy meal</Text>
              <Text style={styles.text3}>7:00 PM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Goarrow />
          </TouchableOpacity>
        </View>

        <View style={styles.view1}>
          <View style={styles.view3}>
            < Enjoying />
            <View style={styles.view2}>
              <Text style={styles.text3}>Mindfulness activity</Text>
              <Text style={styles.text4}>15 Minutes od doing</Text>
              <Text style={styles.text4}>something You Enjoy</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Goarrow />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text5}>Add activity</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLOR.grey,
    marginTop: 30
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 8,
    color: COLOR.hometext
  },
  text2: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.grey
  },
  button: {
    backgroundColor: COLOR.white,
    height: 52,
    width: 38,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLOR.lightgrey,
    borderWidth: .5,
    borderRadius: 6,
    elevation: 1,
    shadowOpacity: 10,
    shadowColor: COLOR.lightgrey,
    margin: 5,
  },
  text4: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: COLOR.grey
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 8,
    color: COLOR.hometext
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLOR.white,
    padding: 10,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    borderRadius: 6,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: COLOR.lightgrey,
    marginVertical: 10
  },
  view2: {
    marginLeft: 10
  },
  view3: {
    flexDirection: "row",
    alignItems: "center"
  },
  button1: {
    padding: 10
  },
  view4: {
    height: "80%"
  },
  text5: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.blue
  },
  button2: {
    height: 60,
    backgroundColor: COLOR.white,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: COLOR.lightgrey,
    shadowOpacity: 10,
    marginTop: 50
  }

})
export default Activities;