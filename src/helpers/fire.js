import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7MJQ2i0ozwxW2lVvVu_b0Y37FoNw4rpo",
  authDomain: "bmw-estocada.firebaseapp.com",
  projectId: "bmw-estocada",
  storageBucket: "bmw-estocada.appspot.com",
  messagingSenderId: "1038991942217",
  appId: "1:1038991942217:web:f74c9ac3e74181001ed598"
};


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fire = firebase.initializeApp(firebaseConfig);

export default fire;