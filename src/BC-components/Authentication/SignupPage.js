import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Authentication/loginPage.css"; // Import the CSS file for your signup page

const SignupPage = () => {
  const [Name, setName] = useState("");
  const [ShopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(true); // State variable to control signup form visibility
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Signup logic...
    console.log("Signed up successfully!");
    navigate('/'); // Redirect to the login page after signup
  };

  return (
    <section className={`container forms ${showSignup ? 'show-signup' : ''}`}>
      <div className="form signup">
        <div className="form-content">
          <header>Sign Up</header>
          <form onSubmit={handleSignup}>
            <div className="field input-field">
            <input
                type="Name"
                placeholder="Name"
                className="input"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field input-field">
            <input
                type="Name"
                placeholder="ShopName"
                className="input"
                value={ShopName}
                onChange={(e) => setShopName(e.target.value)}
                required
              />
            </div>
            <div className="field input-field">
            <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field input-field">
            <input
                type="phone"
                placeholder="Phone"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field input-field">
              <input
                type="Cpassword"
                placeholder="Conform Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field button-field">
              <button onClick={handleSignup}>Sign Up</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <a href="/" className="link login-link">
                Login
              </a>
            </span>
          </div>
        </div>
        {/* <div className="line"></div> */}
        {/* <div className="media-options">
          <a href="/phone" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Sign Up with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="/email" className="field google">
            <img src="" alt="" className="google-img" />
            <span>Sign Up with Email</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SignupPage;
