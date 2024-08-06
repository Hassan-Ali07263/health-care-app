import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { COLOR, FONTS } from '../../enums/Stylefonts';
import { BlackArrow } from '../../Assets/svg';
import { useNavigation } from '@react-navigation/native';

const Intrested = () => {

    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            content: "Managing Stress"
        },
        {
            id: 2,
            content: "Mindfulness At Work"
        },
        {
            id: 3,
            content: "Mindfulness In Sport"
        },
        {
            id: 4,
            content: "Mindfulness Eating"
        },
        {
            id: 5,
            content: "Improving Performance"
        },
        {
            id: 6,
            content: "Attention And Concentration"
        },
        {
            id: 7,
            content: "Improving Relationships"
        },
        {
            id: 8,
            content: "Mindfulness In Education"
        }
    ]
    return (
        <View style={styles.view}>
            <StatusBar backgroundColor={COLOR.white} barStyle={"dark-content"} />
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={styles.button}>
                <BlackArrow />
            </TouchableOpacity>
            <View style={styles.view1}>
                <Text style={styles.text}>What are you most</Text>
                <Text style={styles.text}>interested in?</Text>
                <Text style={styles.text1}>Select as many as you’d like.</Text>

                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.view2}>
                                    <TouchableOpacity style={styles.button1}>
                                        <Text style={styles.text2}>{item.content}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Meditate")}
                style={styles.button3}>
                <Text style={styles.text3}>I'd rather not say</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Meditate")}
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
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    view1: {
        flex: 1
    },
    view2: {
        flexDirection: 'row'
    },
    button: {
        marginBottom: 30
    },
    text: {
        fontFamily: FONTS.bold,
        color: COLOR.yellow,
        fontSize: 20
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLOR.black,
        marginBottom: 20
    },
    text2: {
        fontFamily: FONTS.bold,
        fontSize: 10,
        color: COLOR.blue
    },
    button1: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: COLOR.black,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15
    },
    button2: {
        backgroundColor: COLOR.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 6,
        marginBottom: 100,
    },
    text8: {
        color: COLOR.white,
        fontSize: 14,
        fontFamily: FONTS.medium
    },
    text3: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLOR.blue
    },
    button3: {
        borderWidth: 1,
        borderColor: COLOR.yellow,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 6,
        marginBottom: 20
    }
})
export default Intrested;