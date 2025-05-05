import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Schedule.css'
function Shedule() {
  const [expos, setExpos] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    fetchExpos();
  }, []);

  const fetchExpos = async () => {
    try {
      const token = localStorage.getItem("token");
      let decoded = {};
      if (token) {
        try {
          decoded = jwtDecode(token);
        } catch (err) {
          console.error("Invalid token:", err);
        }
      }
  
      const userId = decoded?.id;
      const url = await axios.post(`http://localhost:8001/getExposUser`,{
        userId: userId,
      })
        setExpos(url.data.data);
      
    } catch (error) {
      console.error("Error fetching expos:", error);
    }
  };
  
  

  const register = async (id) => {
    const token = localStorage.getItem("token");
    let decoded = {};
    if (token) {
      try {
        decoded = jwtDecode(token);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }

    try {
      if (!decoded.id) {
        alert("Please log in to register for the expo.");
        navigate("/login");
        return;
      }
      await axios.post(`http://localhost:8001/registerExpoAttendee`, {
        session_id: null,
        user_id: decoded.id,
        expo_id: id,
      });
      alert("Registered successfully for the expo!");
      fetchExpos();
    } catch (error) {
      console.error("Error registering for expo:", error);
      alert("Error registering for expo. Please try again later.");
    }
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Event Schedule</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>Our Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Cards Section */}
      <section className="schedule-cards-section spad">
        <div className="container">
          <div className="row">
            {expos.length > 0 ? (
              expos.map((expo) => (
                <div key={expo._id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="expo-card">
                    <img
                      src={expo.expo_image}
                      alt="expo"
                      className="expo-image"
                    />
                    <h3 className="expo-title">{expo.title}</h3>
                    <p><strong>Start Date:</strong> {new Date(expo.start_date).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(expo.end_date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {expo.location}</p>
                    <p><strong>Status:</strong> {expo.status}</p>

                    {/* Registration Button */}
                    {expo.already_registered ? (
                      <p className="registered-message">Already registered</p>
                    ) : (
                      <button className="register-button" onClick={() => register(expo._id)}>
                        Register
                      </button>
                    )}

                    <div className="expo-actions">
                      {/* Schedule Link */}
                      <Link to={`/ExpoShedule/${expo._id}`}>
                        <button className="action-button">Schedules</button>
                      </Link>

                      {/* Booth Link */}
                      <Link to={`/Getbooth/${expo._id}`}>
                        <button className="action-button">Booths</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p style={{ textAlign: 'center' }}>No Schedule Available</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shedule;
