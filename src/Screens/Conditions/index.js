import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import Checkbox from '../../UiComponents/Checkbox';
import { IMAGES } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';

const Conditions = () => {
    const navigation=useNavigation();
    const [check,setChecked]=useState(false)
    const [check1,setChecked1]=useState(false)

    const Next=()=>{
        if(check!=false && check1!=false)
        {
            navigation.navigate("Describe")
        }
        else
        {
            Alert.alert("Oops","Something is missing")
        }
    }
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <Text style={styles.text}>Thanks!</Text>
            <Text style={styles.text1}>Before we move on, just a couple of things</Text>

            <View style={styles.view1}>
                <Checkbox onPress={()=>setChecked(!check)}
                    check={check}/>
                <View>
                    <Text style={styles.text2}>Receive helpful tips and tools to keep</Text>
                    <Text style={styles.text2}>you going via email</Text>
                </View>
            </View>

            <View style={styles.view1}>
                <Checkbox onPress={()=>setChecked1(!check1)}
                    check1={check1}/>
                <View>
                    <Text style={styles.text2}>Confirm you’re okay with our App</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text3}>Usage Term</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.view2}>
                <Image style={styles.img} source={IMAGES.Frames} />
                <Text style={styles.text5}>All you need to get</Text>
                <Text style={styles.text4}>started is openness and</Text>
                <Text style={styles.text4}>curiosity</Text>
            </View>

            <TouchableOpacity onPress={()=>Next()}
            style={styles.button1}>
                <Text style={styles.text6}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: 20,
        paddingVertical: 60
    },
    text: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        color: COLOR.yellow
    },
    text1: {
        fontFamily: FONTS.semibold,
        fontSize: 12,
        color: COLOR.yellow,
    },
    view1: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    text2: {
        color: COLOR.textcolor,
        fontFamily: FONTS.regular,
        fontSize: 10,
        marginLeft: 10
    },
    text3: {
        color: COLOR.textcolor,
        fontFamily: FONTS.regular,
        fontSize: 10,
        marginLeft: 10,
        borderBottomWidth: .3,
        width: 60
    },
    img: {
        height: 170,
        width: 215
    },
    view2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text4: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20,
    },
    text5: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20,
        marginTop: 20
    },
    button1:{
        backgroundColor:COLOR.blue,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:6,
        marginBottom:50
    },
    text6:{
        color:COLOR.white,
        fontSize:14,
        fontFamily:FONTS.medium
    }
})
export default Conditions;