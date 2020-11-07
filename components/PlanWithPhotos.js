import React from 'react';
import { View, Text, SectionList, StyleSheet, FlatList } from 'react-native';
import PhotoComponent from './PhotoComponent';
import { Divider } from 'react-native-elements';
import { SectionGrid } from 'react-native-super-grid';

const PlanWithPhotos = () => {
    const DATA = [
        {
            title: "Plan #1",
            data: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
                "https://cdn.downtoearth.org.in/library/large/2019-09-25/0.55489800_1569394261_annapurna-mts-getty.jpg",
                "https://s3.amazonaws.com/bucketeer-4de657b8-6d51-4a8d-9fee-1b876d2bfe98/magazine/wp-content/uploads/2019/06/13120354/iStock-5431830181.jpg"
            ]
        },
        {
            title: "Plan #2",
            data: [
                "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.710.1.jpg",
                "https://img.jakpost.net/c/2019/01/11/2019_01_11_62796_1547182337._large.jpg",
                "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/08-06-2020_Coral-Reef-Image_Solomon-Islands.jpg/image1170x530cropped.jpg"
            ]
        },
        {
            title: "Plan #3",
            data: [
                "https://www.socialinnovationacademy.eu/wp-content/uploads/2018/06/cities.png",
                "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
                "https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=600&format=jpeg&auto=webp"
            ]
        }
    ];

    return (
        <View>
            <SectionGrid
                itemDimension={120}
                sections={DATA}
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
})

export default PlanWithPhotos;