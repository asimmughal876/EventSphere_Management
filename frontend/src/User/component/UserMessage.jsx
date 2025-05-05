import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function UserMessage() {
  const [data, setData] = useState([]);
  const [decoded, setDecoded] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

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

  const buttonStyle = {
    backgroundColor: '#44f956',
    color: 'white',
    padding: '6px 15px',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Sent', value: 'sent' },
    { label: 'Received', value: 'received' },
  ];

  const filteredData = data.filter((msg) => {
    if (activeTab === 'sent') return msg.sender?._id === decoded?.id;
    if (activeTab === 'received') return msg.reciever?._id === decoded?.id;
    return true;
  });

  return (
    <div>
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>User Messages</h2>
                <div className="bt-option">
                  <a href="/">Home</a>
                  <span>Messages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Styled Like Screenshot */}
      <section className="message-tabs" style={{ padding: '40px 0', background: '#f9f9f9' }}>
        <div className="container">
          <div className="tab-buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                style={{
                  padding: '15px 30px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  background: activeTab === tab.value
                    ? 'linear-gradient(90deg, #f857a6 0%, #ff5858 100%)'
                    : '#fff',
                  color: activeTab === tab.value ? '#fff' : '#333',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="schedule-table-content" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f1f1' }}>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Sender</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Receiver</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Message</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Date</th>
                  <th style={{ padding: '12px', border: '1px solid #ddd' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((msg, index) => {
                    const otherUserId = decoded?.id === msg.sender?._id
                      ? msg.reciever?._id
                      : msg.sender?._id;
                    return (
                      <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{msg.sender?.user_name || 'N/A'}</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{msg.reciever?.user_name || 'N/A'}</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{msg.message}</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>{new Date(msg.createdAt).toLocaleString()}</td>
                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                          {msg.reciever?._id === decoded?.id ? (
                            <button style={buttonStyle} onClick={() => sendMessage(otherUserId)}>Reply</button>
                          ) : (
                            <span>This is your message</span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                      No messages found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserMessage;
