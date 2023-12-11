import React, { useState } from "react";
import "../Authentication/loginPage.css"; // Import the CSS file
// import ".index.js";

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic...
    console.log("Logged in successfully!");
    navigate('/Additems');
  };

  const handleAdmin = () => {
    navigate("/LandingPage");
  };

  return (
    <>
      <section class="container forms">
        <div class="form login">
          <div class="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div class="field input-field">
                <input
                  type="email"
                  placeholder="email"
                  class="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  class="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i class="bx bx-hide eye-icon"></i>
              </div>
              <div class="form-link">
                <a href="/c" class="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div class="field button-field">
                <button onClick={handleLogin} >Login</button>
              </div>
            </form>
            <div class="form-link">
              <span>
                Don't have an account?{" "}
                <a href="/signup" class="link signup-link">
                  Signup
                </a>
              </span>
            </div>
          </div>
          <div class="line"></div>
          <div class="media-options">
            <a href="/phone" class="field facebook">
              <i class="bx bxl-facebook facebook-icon"></i>
              <span>Login with Phone No</span>
            </a>
          </div>
          {/* <div class="media-options">
            <a href="/email" class="field google">
              <img src="" alt="" class="google-img" />
              <span>Login with Email</span>
            </a>
          </div> */}
        </div>
      </section>
      <button class="field button-field" className="cart" onClick={handleAdmin}>
        Admin-Login 
      </button>
    </>
  );
};

export default LoginPage;
