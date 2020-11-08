import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlanComponent from '../components/PlanComponent';

import { connect } from 'react-redux';

const Home = ({ plans }) => {
    const allPlans = Object.entries(plans);

    return (
        <View style={styles.homeStyle}>
            <Text style={styles.textStyle}>Your plans</Text>
            <FlatList
                data={allPlans}
                renderItem={({ item }) => <PlanComponent planID={item[0]} planTitle={item[1].title} status={item[1].status} />}
                keyExtractor={item => item[0]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    homeStyle: {
        paddingTop: 22,
        paddingHorizontal: 22,
        display: "flex",
        height: "79%"
    },

    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    }
});

const mapStateToProps = (state) => ({
    plans: state.plans
});

export default connect(mapStateToProps)(Home);