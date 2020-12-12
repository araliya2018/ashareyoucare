import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDMTdmK6xB7_jx-imambyNLtutwYUpYTdE",
  authDomain: "shareyourcare-315a9.firebaseapp.com",
  projectId: "shareyourcare-315a9",
  storageBucket: "shareyourcare-315a9.appspot.com",
  messagingSenderId: "900186885572",
  appId: "1:900186885572:web:72bff402144fb60aeee891"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
