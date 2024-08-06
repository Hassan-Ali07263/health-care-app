import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { IMAGES } from '../../Assets/Images';
import { Alert, Go, Help, Locks, Logout, Notification, Pencil, Profiles, Shield } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';
import { CheckLogin } from '../Login';

const Profile = () => {
  const navigation = useNavigation();

  const Logouted=()=>{
    CheckLogin.set("LoginVal","false")
    navigation.navigate("Signlog")
  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Image style={styles.img} source={IMAGES.Profile} />
          <View>
            <Text style={styles.text}>sanya kaur chadha</Text>
            <Text style={styles.text1}>@senltd</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profileupdation")}
          style={styles.button}>
          <Pencil />
        </TouchableOpacity>
      </View>

      <View style={styles.view4}>
        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Profiles />
            </View>
            <View>
              <Text style={styles.text2}>My Account </Text>
              <Text style={styles.text3}>Make changes to your account</Text>
            </View>
          </View>
          <Alert />
          <TouchableOpacity onPress={() => navigation.navigate("Profileupdation")}
            style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Profiles />
            </View>
            <View>
              <Text style={styles.text2}>Saved Beneficiary</Text>
              <Text style={styles.text3}>Connect emergency contacts</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Locks />
            </View>
            <View>
              <Text style={styles.text2}>Face ID / Touch ID</Text>
              <Text style={styles.text3}>Manage your device security</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Shield />
            </View>
            <View>
              <Text style={styles.text2}>Two-Factor Authentication</Text>
              <Text style={styles.text3}>Further secure your account for safety</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Logout />
            </View>
            <View>
              <Text style={styles.text2}>Log out</Text>
              <Text style={styles.text3}>Further secure your account for safety</Text>
            </View>
          </View>
          <TouchableOpacity onPress={Logouted}
          style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.view6}>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Help />
            </View>
            <View>
              <Text style={styles.text2}>Help & Support</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Support")}
            style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <View style={styles.view2}>
            <View style={styles.view5}>
              <Notification />
            </View>
            <View>
              <Text style={styles.text2}>Notification</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")}
            style={styles.button}>
            <Go />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  view1: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: COLOR.profileblue,
    borderRadius: 5,
    shadowOpacity: 10,
    elevation: 10,
    shadowColor: COLOR.black,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    height: 45,
    width: 45,
    borderWidth: 4,
    borderColor: COLOR.skyblue,
    borderRadius: 50,
    marginRight: 15
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLOR.white
  },
  text1: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLOR.lightgrey
  },
  view2: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    padding: 10
  },
  view3: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  view4: {
    marginVertical: 15,
    backgroundColor: COLOR.white,
    shadowOpacity: 10,
    shadowColor: COLOR.black,
    elevation: 10

  },
  text2: {
    fontFamily: FONTS.semibold,
    fontSize: 13,
    color: COLOR.grey
  },
  text3: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLOR.ashwhite
  },
  view5: {
    height: 40,
    width: 40,
    backgroundColor: COLOR.blue,
    borderRadius: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  view6: {
    marginTop: 40,
    backgroundColor: COLOR.white,
    shadowOpacity: 10,
    shadowColor: COLOR.black,
    elevation: 10
  },
})
export default Profile;