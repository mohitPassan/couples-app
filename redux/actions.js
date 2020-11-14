import firebase from "../firebase.config";

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

const uploadToStore = async (plan, index, image, callback) => {
  // Create the file metadata
  var metadata = {
    contentType: "image/jpeg",
  };

  const response = await fetch(image);
  const blob = await response.blob();

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = firebase.storage().ref("/" + plan + '/' + index).put(blob, metadata);

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
          console.log('unauthorized');
          break;

        case "storage/canceled":
          // User canceled the upload
          console.log('canceled');
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log('unknown');
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

export const uploadImages = (plan, images) => {
  return () => {
    console.log(plan, images);
    let urlsArray = [];
    let imagesUploaded = 0;
    images.forEach((image, index, array) => {
        uploadToStore(plan.title, index, image, (url) => {
            imagesUploaded++;
            urlsArray.push(url);
            
            // console.log(imagesUploaded);
            
            if(imagesUploaded === array.length) {
                console.log('done');
                firebase.database().ref('/photos/' + plan.id).set(urlsArray);
                firebase.database().ref('/statuses/' + plan.id).set('done-with-photos');
            }
        })
    })
  };
};

export const setPlanToUploadImagesTo = (planId, planTitle) => {
  return {
    type: "SET_PLAN_TO_UPLOAD_IMAGES_TO",
    payload: {
        id: planId,
        title: planTitle
    }
  };
};
