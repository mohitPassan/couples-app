import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ImageView from "react-native-image-viewing";
import { connect } from 'react-redux';
import { viewImage } from '../redux/actions';

const ImageViewer = ({ image, visible, setViewImage }) => {
  const images = [
    {
      uri: image,
    }
  ];

  return (
    <ImageView
      images={images}
      imageIndex={0}
      visible={visible}
      onRequestClose={() => {
        setViewImage(false);
      }}
      swipeToCloseEnabled={false}
    />
  );
};

const mapStateToProps = (state) => ({
  visible: state.viewImageStatus,
  image: state.image
});

const mapDispatchToProps = (dispatch) => ({
  setViewImage: (status) => dispatch(viewImage(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
