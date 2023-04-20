import React, { useRef, useEffect } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Feature from './components/feature';
import About from './components/product';
import Footer from './components/footer';
import automateTestingFeatureImage from "./../../assets/automate-testing.jpg";
import cloudIdeFeatureImage from "./../../assets/cloud-ide-vis.jpg";
import hiringEaseFeatureImage from "./../../assets/hiring-ease.jpg";
import './index.scss';

const Home = () => {
  const aboutRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header withoutLink={true} />
      <Intro />
      <About />
      <div className="feature-container" id="features">
        <h2 className="features-heading">Features</h2>
        <div className="features-block">
          <Feature
            icon_name="build"
            heading="Re-Engineered Data"
            content=""
            image={automateTestingFeatureImage}
          />
          <Feature
            icon_name="code"
            heading="Better Insights"
            content=""
            darkReverse={true}
            image={cloudIdeFeatureImage}
          />
          <Feature
            icon_name="add_task"
            heading="Ease of Use"
            content="FHIR compliant, easy to integrate with existing systems."
            image={hiringEaseFeatureImage}
          />
        </div>
      </div>
      {/* <Contact className="contact-container" /> */}
      <Footer withoutLink={true} />
    </div>
  );
}

export default Home;
