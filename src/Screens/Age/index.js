import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { BlackArrow } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';

const Age = () => {
    const navigation=useNavigation();
    const [ages, setAge] = useState(false)
    const [Gender, setGender] = useState(false)
    const [Gender1, setGender1] = useState(false)
    const [Gender2, setGender2] = useState(false)

    const next=()=>{
        if(Gender || Gender1 || Gender2)
        {
            if(ages)
            {
                navigation.navigate("Intrested")
            }
        }
        else
        {
            Alert.alert("Oops","Something is missing")
        }
    }

    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <View style={styles.view1}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <BlackArrow />
                </TouchableOpacity>
                <Text style={styles.text}>How old are you?</Text>
                <Text style={styles.text1}>This help us personalise the app for you.</Text>

                <View style={styles.view2}>
                    <TouchableOpacity onPress={() => setAge(!ages)}
                        style={styles.view3}>
                        <Text style={ages === true ? styles.text4 : styles.text3}>18</Text>
                    </TouchableOpacity>
                    <Text style={styles.text2}>Years old</Text>
                </View>

                <Text style={styles.text5}>Gender</Text>

                <View>
                    <TouchableOpacity onPress={() => setGender(!Gender)}
                        style={Gender ? styles.button1 : styles.button}>
                        <Text style={Gender ? styles.text7 : styles.text6}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender1(!Gender1)}
                        style={Gender1 ? styles.button1 : styles.button}>
                        <Text style={Gender1 ? styles.text7 : styles.text6}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender2(!Gender2)}
                        style={Gender2 ? styles.button1 : styles.button}>
                        <Text style={Gender2 ? styles.text7 : styles.text6}>Non-Binary</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => next()}
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
    },
    view1: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    text: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20,
        marginTop: 50
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLOR.black
    },
    text2: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        color: COLOR.black,
        marginLeft: 20
    },
    view3: {
        height: 83,
        width: 83,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: COLOR.yellow,
        backgroundColor: COLOR.AgeBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text3: {
        fontFamily: FONTS.bold,
        fontSize: 38,
        color: COLOR.Agecolor
    },
    text4: {
        fontFamily: FONTS.bold,
        fontSize: 38,
        color: COLOR.yellow
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    text5: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 18,
        marginTop: 40,
        marginBottom: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: COLOR.lightgrey,
        backgroundColor: COLOR.white,
        height: 50,
        justifyContent: 'center',
        marginBottom: 12
    },
    text6: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLOR.blue,
        marginLeft: 20
    },
    button1: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: COLOR.yellow,
        backgroundColor: COLOR.yellow,
        height: 50,
        justifyContent: 'center',
        marginBottom: 12,
    },
    text7: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLOR.white,
        marginLeft: 20
    },
    button2: {
        backgroundColor: COLOR.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 6,
        marginBottom: 100,
        marginHorizontal:20
    },
    text8: {
        color: COLOR.white,
        fontSize: 14,
        fontFamily: FONTS.medium
    }

})
export default Age;