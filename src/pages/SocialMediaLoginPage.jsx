import React from "react";
import {useHistory} from "react-router";
import "../assets/css/SocialMediaLogin.css";
import { firebaseApp } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function SocialMediaLoginPage() {
  const history = useHistory();
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
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
