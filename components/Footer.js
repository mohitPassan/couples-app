import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AddPlan from './AddPlan';

import { connect } from 'react-redux';
import { changeScreen } from '../redux/actions';

const Footer = ({ screen, setScreen }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <View style={[styles.footerStyles, isOpen ? { bottom: 250, elevation: 0 } : { bottom: 0, elevation: 18 }]}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => setScreen('home')}
                >
                    <View><Icon name="home" size={30} /></View>
                    {
                        screen === 'home' && <View style={styles.activeTabBarStyle}></View>
                    }
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => setScreen('photos')}
                >
                    <View><Icon name="image" size={30} /></View>
                    {
                        screen === 'photos' && <View style={styles.activeTabBarStyle}></View>
                    }
                </TouchableOpacity>

                <TouchableOpacity style={
                    [styles.buttonStyle, isOpen ? {
                        backgroundColor: '#DA0B0B',
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
    },
    
    activeTabBarStyle: {
        backgroundColor: '#DA0B0B',
        height: 2,
        width: 15,
        top: 5
    }
});

const mapStateToProps = (state) => ({
    screen: state.screen
})

const mapDispatchToProps = (dispatch) => ({
    setScreen: (screen) => dispatch(changeScreen(screen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);