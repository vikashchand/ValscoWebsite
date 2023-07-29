import "./LandingPage.css"
import React from "react"
import imgvalsco from '../images/img2.png'
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <>

      <div className="wrapper">
        <div className="main">
          <div className="front">
            <div className="img1">
              <img src={require("../../components/images/newlogo.png")} id="lgo" alt="gb" />
            </div>
          </div>
          <div className="para">
              <div><h1>VALSCO</h1></div>
              <div><p className="para1">
                Our company provides software products and services to businesses
                individuals to help them meet their software needs. We strive to
                specialize in developing software solutions tailored to the unique
                needs of our clients.
              </p>
              </div>
            </div>
        </div>
      </div>

      {/* <div className='imghovercontainer'>
      <img className="imghover" src={imgvalsco} alt="" />
    </div> */}

    </>
  )
}

export default LandingPage
