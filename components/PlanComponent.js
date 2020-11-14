import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import { changePlanStatus } from '../redux/actions';
import { setUploadModalOpen } from '../redux/actions';
import { setPlanToUploadImagesTo } from '../redux/actions';
import { changeScreen } from '../redux/actions';

const PlanComponent = ({ planID, planTitle, status, setPlanStatus, setUploadModalOpen, setPlanToUploadImagesTo, setScreen }) => {
    const checked = status !== 'not-done';

    return (
        <>
            {
                status === 'done-with-photos' && (
                    <View style={styles.checkBoxContainer}>
                        <View style={styles.checkBoxStyle}>
                            <Text style={styles.textStyle}>{planTitle}</Text>
                            <TouchableOpacity 
                            style={styles.uploadButtonStyles}
                            onPress={() => setScreen('photos')}
                            >
                                <View style={{
                                    alignItems: 'center'
                                }}>
                                    <Icon name="grid" color="#FFF" size={25} />
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 9,
                                        marginTop: 6
                                    }}>View Images</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            {
                (status === 'done' || status === 'not-done') && (
                    <View style={styles.checkBoxContainer}>
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
                                    {
                                        status === 'done' && <Icon name="check" color="#DA0B0B" size={35} style={styles.tickComponent} />
                                    }
                                </View>
                            }
                            onPress={() => {
                                let newStatus;
                                if (status === 'not-done') {
                                    newStatus = 'done';
                                }
                                else {
                                    newStatus = 'not-done'
                                }
                                // console.log(state);
                                setPlanStatus(planID, newStatus);
                            }}
                        />
                        {
                            checked && (
                                <TouchableOpacity style={styles.uploadButtonStyles} onPress={() => {
                                    setUploadModalOpen(true);
                                    setPlanToUploadImagesTo(planID, planTitle);
                                }}>
                                    <View style={{
                                        alignItems: 'center'
                                    }}>
                                        <Icon name="upload" color="#FFF" size={25} />
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 9,
                                            marginTop: 6
                                        }}>Upload Images</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                )
            }
        </>
    )
};

const styles = StyleSheet.create({
    checkBoxStyle: {
        height: 80,
        backgroundColor: 'white',
        borderRadius: 6,
        width: "100%",
        marginLeft: 1,
        elevation: 2,
        marginVertical: 10,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 15,
        position: "relative",
        marginTop: 1,
    },

    textStyle: {
        fontSize: 16,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: '#595959'
    },

    iconStyle: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        borderRadius: 4
    },

    tickComponent: {
        width: 50,
        height: 50,
        position: "relative",
        bottom: 8,
        left: -1,
    },

    uploadButtonStyles: {
        backgroundColor: '#DA0B0B',
        position: "absolute",
        height: 81,
        right: 0,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        width: 85,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },

    checkBoxContainer: {
        height: 85,
        marginTop: 25,
        width: '90%',
    }
});

const mapDispatchToProps = (dispatch) => ({
    setPlanStatus: (plan, status) => dispatch(changePlanStatus(plan, status)),
    setUploadModalOpen: (status) => dispatch(setUploadModalOpen(status)),
    setPlanToUploadImagesTo: (planId, planTitle) => dispatch(setPlanToUploadImagesTo(planId, planTitle)),
    setScreen: (screen) => dispatch(changeScreen(screen))
})

export default connect(null, mapDispatchToProps)(PlanComponent);