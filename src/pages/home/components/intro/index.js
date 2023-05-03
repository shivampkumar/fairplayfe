import React, { useRef } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import frontPageVis from "./../../../../assets/front-page-vis.jpg";
import Typical from "react-typical";
import { Typography, Box} from '@material-ui/core';

const Intro = () => {
  const executeContactScroll = () => {
    document.getElementById("contact").scrollIntoView();
  };

  return (
    <div>
      <div className="intro-area">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              Health Diagnosis made
              <br />
              <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'Fairer',
                    3000,
                    'Equitable',
                    3000,
                    'Better',
                    3000
                  ]}
                />
            </div>
            <div className="intro-text-description">
              Make the right predictions for your patients, regardless of their ethnicity. 
              <br />
            </div>
            <div className="bold-text"> Cloud-based . API-enabled . FHIR-native </div>
            <div className="nav-item">
              {/* <button
                className="intro-get-in-touch-btn"
                onClick={executeContactScroll}
              >
                Interested? Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container intro-second-part">
        <div className="intro-second-part-text">
          <div className="intro-second-line-first">
            While the healthcare industry is moving towards AI, it is important to make sure that the AI is fair to all. Insert stats here.
          </div>
          <div className="intro-second-line-second">
            FairPlay rebalances the data to make sure that when we predict readmission, we do it correctly for everyone.
          </div>
        </div>
        <img src={frontPageVis} className="intro-vis" alt="intro-vis" />
      </div>
    </div>
  );
}

export default Intro;
