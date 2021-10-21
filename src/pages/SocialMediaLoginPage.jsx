import React from "react";
import {useHistory} from "react-router";
import "../assets/css/SocialMediaLogin.css";
import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../firebase";


export default function SocialMediaLoginPage() {
  firebase.initializeApp(firebaseConfig)
  const history = useHistory();
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  return (
    <>
      <h3>Social Media Login</h3>
      <p className="mb-4">
        Kindly login with social media to access free wifi.
      </p>
      <div className="socialButtons">
        <button className="socialbtn google-btn" onClick={signInWithGoogle}>
          <i className="fa fa-google"></i>
        </button>
        <button className="socialbtn fb-btn">
          <i className="fa fa-facebook"></i>
        </button>
        <button className="socialbtn twitter-btn">
          <i className="fa fa-twitter"></i>
        </button>
      </div>

      <button
        className="btn btn-block btn-outline-success"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
    </>
  );
}
