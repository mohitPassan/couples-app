import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AddPlan from './AddPlan';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <View style={[styles.footerStyles, isOpen ? { bottom: 250, elevation: 0 } : { bottom: 0, elevation: 18 }]}>
                <View style={styles.buttonStyle}><Icon name="home" size={30} /></View>
                <View style={styles.buttonStyle}><Icon name="image" size={30} /></View>

                <TouchableOpacity style={
                    [styles.buttonStyle, isOpen ? {
                        backgroundColor: '#FA3838',
                        color: 'white',
                    } : {}]
                }
                onPress={() => setIsOpen(!isOpen)}
                >
                    <View><Icon name="plus" size={30} color={isOpen ? "white" : "black"} /></View>
                </TouchableOpacity>

            </View>
            {
                isOpen && <AddPlan close={() => setIsOpen(false)} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    footerStyles: {
        height: 80,
        width: "100%",
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
    },

    addEventsOpen: {
        backgroundColor: '#FA3838',
        color: 'white'
    },

    textStyles: {
        fontSize: 22,
        fontWeight: "bold",
    },

    buttonStyle: {
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Footer;