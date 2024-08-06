import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { IMAGES } from '../../Assets/Images';
import { Camera } from '../../Assets/svg';
import PhoneInput from 'react-native-phone-number-input';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Profileupdation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('');
  const [DOB, setDOB] = useState('');
  const [galleryImg, setGalleryImg] = useState();

  const item = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Non-Binary", value: "Non-Binary" },
  ]

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setGalleryImg(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setGalleryImg(imageUri);
        console.log(imageUri);
      }
    });
  }
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
      <TouchableOpacity onPress={openImagePicker}>
        {
          galleryImg ? <Image style={styles.img} source={{ uri: galleryImg }} />
            : <Image style={styles.img} source={IMAGES.Profile} />
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCameraLaunch}
      style={styles.button}>
        <Camera />
      </TouchableOpacity>
      <Text style={styles.text}>Itunuoluwa Abidoye</Text>
      <Text style={styles.text1}>Itunuoluwa@petra.africa</Text>

      <TextInput style={styles.textinput}
        placeholder='What’s your first name?'
        placeholderTextColor={COLOR.placeholdercolor}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput style={styles.textinput}
        placeholder='And your last name?'
        placeholderTextColor={COLOR.placeholdercolor}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode='PK'
        containerStyle={{ width: "100%", borderRadius: 10, marginVertical: 15 }}
        textContainerStyle={{ borderRadius: 15 }}
        onChangeFormattedText={(text) => setPhoneNumber(text)}
        withShadow
      />

      <DropDownPicker style={styles.droper}
        open={open}
        setOpen={() => setOpen(!open)}
        items={item}
        value={gender}
        setValue={(text) => setGender(text)}
        placeholder={'Select your gender'}
        placeholderStyle={{ color: COLOR.placeholdercolor }}
      />

      <TextInput style={styles.textinput}
        placeholder='What is your date of birth?'
        placeholderTextColor={COLOR.placeholdercolor}
        value={DOB}
        onChangeText={(text) => setDOB(text)}
      />

      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text2}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20
  },
  img: {
    height: 72,
    width: 72,
    alignSelf: "center",
    marginTop: 80,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: COLOR.skyblue
  },
  button: {
    backgroundColor: COLOR.skyblue,
    height: 22,
    width: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    position: "absolute",
    alignSelf: "center",
    top: 120,
    left: "55%"
  },
  text: {
    alignSelf: "center",
    color: COLOR.grey,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginTop: 20
  },
  text1: {
    alignSelf: "center",
    fontFamily: FONTS.medium,
    color: COLOR.lightgrey,
    fontSize: 13,
    marginBottom: 30
  },
  textinput: {
    backgroundColor: COLOR.white,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 54,
    marginVertical: 15,
    shadowColor: COLOR.black,
    shadowOffset: 10,
    elevation: 1,
    color: COLOR.black
  },
  droper: {
    marginVertical: 15,
    shadowColor: COLOR.black,
    shadowOffset: 10,
    elevation: 1,
    borderWidth: 0,
    height: 54,
    paddingLeft: 20
  },
  button1: {
    backgroundColor: COLOR.blue,
    height: 54,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: COLOR.blue,
    shadowOffset: 10,
    elevation: 1,
  },
  text2: {
    color: COLOR.white
  }
})
export default Profileupdation;