import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAgORj3L8sM-mckbsqWUf6zz7A1sloodWE",
    authDomain: "storyhub-3d410.firebaseapp.com",
    projectId: "storyhub-3d410",
    storageBucket: "storyhub-3d410.appspot.com",
    messagingSenderId: "830808529197",
    appId: "1:830808529197:web:9e08d4f49ee394bd825ba4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();