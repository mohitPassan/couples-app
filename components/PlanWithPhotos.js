import React from 'react';
import { View, Text, SectionList, StyleSheet, FlatList } from 'react-native';
import PhotoComponent from './PhotoComponent';
import { Divider } from 'react-native-elements';
import { SectionGrid } from 'react-native-super-grid';

import { connect } from 'react-redux';

const PlanWithPhotos = ({ plans, photos }) => {
    const plansWithPhotos = Object.entries(photos).map(plan => ({
        title: plans[plan[0]],
        data: plan[1]
    }))

    /*
    [
        [
            0: Plan #3,
            1: [ photos array ]
        ]
    ]

    [
        {
            data: [ photos array]
            section: 'Plan 3 name
        }
    ]
    */

    return (
        <View>
            <SectionGrid
                itemDimension={120}
                sections={plansWithPhotos}
                renderItem={({ item }) => <PhotoComponent url={item} />} 
                renderSectionHeader={({section}) => <Text style={styles.textStyle}>{section.title}</Text>}
                renderSectionFooter={() => <Divider style={styles.dividerStyle} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        paddingLeft: 9
    },

    dividerStyle: {
        backgroundColor: '#D1D1D1',
        marginVertical: 25
    },
});

const mapStateToProps = (state) => ({
    plans: state.plans,
    photos: state.photos
});

export default connect(mapStateToProps)(PlanWithPhotos);