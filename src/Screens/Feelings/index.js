import React from 'react';
import { View, Text, StatusBar,StyleSheet } from 'react-native';
import { COLOR } from '../../enums/Stylefonts';

const Feelings=()=> {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={COLOR.moodPink} barStyle={"dark-content"}/>
      <Text></Text>
     </View>
  );
}

const styles=StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:COLOR.moodPink
  }
})
export default Feelings;