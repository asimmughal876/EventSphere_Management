import React, { useState, useEffect } from 'react';
import { FaClipboard } from 'react-icons/fa';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Message = () => {
  const [data, setData] = useState([]);
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
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
        const response = await fetch(`http://localhost:8001/fetchMessage/${decodedToken.id}`);
        const result = await response.json();

        if (response.ok) {
          setData(result.data);
        } else {
          alert('Failed to fetch messages');
        }
      } catch (err) {
        console.error('Error fetching messages:', err);
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
      fetchData(); 
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
        <h2>Message List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Message</th>
            <th>Date</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((msg, index) => {
              const otherUserId =
                decoded?.id === msg.sender?._id
                  ? msg.reciever?._id
                  : msg.sender?._id;

              return (
                <tr key={index}>
                  <td>{msg.sender?.user_name || 'N/A'}</td>
                  <td>{msg.reciever?.user_name || 'N/A'}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                  <td>
                    {msg.reciever._id === decoded?.id ? (
                           <button
                           className="btn-add"
                           onClick={() => sendMessage(otherUserId)}
                           style={{ backgroundColor: "#44f956" }}
                         >
                           Reply
                         </button>
                    ): (<p>This is Your message</p>)}
                 
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No messages found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Message;
