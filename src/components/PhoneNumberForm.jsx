import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberForm = () => {
  const [phone, setPhone] = useState();
  console.log(phone)
  return (
    <form>
      <div className="form-group first">
        <label>Enter Mobile No.</label>
        <PhoneInput
          country="ug"
          onlyCountries={["ug"]}
          value={phone}
          countryCodeEditable={false}
          onChange={(phone) => setPhone(phone)}
          className="form-control"
        />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" required />
        <label className="form-check-label" for="flexCheckIndeterminate">
          I agree to the Terms and Conditions
        </label>
      </div>
      <a href="paid_access.html">
        <input
          type="submit"
          value="Continue"
          className="btn btn-block btn-primary"
          style={{ backgroundColor: "#e75480", marginTop: "4px" }}
        />
      </a>
    </form>
  );
};

export default PhoneNumberForm;
