import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { Angry, Anxity, Bell, Calm, Depression, Energy, Goarrow, Happy, Rest, Sad, Sun, Tracking } from '../../Assets/svg';
import Radio from '../../UiComponents/Radio';

const Home = () => {
  const data = [
    {
      id: 1,
      activity: "Healthy  activities",
      work: "Take a Break Every Hour"
    },
    {
      id: 2,
      activity: "Mindfulness activities",
      work: "Body scan Meditation"
    },
    {
      id: 3,
      activity: "Mindfulness activities",
      work: "Journaling"
    },
    {
      id: 4,
      activity: "Relaxation activities",
      work: "4-7-8 Breathing Technique "
    }
  ]
  return (
    <ScrollView>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <View style={styles.view3}>
          <Depression />
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.button}>
            <Bell />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.view4}>
        <Text style={styles.text}>Hi, Maddy</Text>
        <Text style={styles.text1}>This is your first day at Defeat Depression.</Text>
        <Text style={styles.text2}>How are you feeling now?</Text>

        <View style={styles.view5}>
          <TouchableOpacity style={styles.button1}>
            <View style={styles.view6}>
              <Happy />
            </View>
            <Text style={styles.text3}>Happy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <View style={styles.view7}>
              <Angry />
            </View>
            <Text style={styles.text3}>Sad</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <View style={styles.view8}>
              <Sad />
            </View>
            <Text style={styles.text3}>Angry</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <View style={styles.view9}>
              <Calm />
            </View>
            <Text style={styles.text3}>Calm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <View style={styles.view10}>
              <Anxity />
            </View>
            <Text style={styles.text3}>Anxiety</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text2}>Today Affirmation</Text>

        <View style={styles.view12}>
          <Sun />
          <View>
            <View style={styles.view11}>
              <Text style={styles.text4}>Good Morning!</Text>
              <TouchableOpacity>
                <Text style={styles.text5}>now</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text6}>Today will be gorgeous day. i am safe and sound.</Text>
            <Text style={styles.text6}>All is well. I am greatful</Text>
          </View>
        </View>

        <View style={styles.view13}>
          <Text style={styles.text2}>My plan</Text>
          <TouchableOpacity>
            <Text style={styles.text7}>View all</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text8}>End Stress/ anxiety . week 1 </Text>
        {/* add progress bar here */}

        <View style={styles.view14}>
          <View>
            <View style={styles.view15}>
              <Text style={styles.text9}>Day 6</Text>
              <Text style={styles.text10}>Behaviour</Text>
            </View>
            <Text style={styles.text11}>Rest and relaxation</Text>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.text12}>Continue</Text>
            </TouchableOpacity>
          </View>
          <Rest />
        </View>

        <View style={styles.view13}>
          <Text style={styles.text2}>Today's activities</Text>
          <TouchableOpacity>
            <Text style={styles.text7}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view17}>
          <Text style={styles.text8}>Total progress</Text>
          <Text style={styles.text8}>0/5</Text>
        </View>
        {/* add progres bar here */}

        <View style={styles.view16}>
          {
            data.map((item) => <TouchableOpacity style={styles.button3}>
              <Radio />
              <View>
                <Text style={styles.text13}>{item.activity}</Text>
                <Text style={styles.text14}>{item.work}</Text>
              </View>
            </TouchableOpacity>)
          }
        </View>

        <Text style={styles.text2}>Assessments</Text>

        <TouchableOpacity style={styles.view18}>
          <View>
            <Text style={styles.text15}>Your evaluation</Text>
            <Text style={styles.text16}>Take an assessment to track your axiety,</Text>
            <Text style={styles.text16}>stress, and depression score</Text>
            <Text style={styles.text17}>Take assessment</Text>
          </View>
          <Tracking />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4}>
          <View style={styles.view19}>
            <Energy />
            <View>
              <Text style={styles.text18}>Quick Relif</Text>
              <Text style={styles.text19}>Relax and get back into the right </Text>
              <Text style={styles.text19}>mindspace</Text>
            </View>
          </View>
          <Goarrow/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  view1: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    height: 22,
    width: 22,
    backgroundColor: COLOR.lightgrey,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10
  },
  view2: {
    width: "40%"
  },
  view3: {
    width: "60%",
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  view4: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLOR.blue
  },
  text1: {
    fontFamily: FONTS.semibold,
    fontSize: 11,
    color: COLOR.hometext
  },
  text2: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLOR.grey,
    marginTop: 20
  },
  view5: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button1: {
    backgroundColor: COLOR.lightgrey,
    alignItems: "center",
    width: 60,
    borderRadius: 6
  },
  view6: {
    backgroundColor: COLOR.green,
    padding: 10,
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLOR.grey,
    marginBottom: 10
  },
  view7: {
    backgroundColor: COLOR.orange,
    padding: 10,
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  view8: {
    backgroundColor: COLOR.red,
    padding: 10,
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  view9: {
    backgroundColor: COLOR.purple,
    padding: 10,
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  view10: {
    backgroundColor: COLOR.bluepurple,
    padding: 10,
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  text4: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.blue
  },
  text5: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLOR.black
  },
  view11: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 10
  },
  text6: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.black,
    marginLeft: 10

  },
  view12: {
    backgroundColor: COLOR.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    padding: 12,
    marginTop: 10,
    shadowOpacity: 10,
    elevation: 10,
    shadowColor: COLOR.lightgrey
  },
  view13: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  text7: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.blue,
    marginTop: 20
  },
  text8: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: COLOR.hometext,
    marginTop: 10
  },
  view14: {
    backgroundColor: COLOR.white,
    padding: 15,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    shadowOpacity: 10,
    elevation: 10,
    shadowColor: COLOR.lightgrey
  },
  view15: {
    flexDirection: "row",
    alignItems: "center"
  },
  text9: {
    color: COLOR.hometext,
    fontFamily: FONTS.bold,
    fontSize: 8,
    backgroundColor: COLOR.lightgrey,
    padding: 5,
    borderRadius: 2
  },
  text10: {
    color: COLOR.lightgrey,
    fontFamily: FONTS.bold,
    fontSize: 8,
    marginLeft: 15
  },
  text11: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLOR.grey,
    marginTop: 5
  },
  text12: {
    color: COLOR.white,
    fontFamily: FONTS.bold,
    fontSize: 10
  },
  button2: {
    backgroundColor: COLOR.blue,
    padding: 5,
    width: 64,
    marginTop: 10,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  button3: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    borderRadius: 6,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  text13: {
    fontFamily: FONTS.bold,
    fontSize: 8,
    color: COLOR.hometext,
    marginLeft: 10

  },
  text14: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: COLOR.grey,
    marginLeft: 10
  },
  view16: {
    marginTop: 20
  },
  view17: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view18: {
    backgroundColor: COLOR.white,
    padding: 15,
    marginTop: 10,
    borderColor: COLOR.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    shadowOpacity: 10,
    elevation: 10,
    shadowColor: COLOR.lightgrey,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text15: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.grey,
    marginBottom: 5
  },
  text16: {
    fontFamily: FONTS.semibold,
    fontSize: 8,
    color: COLOR.hometext
  },
  text17: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: COLOR.blue,
    marginTop: 10
  },
  button4:{
    backgroundColor:COLOR.white,
    borderColor:COLOR.lightgrey,
    borderRadius:6,
    borderWidth:1,
    shadowOpacity:10,
    shadowColor:COLOR.lightgrey,
    elevation:10,
    flexDirection:"row",
    marginTop:30,
    padding:15,
    alignItems:"center",
    justifyContent:"space-between"
  },
  view19:{
    flexDirection:"row",
    alignItems:"center"
  },
  text18:{
    fontFamily:FONTS.bold,
    fontSize:10,
    color:COLOR.grey,
    marginLeft:10

  },
  text19:{
    fontFamily:FONTS.semibold,
    color:COLOR.hometext,
    fontSize:8,
    marginLeft:10
  }
})
export default Home;