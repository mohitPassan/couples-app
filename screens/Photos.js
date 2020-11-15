import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageViewer from "../components/ImageViewer";
import PlanWithPhotos from "../components/PlanWithPhotos";
import ImagesContainer from "../components/ImagesContainer";

const Photos = () => {
  return (
    <View style={styles.photosStyle}>
      <PlanWithPhotos />
      <ImageViewer />
    </View>
  );
};

const styles = StyleSheet.create({
  photosStyle: {
    paddingTop: 22,
    paddingHorizontal: 13,
    display: "flex",
    height: "79%",
  },
});

export default Photos;
