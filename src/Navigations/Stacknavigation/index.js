import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SCREENS } from '../../enums/Appenum';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ui from '../../Screens';
import Bottontab from '../Bottontab';

const Stacknavigation=()=>{
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen name={SCREENS.SPLASH} component={ui.Splash}/>
        <Stack.Screen name={SCREENS.ONBOARDING} component={ui.Onboarding}/>
        <Stack.Screen name={SCREENS.SIGNLOG} component={ui.Signlog}/>
        <Stack.Screen name={SCREENS.SIGNUP} component={ui.Signup}/>
        <Stack.Screen name={SCREENS.LOGIN} component={ui.Login}/>
        <Stack.Screen name={SCREENS.CONDITIONS} component={ui.Conditions}/>
        <Stack.Screen name={SCREENS.DESCRIBE} component={ui.Describe}/>
        <Stack.Screen name={SCREENS.AGE} component={ui.Age}/>
        <Stack.Screen name={SCREENS.INTRESTED} component={ui.Intrested}/>
        <Stack.Screen name={SCREENS.MEDITATE} component={ui.Meditate}/>
        <Stack.Screen name={SCREENS.SuUPPORT} component={ui.Support}/>
        <Stack.Screen name={SCREENS.NOTIFICATIONS} component={ui.Notifications}/>
        <Stack.Screen name={SCREENS.PROFILEUPDATION} component={ui.Profileupdation}/>
        <Stack.Screen name={SCREENS.SETTINGS} component={ui.Settings}/>
        <Stack.Screen name={SCREENS.MOODSTATISTICS} component={ui.MoodStatistics}/>
        <Stack.Screen name={SCREENS.FEELINGS} component={ui.Feelings}/>
        <Stack.Screen name='Bottomtab' component={Bottontab}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Stacknavigation;