import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PlanComponent = ({ plan }) => {
    const [checked, setChecked] = useState(false);

    return (
        <CheckBox
            title={plan}
            checked={checked}
            containerStyle={styles.checkBoxStyle}
            textStyle={styles.textStyle}
            uncheckedIcon={
                <View style={styles.iconStyle} />
            }
            checkedIcon={
                <View style={styles.iconStyle}>
                    <Image style={styles.tickComponent} source={require('../assets/tick.png')} />
                </View>
            }
            onPress={() => {
                setChecked(!checked)
            }}
        />
    )
};

const styles = StyleSheet.create({
    checkBoxStyle: {
        height: 80,
        backgroundColor: 'white',
        borderRadius: 6,
        width: "90%",
        marginLeft: 1,
        elevation: 2,
        marginVertical: 10,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 15
    },

    textStyle: {
        fontSize: 16,
        paddingLeft: 5
    },

    iconStyle: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        borderRadius: 4
    },

    tickComponent: {
        width: 26,
        height: 27,
        position: "relative",
        bottom: 3,
        left: 1
    }
})

export default PlanComponent;