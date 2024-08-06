import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { BlackArrow, Dayin, Evening, Morning } from '../../Assets/svg';
import { IMAGES } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';
import { MMKV } from 'react-native-mmkv';

export const LastIntro = new MMKV();

const Meditate = () => {
    const navigation = useNavigation()
    const [day, setDay] = useState(false)
    const [morning, setMorning] = useState(false)
    const [evening, setEvening] = useState(false);


    const next = () => {
        if (day || morning || evening) {
            LastIntro.set("IntroVal", "true")
            navigation.navigate("Bottomtab")
        }
        else {
            Alert.alert("Oops", "something went wrong")
        }
    }

    const NoThanks = () => {
        LastIntro.set("IntroVal", "true")
        navigation.navigate("Bottomtab")
    }
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.button}>
                <BlackArrow />
            </TouchableOpacity>

            <View style={styles.view1}>
                <Text style={styles.text}>When do you want to</Text>
                <Text style={styles.text}>meditate?</Text>
                <Text style={styles.text1}>Setting a regular time for meditation can help</Text>
                <Text style={styles.text1}>build a habit. You can change this later.</Text>

                <View style={styles.view2}>
                    <TouchableOpacity onPress={() => setMorning(!morning)}>
                        <Morning />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDay(!day)}>
                        <ImageBackground style={styles.imgback} source={IMAGES.Day}>
                            <Dayin />
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setEvening(!evening)}>
                        <Evening />
                    </TouchableOpacity>
                </View>

                <View style={styles.view3}>
                    <Text style={styles.text2}>We’ll remind you at</Text>
                    <View style={styles.view4}>
                        <Text style={styles.text3}>7:00 pm</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={NoThanks}
                style={styles.button3}>
                <Text style={styles.text4}>No Thanks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={next}
                style={styles.button2}>
                <Text style={styles.text8}>Next</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    button: {
        marginBottom: 30
    },
    text: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLOR.black,

    },
    view1: {
        flex: 1
    },
    imgback: {
        height: 128,
        width: 89,
        alignItems: "center",
        paddingTop: 20
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    text2: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLOR.yellow
    },
    view3: {
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    view4: {
        height: 38,
        borderWidth: 1,
        borderColor: COLOR.yellow,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 6
    },
    text3: {
        fontFamily: FONTS.bold,
        color: COLOR.black,
        paddingLeft: 10,
        paddingRight: 10
    },
    button2: {
        backgroundColor: COLOR.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 6,
        marginBottom: 100,
    },
    text8: {
        color: COLOR.white,
        fontSize: 14,
        fontFamily: FONTS.medium
    },
    text4: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLOR.blue,
        paddingLeft: 10,
        paddingRight: 10
    },
    button3: {
        borderWidth: 1,
        borderColor: COLOR.yellow,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 6,
        marginBottom: 20
    }
})
export default Meditate;