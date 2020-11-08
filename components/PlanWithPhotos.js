import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhotoComponent from './PhotoComponent';
import { Divider } from 'react-native-elements';
import { SectionGrid } from 'react-native-super-grid';

import { connect } from 'react-redux';

const PlanWithPhotos = ({ plans, photos }) => {
    const [plansWithPhotos, setPhotos] = useState([]);
    
    useEffect(() => {
        if(plans && photos) {
            const arr = Object.entries(photos).map(plan => ({
                title: plans[plan[0]],
                data: plan[1]
            }));
            setPhotos(arr);
        }
    }, [photos, plans]);

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
            {
                plansWithPhotos ? (
                    <SectionGrid
                        itemDimension={120}
                        sections={plansWithPhotos}
                        renderItem={({ item }) => <PhotoComponent url={item} />} 
                        renderSectionHeader={({section}) => <Text style={styles.textStyle}>{section.title}</Text>}
                        renderSectionFooter={() => <Divider style={styles.dividerStyle} />}
                    />
                ) : <Text>Wait</Text>
            }
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