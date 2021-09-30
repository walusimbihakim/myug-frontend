
import React from 'react'
import PhoneNumberForm from '../components/PhoneNumberForm'

export default function LoginPage() {
    return (
        <>
        <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{backgroundImage: "url('images/bg_1.jpg')" }}></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <img src="images/1.png" height="200" alt="logo"/>
                <h3>Connect Mobile Number</h3>
                <p className="mb-4">Provide your number to get access to affordable pre-paid wifi bundles.</p>
                <PhoneNumberForm/>
                <button className="btn btn-block btn-outline-success" style={{marginTop: "4px"}}>Connect for free (6pm-9pm)</button>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

