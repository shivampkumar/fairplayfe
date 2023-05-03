import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NavMenu = (props) => {
  const executeScroll = () => {
    document.getElementById(props.reference).scrollIntoView();
  }

  const withLink = props.linkTo ? true : false;

  let return_element = <div className="nav-item" onClick={executeScroll}>{props.name}</div>;
  if(withLink) {
    return_element = <Link className="nav-item" to={props.linkTo}>{props.name}</Link>
  }
  return (
    return_element
  );
}

export default NavMenu;
