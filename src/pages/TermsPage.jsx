import React from "react";
import { useHistory } from "react-router-dom";

export default function TermsPage() {
  const history = useHistory();
  return (
    <>
      <h2>Terms Of Use</h2>
      <div className="termsBox">
        <p>By accessing the wireless network, you acknowledge that
        you're of legal age, you have read and understood and agree to be bound
        this agreement.</p>
        <p>You agree not to use the wireless network for any
        purpose that is unlawful and take full responsibility of your acts. The
        wireless network is provided "as is" without warranties of any kind,
        either expressed or implied.</p>
      </div>
      <button
        className="primaryButton btn btn-block"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
    </>
  );
}
