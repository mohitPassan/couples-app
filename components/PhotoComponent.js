import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Photos = ({url}) => {
    return (
        <View style={styles.photoStyle}>
            {/* <Text>{url}</Text> */}
            <Image style={styles.imageStyle} source={{
                uri: url,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    photoStyle: {
        width: 165,
        height: 200,
        marginRight: 10,
        marginBottom: 15,
        borderRadius: 6,
        backgroundColor: 'transparent',
        elevation: 4,
        // marginLeft: 1
    },

    imageStyle: {
        width: 165,
        height: 200,
        borderRadius: 6,
    }
})

export default Photos;