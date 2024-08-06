import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { IMAGES } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';

const Describe = () => {
    const navigation = useNavigation();
    const [select, setSelected] = useState(false)
    const [select1, setSelected1] = useState(false)
    const [select2, setSelected2] = useState(false)
    const [select3, setSelected3] = useState(false)

    const next = () => {
        if (select || select1 || select2 || select3) {
            navigation.navigate("Age")
        }
        else {
            Alert.alert("Oops", "Looks like you are not selected anything")
        }
    }
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <View style={styles.view1}>
                <Text style={styles.text}>Which of the describe</Text>
                <Text style={styles.text}>You?</Text>
                <Text style={styles.text1}>Select as many as you’d like</Text>

                <View style={styles.view2}>
                    <TouchableOpacity onPress={() => setSelected(!select)}
                        style={select ? styles.button3 : styles.button}>
                        <Image style={styles.img} source={IMAGES.Individual} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected1(!select1)}
                        style={select1 ? styles.button4 : styles.button2}>
                        <Image style={styles.img} source={IMAGES.educator} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected2(!select2)}
                        style={select2 ? styles.button3 : styles.button}>
                        <Image style={styles.img} source={IMAGES.parent} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected3(!select3)}
                        style={select3 ? styles.button4 : styles.button2}>
                        <Image style={styles.img} source={IMAGES.professional} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={() => next()}
                    style={styles.button1}>
                    <Text style={styles.text6}>Next</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    view1: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 50
    },
    text: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20
    },
    text1: {
        fontFamily: FONTS.regular,
        color: COLOR.black,
        fontSize: 12
    },
    view2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 30
    },
    img: {
        width: "100%",
        height: 134,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,


    },

    button: {
        width: "45%",
        marginTop: 30,
        marginRight: 30,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    button3: {
        width: "45%",
        marginTop: 30,
        marginRight: 30,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderWidth: 2,
        borderColor: COLOR.blue
    },
    button2: {
        width: "45%",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        marginTop: 30,
    },
    button4: {
        width: "45%",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderWidth: 2,
        borderColor: COLOR.blue,
        marginTop: 30,
    },
    button1: {
        backgroundColor: COLOR.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 6,
        marginBottom: 50
    },
    text6: {
        color: COLOR.white,
        fontSize: 14,
        fontFamily: FONTS.medium
    }
})
export default Describe;