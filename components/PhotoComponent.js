import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { viewImage, setImage } from "../redux/actions";

const Photos = ({ url, setViewImage, setImage }) => {
  return (
    <View style={styles.photoStyle}>
      {/* <Text>{url}</Text> */}
      <TouchableHighlight
        onPress={() => {
          setViewImage(true);
          setImage(url);
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{
            uri: url,
          }}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  photoStyle: {
    width: 165,
    height: 200,
    marginRight: 10,
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: "transparent",
    elevation: 4,
    // marginLeft: 1
  },

  imageStyle: {
    width: 165,
    height: 200,
    borderRadius: 6,
  },
});

const mapDispatchToProps = (dispatch) => ({
  setViewImage: (status) => dispatch(viewImage(status)),
  setImage: (image) => dispatch(setImage(image))
});

export default connect(null, mapDispatchToProps)(Photos);
