import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Footer = () => {
    return (
        <View style={styles.footerStyles}>
            <View style={styles.buttonStyle}><Icon name="home" size={30} /></View>
            <View style={styles.buttonStyle}><Icon name="image" size={30} /></View>
            <View style={styles.buttonStyle}><Icon name="plus" size={30} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerStyles: {
        height: 80,
        width: "100%",
        backgroundColor: 'white',
        elevation: 18,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },

    textStyles: {
        fontSize: 22,
        fontWeight: "bold"
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