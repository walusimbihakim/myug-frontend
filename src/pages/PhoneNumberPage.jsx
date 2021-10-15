import React from "react";
import { Link } from "react-router-dom";
import PhoneNumberForm from "../components/PhoneNumberForm";

export default function PhoneNumberPage() {
  return (
    <>
      <h3>Connect Mobile Number</h3>
      <p className="mb-4">
        Provide your number to get access to affordable pre-paid wifi bundles.
      </p>
      <PhoneNumberForm />
      <Link to="/social">
      <button
        className="btn btn-block btn-outline-success connect-btn"
      >
        Connect for free (6pm-9pm)
      </button>
      </Link>
      <br />
    </>
  );
}
