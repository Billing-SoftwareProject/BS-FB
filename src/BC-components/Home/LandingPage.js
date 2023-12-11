import React from 'react';
import '../Home/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-right">
        <button className="login-signup-button">Login / Sign Up</button>
      </div>
      <div className="center">
        <button className="view-page-button">View Main Page</button>
      </div>
    </div>
  );
};

export default LandingPage;
