// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAp43jx165Mo4A_wkDD9xdZgOGe8EO7gfM",
  authDomain: "clone-2-aa867.firebaseapp.com",
  projectId: "clone-2-aa867",
  storageBucket: "clone-2-aa867.appspot.com",
  messagingSenderId: "598326717374",
  appId: "1:598326717374:web:5ebfc460297111d7d7e7ef",
  measurementId: "G-HYHGKNLYGS",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export default db;
