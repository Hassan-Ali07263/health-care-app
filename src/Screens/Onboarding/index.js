import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={"#3A9997"} barStyle={"light-content"} />
      <ImageBackground style={styles.imagebackground} source={IMAGES.Onboarding}>
        <View style={styles.view}></View>
        <View style={styles.view2}>
          <View style={styles.view1}>
            <Text style={styles.text}>Start Your day positively</Text>
            <Text style={styles.text}>by focusing on the good in</Text>
            <Text style={styles.text}>your life</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Signlog")}
            style={styles.button}>
              <Text style={styles.text1}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  imagebackground: {
    height: "100%",
    width: "100%"
  },
  view2:{
    flex:1,
    justifyContent:'center',
    marginBottom:60
  },
  view1: {
    backgroundColor: COLOR.white,
    marginHorizontal: 25,
    borderRadius: 14,
    alignItems: 'center',
    padding:15,
    shadowOpacity:1,
    elevation:10

  },
  text: {
    fontFamily: FONTS.regular,
    color: COLOR.textcolor,
    fontSize: 16,
    flexWrap: "wrap"
  },
  text1: {
    fontFamily: FONTS.medium,
    color: COLOR.white,
    fontSize: 12
  },
  button: {
    backgroundColor: COLOR.blue,
    padding: 10,
    borderRadius: 6,
    margin: 15,
    width:111,
    alignItems:'center'

  }
})
export default Onboarding;