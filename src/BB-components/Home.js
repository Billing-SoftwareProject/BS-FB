import React from "react";
import "../BB-css/Home.css"; // Import your CSS file
import SideBar from "../BC-components/SideBar.js";
import Navbar from "../BB-components/Navbar.js"; // Import Navbar component

const TwoComponentRows = () => {
  // Dummy data for components (you can replace this with your components)
  const componentsData = [
    { id: 1, content: "Selling" },
    { id: 2, content: "Overall Profit" },
    { id: 3, content: "Total marketing" },
    { id: 4, content: "Waste" },
    { id: 5, content: "Income Overview" },
  ];

  return (
    <>
    <Navbar />
    
      <div className="SideBar">
        <SideBar />
      </div>

      <div className="page-container">
        <div className="two-component-rows">
          {componentsData.map((component) => (
            <div className="row" key={component.id}>
              {/* Component */}
              <div className="component" style={{ backgroundColor: "rgb(188, 188, 188)" }}>
                {component.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TwoComponentRows;
