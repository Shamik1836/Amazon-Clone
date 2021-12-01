// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
