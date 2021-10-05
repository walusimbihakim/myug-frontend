import React from "react";
import PhoneNumberForm from "../components/PhoneNumberForm";

export default function PhoneNumberPage() {
  return (
    <>
      <h3>Connect Mobile Number</h3>
      <p className="mb-4">
        Provide your number to get access to affordable pre-paid wifi bundles.
      </p>
      <PhoneNumberForm />
      <button
        className="btn btn-block btn-outline-success"
        style={{ marginTop: "4px" }}
      >
        Connect for free (6pm-9pm)
      </button>
      <br />
    </>
  );
}
