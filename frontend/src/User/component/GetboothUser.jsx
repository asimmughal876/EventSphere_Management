import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect, use } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function GetboothUser() {
  const [expos, setExpos] = useState([]);
  const {expo_id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchExpos();
    console.log(expo_id);
    
  }, []);

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
      console.log(expo_id);
      
      const response = await fetch(`http://localhost:8001/fetchExpobookedbooth/${expo_id}`);
      const result = await response.json();
      if (response.ok) {
        setExpos(result.data);
      } else {
        console.error('Failed to fetch expos:', result);
      }
    } catch (error) {
      console.error('Error fetching expos:', error);
    }
  };
  const message = async (id) => {
    const token = localStorage.getItem("token");
    let decoded = {};
    if (token) {
      try {
        decoded = jwtDecode(token);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
      if (!decoded.id) {
        alert("Please log in to register for the expo.");
        navigate("/login");
        return;
      }
    const userMessage = prompt("Enter your message:");
    if (!userMessage) return;
  
    try {
       await axios.post("http://localhost:8001/addmessage", {
        reciever: id,
        sender: decoded.id,
        message: userMessage
      });
      alert("Message sent successfully!");
      navigate("/userMessage"); 
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
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
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Booth Number</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Floor</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Row No</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Column No</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Assign To</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expos.length > 0 ? (
                            expos.map((expo) => (
                              <tr key={expo._id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.booth_number}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.size}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.floor}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.coordinates.y}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.coordinates.x}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expo.assigned_to}</td>
                                <td> <button style={registerButtonStyle} onClick={()=> message(expo.exhi_id)}>
                                      Message
                                    </button></td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                                No Booth Available
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

export default GetboothUser;
