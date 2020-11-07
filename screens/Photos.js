import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlanWithPhotos from '../components/PlanWithPhotos';

const Photos = () => {
    return (
        <View style={styles.photosStyle}>
            <PlanWithPhotos />
        </View>
    )
}

const styles = StyleSheet.create({
    photosStyle: {
        paddingTop: 22,
        paddingHorizontal: 13,
        display: "flex",
        height: "79%"
    }
})

export default Photos;