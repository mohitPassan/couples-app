import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import PhotoComponent from "./PhotoComponent";
import { Divider } from "react-native-elements";
import { SectionGrid } from "react-native-super-grid";

import { connect } from "react-redux";

const PlanWithPhotos = ({ plans, photos }) => {
  const [plansWithPhotos, setPhotos] = useState([]);

  useEffect(() => {
    if (plans && photos) {
      const arr = Object.entries(photos).map((plan) => ({
        title: plans[plan[0]],
        data: plan[1],
      }));
      setPhotos(arr);
    }
  }, [photos, plans]);

  return (
    <View>
      {/* {plansWithPhotos === null && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#DA0B0B" />
        </View>
      )} */}
      {plansWithPhotos && plansWithPhotos.length !== 0 ? (
        <SectionGrid
          itemDimension={120}
          sections={plansWithPhotos}
          renderItem={({ item }) => <PhotoComponent url={item} />}
          renderSectionHeader={({ section }) => (
            <Text style={styles.textStyle}>{section.title}</Text>
          )}
          renderSectionFooter={() => <Divider style={styles.dividerStyle} />}
        />
      ) : (
        <View style={styles.uploadImageContainer}>
          <Image
            style={styles.uploadImage}
            source={require("../assets/2955200_1-01.jpg")}
          />
          <Text style={styles.uploadTextStyle}>Let's store some memories</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 9,
  },

  dividerStyle: {
    backgroundColor: "#D1D1D1",
    marginVertical: 25,
  },

  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  uploadImageContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  uploadImage: {
    marginTop: 80,
    height: 300,
    width: "100%",
    marginBottom: 50,
  },

  uploadTextStyle: {
    fontSize: 23,
    textAlign: "center",
    color: "#DA0B0B",
    fontWeight: "bold"
  },
});

const mapStateToProps = (state) => ({
  plans: state.plans,
  photos: state.photos,
});

export default connect(mapStateToProps)(PlanWithPhotos);
