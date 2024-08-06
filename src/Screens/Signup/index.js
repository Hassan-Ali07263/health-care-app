import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar, TextInput, Pressable, Alert } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { Email, Eye, Lock, User, WhiteArrow } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONTS } from '../../enums/Stylefonts';

import { MMKV } from 'react-native-mmkv';
export const SigningUp = new MMKV();

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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

    const AccountCreated = () => {
        if (name != "" && email != "" && password != "") {
            if (checkEmail === false && checkPassword === false) {
                SigningUp.set("name", name)
                SigningUp.set("email", email)
                SigningUp.set("password", password)
                console.log("done--------")
                navigation.navigate("Signlog")
            }
        }
        else {
            Alert.alert("Oops", "Looks like something went wrong")
        }
    }
    
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={"#58595B"} barStyle={"light-content"} />
            <ImageBackground style={styles.imgback} source={IMAGES.signupimg}>
                <View style={styles.view1}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <WhiteArrow />
                        </TouchableOpacity>

                        <View style={styles.view4}>
                            <Text style={styles.text1}>Hey There</Text>
                            <Text style={styles.text2}>Let's create a smiling Mind account</Text>
                            <Text style={styles.text3}>We won’t share your information with anyone</Text>
                        </View>
                        <Text style={styles.text4}>First name</Text>
                        <View style={styles.view5}>
                            <User />
                            <TextInput style={styles.input}
                                placeholder='Your first name'
                                placeholderTextColor={COLOR.placeholdercolor}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
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
                        <TouchableOpacity onPress={AccountCreated}
                            style={styles.button}>
                            <Text style={styles.text5}>Create Account</Text>
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
    imgback: {
        height: "100%",
        width: "100%"
    },
    view1: {
        flex: 2,
        marginHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'space-between'

    },
    view2: {

    },
    text1: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLOR.yellow,
        marginTop: 70
    },
    text2: {
        fontFamily: FONTS.bold,
        fontSize: 11,
        color: COLOR.yellow
    },
    text3: {
        fontFamily: FONTS.medium,
        color: COLOR.white,
        marginTop: 10,
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
    button: {
        backgroundColor: COLOR.blue,
        width: 312,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderColor: COLOR.lightgrey,
        borderWidth: .4,
        marginTop: 150,
        alignSelf: 'center'
    },
    text5: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLOR.white
    },
    text6: {
        color: COLOR.red,
        fontFamily: FONTS.regular,
        fontSize: 12
    }
})
export default Signup;