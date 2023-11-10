import React from "react";
import "../BB-css/Subscription.css";

const Subscription = () => {
  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h1>Premium Subscription Plans</h1>
      </div>
      <div className="subscription-plans">
        <div className="subscription-plan">
          <h2>Basic Plan</h2>
          <div className="price">9,999 Rs/year</div>
          <ul className="features">
            <li>Unlimited Access & Invoice</li>
            <li>Regular Updates</li>
            <li>Email Support</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="subscription-plan">
          <h2>Pro Plan</h2>
          <div className="price">14,999 Rs/year</div>
          <ul className="features">
            <li>Everything in Basic Plan</li>
            <li>Priority Support</li>
            <li>Exclusive Features</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="subscription-plan">
          <h2>Premium Plan</h2>
          <div className="price">16,999 Rs/year</div>
          <ul className="features">
            <li>Everything in Pro Plan</li>
            <li>Customizable Templates</li>
            <li>24/7 Live Support</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div className="why-premium">
        <h2>Why Go Premium?</h2>
        <p>
          Our premium subscription offers you exclusive features, priority
          support, and customization options to enhance your boiling experience.
          Get the most out of our software and enjoy boiling like never before!
        </p>
      </div>
    </div>
  );
};

export default Subscription;
