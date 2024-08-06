import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SCREENS } from '../../enums/Appenum';
import * as ui from "../../Screens"
import { COLOR } from '../../enums/Stylefonts';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Bottontab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLOR.blue,
            tabBarInactiveTintColor: COLOR.lightgrey,
            
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" color={color} size={size} />
                ),
                tabBarLabel: "Home"
            }}
                name={SCREENS.HOME} component={ui.Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar-check-outline" color={color} size={size} />
                ),
                tabBarLabel: "My Plane"
            }}
                name={SCREENS.PLANE} component={ui.Plane} />
            <Tab.Screen options={{
                tabBarIcon:({color,size})=>(
                    <SimpleLineIcons name="emotsmile" color={color} size={size} />
                ),
                tabBarLabel:"Mood Journel"
            }}
            name={SCREENS.MOOD} component={ui.Mood} />
            <Tab.Screen options={{
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons name="sticker-text-outline" color={color} size={size} />
                ),
                tabBarLabel:"Activities"
            }}
            name={SCREENS.ACTIVITIES} component={ui.Activities} />
            <Tab.Screen options={{
                tabBarIcon:({color,size})=>(
                    <EvilIcons name="user" color={color} size={size} />
                ),
                tabBarLabel:"Profile"
            }}
            name={SCREENS.PROFILE} component={ui.Profile} />
        </Tab.Navigator>
    );
}
export default Bottontab;