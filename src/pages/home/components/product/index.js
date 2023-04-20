import React from 'react';
import './index.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="container">
        <h2 className="about-heading">About</h2>
        <div className="about-content">
          <p>
          FairPlay is an innovative app that is designed to ensure that hospital readmission risk prediction models are accurate for patients from all ethnic backgrounds. The app does this by rebalancing the training data used to create the predictive model, ensuring that the data accurately reflects the diversity of the patient population.
          The issue of bias in healthcare is a significant one, with studies showing that certain ethnic groups are more likely to experience adverse outcomes than others. One of the reasons for this is that predictive models used in healthcare are often trained on data that does not represent the full diversity of the patient population, leading to inaccurate predictions for certain groups.
          </p>
          <p>
          FairPlay addresses this issue by using advanced algorithms to identify areas where the training data may be biased and adjusting it accordingly. This ensures that the predictive model is accurate for everyone, regardless of their ethnicity.
          With FairPlay, hospitals and healthcare providers can have confidence that their predictive models are providing accurate results for all patients. By eliminating bias in the training data, the app helps to ensure that all patients receive the best possible care, regardless of their background.
          Overall, FairPlay is a powerful tool that is helping to address the issue of bias in healthcare and ensuring that hospital readmission risk prediction models are accurate for everyone. Whether you're a healthcare provider or a patient, FairPlay is an app that is making a real difference in the world of healthcare.
          </p>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
}

export default About;
