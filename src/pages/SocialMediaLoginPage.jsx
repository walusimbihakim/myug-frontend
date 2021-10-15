import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../assets/css/SocialMediaLogin.css";

export default function SocialMediaLoginPage() {
  const history = useHistory();
  return (
    <>
      <h3>Social Media Login</h3>
      <p className="mb-4">
        Kindly login with social media to access free wifi.
      </p>
      {/* <!-- Add font awesome icons --> */}
      <div className="socialButtons">
      <button className="socialbtn google-btn"><Link class="fa fa-google"></Link></button>
      <button className="socialbtn fb-btn"><Link class="fa fa-facebook"></Link></button>
      <button className="socialbtn twitter-btn"><Link class="fa fa-twitter"></Link></button>
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
