import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, Dimensions, ScrollView } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { Menublack, Pluss, WhiteX } from '../../Assets/svg';
import { Calendar } from 'react-native-calendars';

import {
  BarChart,
} from "react-native-chart-kit";
import { useNavigation } from '@react-navigation/native';

const Mood = () => {
  const navigation=useNavigation();

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const [selectedDates, setSelectedDates] = useState({});
  const [toggle, setToggle] = useState(0)

  const onDayPress = (day) => {
    const selectedDate = day.dateString;
    setSelectedDates((prevDates) => {
      const newDates = { ...prevDates };
      if (newDates[selectedDate]) {
        delete newDates[selectedDate];
      } else {
        newDates[selectedDate] = { selected: true, marked: true, selectedColor: 'blue' };
      }
      return newDates;
    });
  };


  return (
    <View style={styles.view}>
      
      <StatusBar backgroundColor={COLOR.yellow} barStyle={"dark-content"} />

      <View style={styles.view1}>
        <ImageBackground style={styles.imgBack} source={IMAGES.Moodback}>
          <TouchableOpacity
          style={styles.button}>
            <WhiteX />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      
        <View style={styles.view2}>

          <View style={styles.view3}>
            <TouchableOpacity onPress={()=>navigation.navigate("MoodStatistics")}
            style={styles.button1}>
              <Menublack />
            </TouchableOpacity>
            <View style={styles.view4}>
              <Text style={styles.text}>Mood Check in</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Feelings")}
              style={styles.button1}>
                <Pluss />
              </TouchableOpacity>
            </View>
          </View>

          <Calendar style={styles.view5}
            onDayPress={onDayPress}
            markedDates={selectedDates}
          />

          <View style={styles.view6}>
            <TouchableOpacity onPress={() => setToggle(0)}
              style={toggle === 0 ? styles.button2 : styles.button3}>
              <Text style={toggle === 0 ? styles.text2 : styles.text3}>This Week</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setToggle(1)}
              style={toggle === 1 ? styles.button2 : styles.button3}>
              <Text style={toggle === 1 ? styles.text2 : styles.text3}>This Month</Text>
            </TouchableOpacity>
          </View>

          <View>
            <BarChart
              data={data}
              width={Dimensions.get("window").width}
              height={220}
              yAxisLabel="$"
              chartConfig={{

                backgroundGradientFrom: COLOR.white,
                backgroundGradientTo: COLOR.white,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              verticalLabelRotation={30}
            />
          </View>

        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  view1: {
    flex: 1,

  },
  view2: {
    flex: 2,
    backgroundColor: COLOR.moodPink,
  },
  imgBack: {
    height: "100%",
    width: "100%"
  },
  button: {
    margin: 10,
    padding: 10
  },
  text: {
    fontFamily: FONTS.bold,
    color: COLOR.blue,
    fontSize: 16
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10
  },
  button1: {
    padding: 10
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "center"
  },
  view5: {
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: COLOR.black,
    elevation: 10,
    shadowOpacity: 1
  },
  view6: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: COLOR.lightgrey,
    height: 50,
    borderRadius: 6,
    borderColor: COLOR.ashwhite,
    borderWidth: 1,
    flexDirection: "row"
  },
  button2: {
    width: "50%",
    backgroundColor: COLOR.white,
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  text2: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.grey
  },
  text3: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.placeholdercolor
  },
  button3: {
    width: "50%",
    height: 48,
    justifyContent: "center",
    alignItems: "center"
  },
})
export default Mood;