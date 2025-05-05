import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect, use } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ExpoShedule() {
  const [expos, setExpos] = useState([]);
  const {expo_id} = useParams();
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
      const response =  await axios.post(`http://localhost:8001/getExposSheduleUser/${expo_id}`,{
        user_id: decoded.id,
      })
        setExpos(response.data.data);
     
    } catch (error) {
      console.error('Error fetching expos:', error);
    }
  };

  const registerButtonStyle = {
    backgroundColor: '#fbb0cb',
    color: 'white',
    padding: '8px 20px',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s ease'
  };

  const expoImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px'
  };

  const register = async (id,s_id) => {
    console.log(id);
    
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
        session_id: s_id,
        user_id: decoded.id,
        expo_id: id,
      });
        alert("Registered successfully for the Session!");
        fetchExpos();
    } catch (error) {
      console.error("Error registering for Session:", error);
      alert("Error registering for Session. Please try again later.");
    }

  }

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

      {/* Schedule Table Section */}
      <section className="schedule-table-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="schedule-table-tab">
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="schedule-table-content">
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Time</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>End Time</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Speaker</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Register</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expos.length > 0 ? (
                            expos.map((expo) => (
                              <tr key={expo._id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.expo_id.title}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(expo.start_time).toLocaleTimeString()}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(expo.end_time).toLocaleTimeString()}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.speaker_id.speaker_name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(expo.end_time).toLocaleDateString()}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                  {expo.already_registered ? (
                                    <p>Already registered</p>
                                  ) : (
                                    <button style={registerButtonStyle} onClick={() => register(expo.expo_id._id,expo._id)}>
                                      Register
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                                No Schedule Available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpoShedule;
