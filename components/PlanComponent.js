import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';
import { changePlanStatus } from '../redux/actions';

const PlanComponent = ({ planID, planTitle, status, setPlanStatus, state }) => {
    // console.log(state);
    const checked = status !== 'not-done';

    return (
        <CheckBox
            title={planTitle}
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
                let newStatus;
                if(status === 'not-done') {
                    newStatus = 'done';
                }
                else {
                    newStatus = 'not-done'
                }
                console.log(state);
                setPlanStatus(planID, newStatus);
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
});

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    setPlanStatus: (plan, status) => dispatch(changePlanStatus(plan, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanComponent);