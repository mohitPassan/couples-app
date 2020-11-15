import firebase from "../firebase.config";
import { nanoid } from "nanoid/async/index.native";

export const changeScreen = (screen) => ({
  type: "CHANGE_SCREEN",
  payload: screen,
});

export const changePlanStatus = (plan, status) => {
  return () => {
    const planRef = firebase.database().ref(`/statuses/${plan}`);
    planRef.set(status);
  };
};

export const addPlan = (title) => {
  return async () => {
    const planRef = await firebase.database().ref("/plans").push(title);
    const key = planRef.key;

    const statusesRef = firebase.database().ref(`/statuses/${key}`);
    await statusesRef.set("not-done");
  };
};

export const getData = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        dispatch({
          type: "GET_DATA",
          payload: snapshot.val(),
        });
      });
  };
};

export const setUploadModalOpen = (status) => {
  return {
    type: "SET_UPLOAD_MODAL_OPEN",
    payload: status,
  };
};

async function createUser() {
  const id = await nanoid();
  return id;
}

const uploadToStore = async (plan, image, callback) => {
  // Create the file metadata
  var metadata = {
    contentType: "image/jpeg",
  };

  const response = await fetch(image);
  const blob = await response.blob();
  const name = await createUser();

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = firebase
    .storage()
    .ref("/" + plan + "/" + name)
    .put(blob, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log("unauthorized");
          break;

        case "storage/canceled":
          // User canceled the upload
          console.log("canceled");
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log("unknown");
          break;
      }
    },
    function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        // console.log("File available at", downloadURL);
        callback(downloadURL);
      });
    }
  );
};

export const uploadImages = (plan, images, callback) => {
  return () => {
    console.log(plan, images);
    let urlsArray = [];
    let imagesUploaded = 0;
    images.forEach((image, index, array) => {
      uploadToStore(plan.title, image, async (url) => {
        imagesUploaded++;
        urlsArray.push(url);

        // console.log(imagesUploaded);

        if (imagesUploaded === array.length) {
          console.log("done");
          callback();
          const photosRef = firebase.database().ref("/photos/" + plan.id);
          let photos = [];
          await photosRef.once('value').then((snapshot) => {
            photos = snapshot.val();
          });

          let finalArray = [];
          if(photos) {
            finalArray = [...urlsArray, ...photos];
          }
          else {
            finalArray = [...urlsArray];
          }
          photosRef.set(finalArray);
          firebase.database().ref("/statuses/" + plan.id).set("done-with-photos");
        }
      });
    });
  };
};

export const setPlanToUploadImagesTo = (planId, planTitle) => {
  return {
    type: "SET_PLAN_TO_UPLOAD_IMAGES_TO",
    payload: {
      id: planId,
      title: planTitle,
    },
  };
};

export const viewImage = (status) => {
  return {
    type: "VIEW_IMAGE",
    payload: status,
  };
};

export const setImage = (image) => ({
  type: "SET_IMAGE",
  payload: image,
});
