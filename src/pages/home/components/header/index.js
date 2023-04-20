import React from 'react';
import './index.scss';
import logo from './../../../../assets/logo.png'
import NavMenu from './navMenu'

function Header(props) {
  const withLink = props.withoutLink ? false : true;

  return (
    <div className="header-properties">
      <div className="container">
        <div className="brand-name">
          <img src={logo} className="nav-logo" alt="logo" />
            FairPlay
        </div>
        <div className="nav-menu">
          {!withLink && <NavMenu name="About" reference="about" />}
          {!withLink && <NavMenu name="Features" reference="features" />}
          {!withLink && <NavMenu name="Contact" reference="contact" />}

          {withLink && <NavMenu name="About" linkTo="/" />}
          {withLink && <NavMenu name="Features" linkTo="/" />}
          {withLink && <NavMenu name="Contact" linkTo="/" />}
        </div>
      </div>
    </div>
  );
}

export default Header;
