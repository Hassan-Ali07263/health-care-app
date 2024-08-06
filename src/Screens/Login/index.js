import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';
import { Email, Eye, Lock, WhiteArrow } from '../../Assets/svg';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { SigningUp } from '../Signup';
import { LastIntro } from '../Meditate';

import { MMKV } from 'react-native-mmkv';
export const CheckLogin=new MMKV();
const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [visible, setVisible] = useState(true)
  const [checkEmail, setCheckEmail] = useState(false)
  const [checkPassword, setCheckpassword] = useState(false)



  const handleValidEmail = (text) => {
    setEmail(text)
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(reg.test(text))
    setCheckEmail(!reg.test(text))
  }

  const handelPassword = (text) => {
    setPassword(text)
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
    setCheckpassword(!strongPasswordRegex.test(text))
  }

  const Logined = () => {
    console.log("start-------")
    const FetchedName = SigningUp.getString("name")
    const FetchedEmail = SigningUp.getString("email")
    const FetchedPassword = SigningUp.getString("password")
    const LastIntroValue=LastIntro.getBoolean("IntroVal")

    console.log(FetchedName, FetchedEmail, FetchedPassword,LastIntroValue)
    console.log("Loop start----")
    if (email === FetchedEmail && password === FetchedPassword) {
      console.log("1st loop done")
      if (checkEmail === false && checkPassword === false) {
        CheckLogin.set("LoginVal","true")
        navigation.navigate("Conditions")
      }
    }
    else {
      Alert.alert("Oops", "Looks like something went wrong")
    }
  }
  return (
    <View style={styles.view}>
      <ImageBackground style={styles.imgback} source={IMAGES.signupimg}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrow />
          </TouchableOpacity>

          <View style={styles.view4}>
            <Text style={styles.text1}>Hey There</Text>
            <Text style={styles.text3}>sign in to continue your mindfulness journey</Text>
          </View>

          <Text style={styles.text4}>Email</Text>
          <View style={styles.view5}>
            <Email />
            <TextInput style={styles.input}
              placeholder='Your email address'
              placeholderTextColor={COLOR.placeholdercolor}
              keyboardType={"email-address"}
              value={email}
              onChangeText={(text) => handleValidEmail(text)}
            />
          </View>
          {
            checkEmail ? <Text style={styles.text6}>Please enter valid email</Text> : null
          }

          <Text style={styles.text4}>Password</Text>

          <View style={styles.view5}>
            <Lock />
            <TextInput style={styles.input1}
              placeholder='8+ characters'
              placeholderTextColor={COLOR.placeholdercolor}
              secureTextEntry={visible}
              value={password}
              onChangeText={(text) => handelPassword(text)}
            />
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Eye />
            </TouchableOpacity>
          </View>

          {
            checkPassword ? <Text style={styles.text6}>Please enter valid email</Text> : null
          }

          <View style={styles.view2}>
            <TouchableOpacity>
              <Text style={styles.text2}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress={Logined}
            style={styles.button}>
            <Text style={styles.text5}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  imgback: {
    height: "100%",
    width: "100%"
  },
  view1: {
    flex: 2,
    marginHorizontal: 20, marginVertical: 20
  },
  text1: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLOR.yellow,
    marginTop: 100
  },
  text3: {
    fontFamily: FONTS.medium,
    color: COLOR.white,
    marginBottom: 30
  },
  text4: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLOR.white,
    marginVertical: 2,
    marginTop: 15
  },
  view5: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  input: {
    color: COLOR.black,
    marginHorizontal: 10
  },
  input1: {
    color: COLOR.black,
    marginHorizontal: 10,
    width: "82%"
  },
  view2: {
    alignItems: 'flex-end'
  },
  text2: {
    fontFamily: FONTS.medium,
    color: COLOR.yellow,
    fontSize: 12
  },
  button: {
    backgroundColor: COLOR.blue,
    height: 50,
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: COLOR.lightgrey,
    borderWidth: .5,
    marginTop: 220,
  },
  text5: {
    alignSelf: 'center',
    color: COLOR.white
  },
  view3: {
    flex: 1,
    justifyContent: 'center'
  },
  text6: {
    color: COLOR.red,
    fontFamily: FONTS.regular,
    fontSize: 12
  }

})
export default Login;