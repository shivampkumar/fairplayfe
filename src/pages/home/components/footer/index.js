import React from 'react';
import './index.scss';
import NavMenu from '../header/navMenu';

const Footer = (props) => {
  const withLink = props.withoutLink ? false : true;
  
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-header">Codr</div>
          <div className="footer-menu">
            {!withLink &&  <NavMenu name="About" reference="about" />}
            {!withLink &&  <NavMenu name="Features" reference="features" />}
            {!withLink &&  <NavMenu name="Contact" reference="contact" />}

            {withLink &&  <NavMenu name="About" linkTo="/" />}
            {withLink &&  <NavMenu name="Features" linkTo="/" />}
            {withLink &&  <NavMenu name="Contact" linkTo="/" />}
          </div>
        </div>
        {!withLink && <a href="https://www.freepik.com/vectors/people" className="freepik-footer">People vector created by stories - www.freepik.com</a>}
      </div>
    </div>
  );
};

export default Footer;
