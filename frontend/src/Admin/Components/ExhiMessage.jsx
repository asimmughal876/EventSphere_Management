import React, { useState, useEffect } from 'react';
import { FaClipboard } from 'react-icons/fa';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const ExhiMessage = () => {
  const [exhibitors, setExhibitors] = useState([]);
  const [decoded, setDecoded] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    fetchExhibitors();
  }, []);

  const fetchExhibitors = async () => {
    const token = localStorage.getItem("token");
    let decodedToken = null;

    if (token) {
      try {
        decodedToken = jwtDecode(token);
        setDecoded(decodedToken);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }

    if (decodedToken?.id) {
      try {
        const response = await fetch(`http://localhost:8001/fetchAcceptedExhi`);
        const result = await response.json();

        if (response.ok && result.data.length > 0) {
          setExhibitors(result.data);
        } 
      } catch (err) {
        console.error('Error fetching exhibitors:', err);
      }
    }
  };

  const sendMessage = async (receiverId) => {
    const token = localStorage.getItem("token");
    let decodedToken = {};
    if (token) {
      try {
        decodedToken = jwtDecode(token);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }

    const userMessage = prompt("Enter your message:");
    if (!userMessage) return;

    try {
      await axios.post("http://localhost:8001/addmessage", {
        reciever: receiverId,
        sender: decodedToken.id,
        message: userMessage
      });
      alert("Message sent successfully!");
      navigate("/message"); 
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Accepted Exhibitors</h2>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exhibitors.length > 0 ? (
            exhibitors.map((exhi, index) => (
              <tr key={index}>
                <td>{exhi.user_id?.user_name || 'N/A'}</td>
                <td>{exhi.user_id?.user_email || 'N/A'}</td>
                <td>
                  <button
                    className="btn-add"
                    onClick={() => sendMessage(exhi.user_id._id)}
                    style={{ backgroundColor: "#44f956" }}
                  >
                    Message
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No accepted exhibitors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExhiMessage;
