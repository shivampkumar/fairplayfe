import React from 'react';
import Header from '../home/components/header'
import Footer from '../home/components/footer'
import './index.scss'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="not-found-content">
          <div class="not-found-404">404</div>
          <div class="not-found-text">Not found</div>
        </div>
        <div className="sticky-footer-404"><Footer  /></div>
      </div>
    );
  }
}

export default NotFound;
