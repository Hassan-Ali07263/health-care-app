import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../Assets/Images';
import { COLOR } from '../../enums/Stylefonts';
import { LastIntro } from '../Meditate';
import { CheckLogin } from '../Login';
import * as Animatable from 'react-native-animatable';


const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            const LoginValue=CheckLogin.getString("LoginVal")
            const LastIntroValue=LastIntro.getString("IntroVal")
            console.log(LoginValue,LastIntroValue)
            if(LoginValue === "true")
            {
                console.log("Login is already done-----")
                if(LastIntroValue === "true")
                {
                    navigation.navigate("Bottomtab")
                }                
            }
            else
            {
                navigation.navigate("Onboarding")
            }
        },3000)
    })
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor="white" barStyle="light-content"/>
            <Animatable.Image style={styles.image} duration={3000} animation="fadeInDown" source={IMAGES.SPLASH}/>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height:259,
        width:259
    }
})
export default Splash;