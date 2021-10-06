import React from "react";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const PhoneNumberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group first">
        <label>Enter Mobile No.</label>
        <input className="form-control" {...register("phoneNumber", { required: true })}/>
        <small className="warning">{errors.phoneNumber && <span>This field is required</span>}</small>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" required />
        <label className="form-check-label" for="flexCheckIndeterminate">
          I agree to the <Link to="/terms">Terms and Conditions</Link>
        </label>
      </div>
      <input
        type="submit"
        value="Continue"
        className="btn btn-block primaryButton"
      />
    </form>
  );
};

export default PhoneNumberForm;
