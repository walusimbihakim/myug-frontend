import React from 'react'
import LogoImage from "../../assets/images/1.png"
import BackgroundImage from "../../assets/images/bg_1.jpg"
import "../../assets/css/CaptiveLayout.css"
import "../../assets/css/bootstrap.min.css"

const CaptiveLayout=({ children, ...restProps })=> {
    return (
        <>
        <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{backgroundImage: `url(${BackgroundImage})` }}></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <img src={LogoImage} height="200" alt="logo"/>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}


export default CaptiveLayout;
