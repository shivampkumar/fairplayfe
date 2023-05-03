import React from 'react';
import './index.scss';
import logo from './../../../../assets/logo.png'
import NavMenu from './navMenu'
import { Link } from 'react-router-dom';

function Header(props) {
  const withLink = props.withoutLink ? false : true;

  return (
    <div className="header-properties">
      <div className="container">
        <div className="brand-name">
          <img src={logo} className="nav-logo" alt="logo" />
            FairPlay- EHR Demo
        </div>
        <div className="nav-menu">
           <NavMenu name="Home" linkTo="/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
