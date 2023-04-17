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
            heading="Automated Testing"
            content="100% automated functional test cases to verify correctness"
            image={automateTestingFeatureImage}
          />
          <Feature
            icon_name="code"
            heading="Cloud IDE"
            content="A uniform environment to solve questions"
            darkReverse={true}
            image={cloudIdeFeatureImage}
          />
          <Feature
            icon_name="add_task"
            heading="Ease"
            content="Easy sharing of solution code and reporting"
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
