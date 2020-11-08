import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';

const Header = ({ screen }) => {
    return (
        <View style={styles.headerStyles}>
            {
                screen === 'home' && <Text style={styles.textStyles}>Home</Text>
            }
            {
                screen === 'photos' && <Text style={styles.textStyles}>Photos</Text>
            }
            <Icon name="filter"  size={20}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyles: {
        height: 80,
        backgroundColor: 'white',
        elevation: 5,

        paddingHorizontal: 22,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    textStyles: {
        fontSize: 22,
        fontWeight: "bold"
    }
});

const mapStateToProps = (state) => ({
    screen: state.screen
})

export default connect(mapStateToProps)(Header);