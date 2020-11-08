import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBHoDZh5olYKyyJbCQEyZRuXO5MXVDLArE",
    authDomain: "couplesapp-12d86.firebaseapp.com",
    databaseURL: "https://couplesapp-12d86.firebaseio.com",
    projectId: "couplesapp-12d86",
    storageBucket: "couplesapp-12d86.appspot.com",
    messagingSenderId: "225861108625",
    appId: "1:225861108625:web:eb72a160443d0837185030"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;