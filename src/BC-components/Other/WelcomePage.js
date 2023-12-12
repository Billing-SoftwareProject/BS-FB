// WelcomePage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Other/WelcomePage.css";

const WelcomePage = () => {
  //   const history = useHistory();
  const navigate = useNavigate();

  // Redirect to home page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Additems");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup to avoid memory leaks
  }, [navigate]);

  return (
    <section id="welcome-section">
      <div>
        <h1>Welcome Name</h1>
        <p>...have a look around</p>
      </div>
    </section>
  );
};

export default WelcomePage;
