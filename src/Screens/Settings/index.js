import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <View style={styles.view1}>
                <View style={styles.view3}>
                <Text style={styles.text}>Deep Breathing</Text>
                </View>
                <View style={styles.view2}>
                <TouchableOpacity onPress={()=>navigation.goBack()}
                style={styles.button}>
                    <Text style={styles.text1}>Done</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    text:{
        fontFamily:FONTS.bold,
        fontSize:14,
        color:COLOR.grey,
        alignSelf:"flex-end"
    },
    text1:{
        fontFamily:FONTS.semibold,
        fontSize:12,
        color:COLOR.grey,
        alignSelf:"flex-end"
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:10,
        justifyContent:"center",
        paddingVertical:10
    },
    view2:{
        width:"40%",
    },
    view3:{
        width:"60%",
    },
    button:{
        padding:10
    }
})
export default Settings;