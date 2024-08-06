import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../Assets/Images';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { useNavigation } from '@react-navigation/native';

const Signlog = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={"#58595B"} barStyle={"light-content"} />
            <ImageBackground style={styles.imgback} source={IMAGES.signupbackground}>
                <View style={styles.view}></View>
                <View style={styles.view1}>
                    <Text style={styles.text}>Meditation</Text>
                    <View style={styles.view3}>
                        <Text style={styles.text}>made</Text>
                        <Text style={styles.text1}> easy.</Text>
                    </View>
                    <Text style={styles.text2}>Check in with yorself, with hundreds</Text>
                    <Text style={styles.text2}>of free tailored programs for age 3+</Text>
                </View>

                <View style={styles.view2}>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}
                        style={styles.button}>
                        <Text style={styles.text3}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Login")}
                        style={styles.button1}>
                        <Text style={styles.text4}>Sign in</Text>
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
        flex: 1,
        marginHorizontal: 20
    },
    view2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: FONTS.bold,
        color: COLOR.white,
        fontSize: 32
    },
    text1: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 32
    },
    view3: {
        flexDirection: 'row'
    },
    text2: {
        fontFamily: FONTS.regular,
        color: COLOR.signlogtext,
        fontSize: 16
    },
    text3: {
        fontFamily: FONTS.semibold,
        fontSize: 12,
        color: COLOR.white
    },
    text4: {
        fontFamily: FONTS.semibold,
        fontSize: 10,
        color: COLOR.blue
    },
    button: {
        backgroundColor: COLOR.blue,
        padding: 12,
        borderRadius: 6,
        width: 145,
        alignItems: 'center',
        marginBottom: 18,
        borderWidth:.5,
        borderColor:COLOR.lightgrey,
        elevation:5,
        shadowOpacity:1,
    },
    button1: {
        backgroundColor: COLOR.white,
        padding: 8,
        width: 65,
        borderRadius: 6,
        alignItems: 'center',
        elevation:10,
        shadowOpacity:1,

    }
})
export default Signlog;