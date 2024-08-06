import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { COLOR } from '../../enums/Stylefonts';

const Radio=()=> {
  return (
    <TouchableOpacity style={styles.button}>
        <View style={styles.view}></View>
    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    button:{
        height:16,
        width:16,
        borderRadius:16,
        backgroundColor:COLOR.lightgrey,
        justifyContent:"center",
        alignItems:"center"
    },
    view:{
        height:10,
        width:10,
        borderRadius:12,
        backgroundColor:COLOR.grey
    }
})
export default Radio