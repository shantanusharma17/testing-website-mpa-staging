import React from 'react';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/testing-website-mpa-staging#/" className="logo">
          Home
        </a>
        <div className="nav-links">
          <a href="/testing-website-mpa-staging#/contact" className="nav-link">
            Contact
          </a>
          <a href="/testing-website-mpa-staging#/properties" className="nav-link">
            Properties
          </a>
          <a href="/testing-website-mpa-staging#/listings" className="nav-link">
            Listings
          </a>
          {/*<a href="/testing-website-mpa-staging#/properties-address-mls" className="nav-link">*/}
          {/*  Properties By Address + MLS*/}
          {/*</a>*/}
        </div>
        <a href="/testing-website-mpa-staging#/login" className="nav-link">
          Login
        </a>
      </nav>
    </header>
  );
};

export default NavigationHeader;
