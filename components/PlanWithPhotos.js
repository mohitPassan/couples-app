import React from 'react';
import { View, Text, SectionList, StyleSheet, FlatList } from 'react-native';
import PhotoComponent from './PhotoComponent';
import { Divider } from 'react-native-elements';
import { SectionGrid } from 'react-native-super-grid';

import { connect } from 'react-redux';

const PlanWithPhotos = ({ plans }) => {
    const plansWithPhotos = Object.values(plans).filter(i => i.status === 'done-with-photos');

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
    plans: state.plans
});

export default connect(mapStateToProps)(PlanWithPhotos);