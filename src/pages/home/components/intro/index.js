import React, { useRef } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import frontPageVis from "./../../../../assets/front-page-vis.jpg";
import Typed from 'typed.js';

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
              Frontend Developer Hiring made
              <br />
              <Typed
                strings={[
                  'Some <i>strings</i> are slanted',
                  'Some <strong>strings</strong> are bold',
                  'HTML characters &times; &copy;'
                ]}
              />,
            </div>
            <div className="intro-text-description">
              Evaluate Frontend Developers with a 100% automated testing platform
              <br />
               Evaluate more candidates in less time
            </div>
            <div className="nav-item">
              <button
                className="intro-get-in-touch-btn"
                onClick={executeContactScroll}
              >
                Interested? Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container intro-second-part">
        <div className="intro-second-part-text">
          <div className="intro-second-line-first">
            Hiring Frontend Engineers is tricky. From take home projects to environment discrepancies to screenshots, the process needs a revamp
          </div>
          <div className="intro-second-line-second">
            Codr takes care of evaluation end to end, and makes the process easier.
          </div>
        </div>
        <img src={frontPageVis} className="intro-vis" alt="intro-vis" />
      </div>
    </div>
  );
}

export default Intro;
