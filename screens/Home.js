import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlanComponent from '../components/PlanComponent';

const Home = () => {
    const plans = [
        "Plan #1",
        "Plan #2",
        "Plan #3",
        "Plan #4",
        "Plan #5",
        "Plan #6",
        "Plan #7",
        "Plan #8",
        "Plan #9",
        "Plan #10",
        "Plan #11",
        "Plan #12",
        "Plan #13",
        "Plan #14",
        "Plan #15",
        "Plan #16",
        "Plan #17",
    ];

    return (
        <View style={styles.homeStyle}>
            <Text style={styles.textStyle}>Your plans</Text>

            <FlatList
                data={plans}
                renderItem={({ item }) => <PlanComponent plan={item} />}
                keyExtractor={item => item}
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
})

export default Home;