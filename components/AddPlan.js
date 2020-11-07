import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const AddPlan = ({ close }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>What do you wanna do?</Text>
            <TextInput style={styles.inputStyle} />
            <View style={styles.buttonContainer}>
                <Button titleStyle={styles.cancelButtonStyles} buttonStyle={{marginRight: 15}} title="Cancel" type="clear" onPress={close} />
                <Button titleStyle={styles.addButtonTitleStyle} buttonStyle={styles.addButtonContainerStyle} title="Add" onPress={close} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 250,
        backgroundColor: '#FA3838',
        position: "absolute",
        bottom: 0,
        width: '100%',
        paddingVertical: 35,
        paddingHorizontal: 25,
    },

    textStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },

    inputStyle: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        maxWidth: '70%',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 15,
        color: 'white'
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        right: 25
    },

    cancelButtonStyles: {
        color: 'white',
        fontWeight: 'bold',
    },

    addButtonContainerStyle: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 25
    },

    addButtonTitleStyle: {
        color: '#FA3838',
        fontWeight: 'bold',
    }
});

export default AddPlan