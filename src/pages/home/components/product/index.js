import React from 'react';
import './index.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="container">
        <h2 className="about-heading">About</h2>
        <div className="about-content">
          <p>
            There are a large number of platforms which help you evaluate candidates based on Data Structures and Algorithms.
            But correctly hiring a Frontend Developer requires Manual evaluation, which becomes a bottleneck.
            Hence, companies are able to evaluate a lesser number of candidates. Further, candidates may use different environments,
            and getting their code to run in other places may not be pragmatic. Hence, recruiters are stuck with screensharing,
            screenshots which furthur deepen the bottleneck.
          </p>

          <p>
            Codr is built on a solid understanding of these challenges. 
            Codr is designed to automate the complete process. From the initial problem statement, complete with recommended
            design, and API stubs, to a uniform cloud IDE environment, we give the candidate everything they need to prove themselves. 
            The solution is evaluated and the Recruiter is given a complete report!
          </p>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
}

export default About;
