import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Button } from "react-native-elements";
import Constants from "expo-constants";
import { ImageBrowser } from "expo-image-picker-multiple";
import { connect } from "react-redux";
import { setUploadModalOpen } from "../redux/actions";
import { uploadImages } from "../redux/actions";
import firebase from '../firebase.config';

const ImagesContainer = ({ modalVisible, setUploadModalOpen, planToUploadImagesTo, uploadImages }) => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  const imagesCallback = (callback) => {
    callback
      .then((photos) => {
        //Assigning all photos selected to an array
        setImages(photos);
      })
      .catch((e) => console.log(e));
  };

  const updateHandler = (count, onSubmit) => {
    // console.log("List Of Images" + Images);
    setCount(count);
  };

  const renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  const handleUpload = () => {
    // console.log(images);
    const imageFiles = images.map(image => image.uri);
    uploadImages(planToUploadImagesTo, imageFiles);
  }

  const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
  const noCameraPermissionComponent = (
    <Text style={styles.emptyStay}>No access to camera</Text>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={[styles.textStyle, { fontSize: 18 }]}>
                Add photos to {planToUploadImagesTo ? planToUploadImagesTo.title : ''}
              </Text>
            </View>
            <View style={styles.imagesContainer}>
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: 'left' }}>
                  {count} image{count !== 1 ? 's' : null} selected
                </Text>
              </View>
              <ImageBrowser
                max={15}
                onChange={updateHandler}
                callback={imagesCallback}
                renderSelectedComponent={renderSelectedComponent}
                emptyStayComponent={emptyStayComponent}
                noCameraPermissionComponent={noCameraPermissionComponent}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                titleStyle={styles.cancelButtonStyles}
                buttonStyle={{ marginRight: 15 }}
                title="Cancel"
                type="clear"
                onPress={() => {
                  setUploadModalOpen(false);
                }}
              />
              <Button
                titleStyle={styles.textStyle}
                buttonStyle={styles.addButtonContainerStyle}
                title="Upload"
                onPress={() => {
                  handleUpload()
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    padding: 12,
    height: "80%",
  },

  emptyStay: {
    textAlign: "center",
  },

  countBadge: {
    height: 50,
    width: 50,
    // borderRadius: 25,
    position: "absolute",
    left: '50%',
    top: '50%',
    justifyContent: "center",
    backgroundColor: "#DA0B0B",
    transform: [
      { translateX: -25 },
      { translateY: -25 }
    ]
  },

  countBadgeText: {
    fontWeight: "bold",
    alignSelf: "center",
    padding: "auto",
    color: "white",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "white",
    width: "100%",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "95%",
    height: "98%",
  },

  modalHeader: {
    backgroundColor: "#DA0B0B",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "100%",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 25,
    height: "10%",
  },

  cancelButtonStyles: {
    color: "black",
    fontWeight: "bold",
  },

  addButtonContainerStyle: {
    backgroundColor: "#DA0B0B",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    // textAlign: "center",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  modalVisible: state.uploadModalOpen,
  planToUploadImagesTo: state.planToUploadImagesTo
});

const mapDispatchToProps = (dispatch) => ({
  setUploadModalOpen: (status) => dispatch(setUploadModalOpen(status)),
  uploadImages: (planId, images) => dispatch(uploadImages(planId, images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
