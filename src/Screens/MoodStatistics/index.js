import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { BlackX } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';

const MoodStatistics = () => {
  const navigation=useNavigation();
  const [toggle, setToggle] = useState()
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.moodPink} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <View style={styles.view2}>
          <TouchableOpacity onPress={()=>navigation.goBack()}
          style={styles.button}>
            <BlackX />
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>Mood Statistics</Text>
        </View>
      </View>

      <View style={styles.view4}>
        <TouchableOpacity onPress={() => setToggle(0)}
          style={toggle === 0 ? styles.button2 : styles.button1}>
          <Text style={toggle === 0 ? styles.text2 : styles.text1}>Week</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setToggle(1)}
          style={toggle === 1 ? styles.button2 : styles.button1}>
          <Text style={toggle === 1 ? styles.text2 : styles.text1}>Month</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setToggle(2)}
          style={toggle === 2 ? styles.button2 : styles.button1}>
          <Text style={toggle === 2 ? styles.text2 : styles.text1}>Year</Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* add map 1 */}
      </View>

      <View>
        {/* add map 2 */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.moodPink
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLOR.blue,
  },
  button: {
    padding: 10
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10
  },
  view2: {
    width: "30%"
  },
  view3: {
    width: "50%"
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.yellow
  },
  button1: {
    borderWidth: 1,
    borderColor: COLOR.yellow,
    borderRadius: 6,
    height: 31,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.white,
    margin: 10
  },
  button2: {
    borderWidth: 1,
    borderColor: COLOR.yellow,
    borderRadius: 6,
    height: 31,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.yellow,
    margin: 10
  },
  text2: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.white
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})
export default MoodStatistics;