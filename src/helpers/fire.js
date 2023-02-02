import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {

  apiKey: "AIzaSyC3wGne71VHvXPHDjwwA4R06cbI8ys1rmI",
  authDomain: "BMW-ESTOCADA.firebaseapp.com",
  projectId: "BMW-ESTOCADA",
  storageBucket: "BMW-ESTOCADA.appspot.com",
  messagingSenderId: "150776353519",
  appId: "1:150776353519:web:749b5860e0f3257c18c11a",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
