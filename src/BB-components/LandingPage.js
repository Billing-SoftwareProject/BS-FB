import "../BB-css/LandingPage.css"; // Make sure the path matches the location of your CSS file
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../BB-components/Navbar.js";

const LandingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationValid, setLocationValid] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setLocationValid(location !== "");
  };

  const navigate = useNavigate();

  const handleProceedClick = () => {
    let finalLocation = selectedLocation;
    if (currentLocation) {
      finalLocation = `${currentLocation.city}, ${currentLocation.pincode}`;
    }

    if (locationValid) {
      alert(`Proceeding with location: ${finalLocation}`);
    } else {
      alert("Please select a valid location to proceed.");
    }

    navigate("/Home");
  };

  const handleUseCurrentLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const locationData = await fetchLocationData(latitude, longitude);
            setCurrentLocation(locationData);
          } catch (error) {
            alert("Error getting location data.");
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert(
              "Location access denied. Please enable location services to use this feature."
            );
          } else {
            alert(`Error getting location: ${error.message}`);
          }
        }
      );
    } else {
      alert("Geolocation is not supported in this browser.");
    }
  };

  // Simulate fetching location data based on latitude and longitude
  const fetchLocationData = async (latitude, longitude) => {
    // Replace this with your actual API call to get location data based on coordinates
    const response = await fetch(
      `https://api.example.com/getLocation?latitude=${latitude}&longitude=${longitude}`
    );

    if (!response.ok) {
      throw new Error("Error fetching location data.");
    }

    const data = await response.json();
    return {
      city: data.city,
      pincode: data.pincode,
    };
  };

  // Effect to update the selected location when the current location changes
  useEffect(() => {
    if (currentLocation) {
      setSelectedLocation(
        `${currentLocation.city}, ${currentLocation.pincode}`
      );
      setLocationValid(true);
    } else {
      setSelectedLocation("");
      setLocationValid(false);
    }
  }, [currentLocation]);

  return (
    <>
    {/* <Navbar /> */}
    
    <div className="landing-page">
      <h1>Welcome to our B2B Landing Page</h1>
      <p>Please select a location or use your current location:</p>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="" disabled>
          Select a location
        </option>
        <option value="Location A">Location A</option>
        <option value="Location B">Location B</option>
        <option value="Location C">Location C</option>
      </select>
      <button onClick={handleProceedClick} disabled={!locationValid}>
        Proceed
      </button>
      <button onClick={handleUseCurrentLocationClick}>
        Use Current Location
      </button>
      {currentLocation && (
        <div className="current-location-box">
          <p>Detected Location:</p>
          <p>{`${currentLocation.city}, ${currentLocation.pincode}`}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default LandingPage;
