import firebase from 'firebase/app';
import  "firebase/firestore";
import 'firebase/auth';
const provider = new firebase.auth.GoogleAuthProvider();

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC5z9izsqO_F3b5mU4hYhyoVBAlQgO8j5Q",
    authDomain: "major-project-36651.firebaseapp.com",
    databaseURL: "https://major-project-36651.firebaseio.com",
    projectId: "major-project-36651",
    storageBucket: "major-project-36651.appspot.com",
    messagingSenderId: "421914631993",
    appId: "1:421914631993:web:50139bd0a432f4842d92e8",
    measurementId: "G-8CX7427Y1G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();