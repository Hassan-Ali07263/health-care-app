import React from 'react';
import { View, Text ,StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { BlackArrow } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';

const Notifications=()=> {
    const navigation=useNavigation();
  return (
    <View style={styles.view}>
        <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"}/>
        <View style={styles.view1}>
            <TouchableOpacity onPress={()=>navigation.goBack()}
                style={styles.button}>
                <BlackArrow/>
            </TouchableOpacity>
            <Text style={styles.text}>Notification</Text>
        </View>

        <View style={styles.view2}>
            <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur. Eu non tellus habitant et vitae. Suscipit fermentum orci aliquam lectus nec. Eget sed diam ultrices non consectetur augue feugiat. Neque lobortis ornare vitae nec rutrum vel viverra morbi.</Text>
            <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur. Eu non tellus habitant et vitae. Suscipit fermentum orci aliquam lectus nec.</Text>
        </View>
     </View>
  );
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:COLOR.white,
        paddingHorizontal:10,
        paddingVertical:20
    },
    text:{
        fontFamily:FONTS.bold,
        fontSize:18,
        color:COLOR.black,
        marginLeft:15
    },
    view1:{
        flexDirection:"row",
        alignItems:"center"
    },
    text1:{
        fontFamily:FONTS.medium,
        fontSize:15,
        color:COLOR.black,
        marginBottom:20
    },
    view2:{
        marginVertical:40,
        paddingHorizontal:10,

    },
    button:{
        padding:10
    }
})
export default Notifications;