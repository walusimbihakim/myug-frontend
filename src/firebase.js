// Import the functions you need from the SDKs you need
<<<<<<< HEAD



export const firebaseConfig = {
=======
import * as firebase from "firebase/app";


const firebaseConfig = {
>>>>>>> 741a0f8487de7100e67525b285fdcc70953a5417
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


<<<<<<< HEAD

=======
export const firebaseApp = firebase.initializeApp(firebaseConfig)
>>>>>>> 741a0f8487de7100e67525b285fdcc70953a5417

