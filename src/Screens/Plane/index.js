import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Modal, Switch } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { Menuwhite, Threeline } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const Plane = () => {
  const navigation = useNavigation();

  const [breath, setBreath] = useState(true);
  const [ground, setGround] = useState(false);
  const [visualise, setVisualise] = useState(false);
  const [meditate, setMeditate] = useState(false);
  const [visible, setVisble] = useState(false);
  const [inhale, setInhale] = useState(0);
  const [inhale1, setInhale1] = useState(0);
  const [inhale2, setInhale2] = useState(0);
  const [inhale3, setInhale3] = useState(0);
  const [inhale4, setInhale4] = useState(0);
  const [toggle, setToggle] = useState(false)

  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.hometext} barStyle={"light-content"} />
      <ImageBackground style={styles.backimg} source={IMAGES.Planeback}>

        <View style={styles.view1}>
          <TouchableOpacity onPress={() => setVisble(true)}
            style={styles.button}>
            <Menuwhite />
          </TouchableOpacity>
          <Text style={styles.text}>Cope</Text>
          <TouchableOpacity style={styles.button}>
            <Threeline />
          </TouchableOpacity>
        </View>

        <View style={styles.view2}>
          <TouchableOpacity onPress={() => {
            setBreath(true);
            setMeditate(false);
            setGround(false);
            setVisualise(false)
          }}
            style={styles.button1}>
            <Text style={breath ? styles.text2 : styles.text1}>BREATH</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setGround(true);
            setBreath(false);
            setMeditate(false);
            setVisualise(false)
          }}
            style={styles.button1}>
            <Text style={ground ? styles.text2 : styles.text1}>GROUND</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setVisualise(true);
            setBreath(false);
            setMeditate(false);
            setGround(false)
          }}
            style={styles.button1}>
            <Text style={visualise ? styles.text2 : styles.text1}>VISUALISE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setMeditate(true);
            setBreath(false);
            setGround(false);
            setVisualise(false)
          }}
            style={styles.button1}>
            <Text style={meditate ? styles.text2 : styles.text1}>MEDITATE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text3}>CYCLE {inhale4}/{inhale4}</Text>
          <View style={styles.view4}>
            <Text style={styles.text5}>INHALE</Text>
            <Text style={styles.text6}>{inhale}</Text>
            <Text style={styles.text3}>sec</Text>

          </View>
          <Text style={styles.text4}>00:{inhale+inhale1+inhale2+inhale3}</Text>
        </View>

        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}></View>
            <Text style={styles.text8}>Deep Breathing</Text>
            <View style={styles.view7}></View>
          </View>

          <View style={styles.view8}>
            <View style={styles.view9}>
              <Text style={styles.text9}>INHALE</Text>
              <Text style={styles.text10}>{inhale}</Text>
            </View>

            <View style={styles.view9}>
              <Text style={styles.text9}>HOLD</Text>
              <Text style={styles.text10}>2</Text>
            </View>

            <View style={styles.view9}>
              <Text style={styles.text9}>EXHALE</Text>
              <Text style={styles.text10}>{inhale}</Text>
            </View>

            <View style={styles.view9}>
              <Text style={styles.text9}>HOLD</Text>
              <Text style={styles.text10}>2</Text>
            </View>

            <View style={styles.view9}>
              <Text style={styles.text9}>CYCLES</Text>
              <Text style={styles.text10}>{inhale4}</Text>
            </View>
          </View>
        </View>

      </ImageBackground>

      <Modal visible={visible} animationType={"fade"}>
        <View style={styles.view10}>
          <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
          <View style={styles.view11}>
            <View style={styles.view13}>
              <Text style={styles.text11}>Deep Breathing</Text>
            </View>
            <View style={styles.view12}>
              <TouchableOpacity onPress={()=>setVisble(false)}
                style={styles.button2}>
                <Text style={styles.text12}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view15}>
            <View style={styles.view14}>
              <Text style={styles.text13}>INHALE</Text>
              <Text style={styles.text14}>{inhale} Second</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={12}
              minimumTrackTintColor={COLOR.blue}
              maximumTrackTintColor={COLOR.textcolor}
              onValueChange={(val) => setInhale(Math.round(val))}
            />
          </View>

          <View style={styles.view15}>
            <View style={styles.view14}>
              <Text style={styles.text13}>INHALE</Text>
              <Text style={styles.text14}>{inhale1} Second</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={6}
              minimumTrackTintColor={COLOR.blue}
              maximumTrackTintColor={COLOR.textcolor}
              onValueChange={(val) => setInhale1(Math.round(val))}
            />
          </View>

          <View style={styles.view15}>
            <View style={styles.view14}>
              <Text style={styles.text13}>INHALE</Text>
              <Text style={styles.text14}>{inhale2} Second</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={12}
              minimumTrackTintColor={COLOR.blue}
              maximumTrackTintColor={COLOR.textcolor}
              onValueChange={(val) => setInhale2(Math.round(val))}
            />
          </View>

          <View style={styles.view15}>
            <View style={styles.view14}>
              <Text style={styles.text13}>INHALE</Text>
              <Text style={styles.text14}>{inhale3} Second</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={6}
              minimumTrackTintColor={COLOR.blue}
              maximumTrackTintColor={COLOR.textcolor}
              onValueChange={(val) => setInhale3(Math.round(val))}
            />
          </View>

          <View style={styles.view15}>
            <View style={styles.view14}>
              <Text style={styles.text13}>INHALE</Text>
              <Text style={styles.text14}>{inhale4} Cycle</Text>
            </View>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={4}
              minimumTrackTintColor={COLOR.blue}
              maximumTrackTintColor={COLOR.textcolor}
              onValueChange={(val) => setInhale4(Math.round(val))}
            />
          </View>

          <View style={styles.view16}>
            <Text style={styles.text13}>DURATTION</Text>
            <Text style={styles.text14}>{inhale + inhale1 + inhale2 + inhale3} Second</Text>
          </View>

          <View style={styles.view16}>
            <Text style={styles.text13}>VOICE</Text>
            <Switch
              thumbColor={COLOR.yellow}
              trackColor={{ false: "lightgrey", true: "grey" }}
              ios_backgroundColor="#3e3e3e"
              value={toggle}
              onValueChange={() => setToggle(!toggle)}
            />
          </View>

        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  backimg: {
    height: "100%",
    width: "100%"
  },
  view1: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
    marginVertical: 10
  },
  button: {
    padding: 10
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLOR.white,
    padding: 10
  },
  text1: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.white
  },
  text2: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.yellow,
    borderBottomColor: COLOR.yellow,
    borderBottomWidth: 1
  },
  view2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10
  },
  button1: {
    padding: 10
  },
  view3: {
    backgroundColor: "#EEEEEEB2",
    height: 185,
    width: 185,
    borderRadius: 200,
    borderColor: COLOR.yellow,
    borderWidth: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 120
  },
  text3: {
    fontFamily: FONTS.semibold,
    fontSize: 8,
    color: COLOR.black
  },
  view4: {
    height: 100,
    width: 100,
    backgroundColor: "#F7F7F766",
    borderRadius: 100,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  text4: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLOR.black
  },
  text5: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.black
  },
  text6: {
    fontFamily: FONTS.semibold,
    fontSize: 26,
    color: COLOR.black
  },
  text8: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLOR.blue,
    paddingHorizontal: 10
  },
  view7: {
    borderBottomWidth: 1,
    borderColor: COLOR.blue,
    width: "30%",
    alignSelf: "center"
  },
  view6: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  view5: {
    backgroundColor: COLOR.white,
    height: 120,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "space-evenly"
  },
  text9: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.black,
    alignSelf: "center"
  },
  text10: {
    fontFamily: FONTS.semibold,
    color: COLOR.black,
    fontSize: 16,
    alignSelf: "center"
  },
  view9: {
    borderRightWidth: 1,
    borderColor: COLOR.lightgrey,
    paddingHorizontal: 15
  },
  view8: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view10: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  text11: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLOR.grey,
    alignSelf: "flex-end"
  },
  text12: {
    fontFamily: FONTS.semibold,
    fontSize: 12,
    color: COLOR.grey,
    alignSelf: "flex-end"
  },
  view11: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    justifyContent: "center",
    paddingVertical: 10
  },
  view12: {
    width: "40%",
  },
  view13: {
    width: "60%",
  },
  button2: {
    padding: 10
  },
  text13: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    color: COLOR.grey,
    marginHorizontal: 10
  },
  text14: {
    fontFamily: FONTS.semibold,
    fontSize: 10,
    color: COLOR.black,
    marginHorizontal: 10
  },
  view14: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view15: {
    marginVertical: 20,
    height: 58,
    backgroundColor: "#F3F3F3",
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 4,
    elevation: 10,
    shadowColor: COLOR.lightgrey,
    shadowOpacity: 10
  },
  view16: {
    marginVertical: 20,
    height: 58,
    backgroundColor: "#F3F3F3",
    marginHorizontal: 20,
    borderRadius: 4,
    elevation: 10,
    shadowColor: COLOR.lightgrey,
    shadowOpacity: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  }
})
export default Plane;