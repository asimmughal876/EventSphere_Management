import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Getboothrequest = () => {
  const [booths, setBooths] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

      const response = await fetch(`http://localhost:8001/getBoothRequest/${decoded.exhibitor.id}`);
      const result = await response.json();

      if (response.ok) {
        const flatBooths = result.data.flatMap(expo => expo.booths.map(booth => ({
          ...booth,
          expo_title: expo.title,
          expo_id: expo._id,
        })));
        console.log(result);
        

        setBooths(flatBooths);
      } else {
        alert('Failed to fetch data');
        console.error(result);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  const updateExhibitorStatus = async (expo,boothId, exhibitorId, status) => {
    try {
      const response = await axios.post(`http://localhost:8001/UpdateBoothRequest/${expo}/${boothId}/${exhibitorId}`, {
        boothId,
        status,
      });

      if (response.status === 200) {
        setBooths(prev =>
          prev.map(booth => {
            if (booth._id === boothId) {
              return {
                ...booth,
                assignment_requests: booth.assignment_requests.map(req =>
                  req.exhibitor_id === exhibitorId ? { ...req, status } : req
                ),
              };
            }
            return booth;
          })
        );
        alert(`Exhibitor status updated to ${status}`);
        fetchData(); 
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Booth Assignment Requests</h2>
      </div>
      <table className="styled-table">
      <thead>
  <tr>
    <th>Booth No.</th>
    <th>Floor</th>
    <th>Size</th>
    <th>Status</th>
    <th>Request Date</th>
    <th>Accept</th>
    <th>Reject</th>
  </tr>
</thead>
<tbody>
  {booths.length > 0 ? (
    booths.map((booth, index) => (
      booth.assignment_requests.length > 0 ? (
        booth.assignment_requests.map((req, i) => (
          <tr key={`${index}-${i}`}>
            <td>{booth.booth_number}</td>
            <td>{booth.floor}</td>
            <td>{booth.size}</td>
            <td className={`status-${booth.status}`}>{booth.status}</td>
            <td>
              <p>{new Date(req.requested_at).toLocaleDateString()}</p>
            </td>
            <td>
              <button
                className="btn-add"
                onClick={() => updateExhibitorStatus(booth.expo_id, booth._id, req.exhibitor_id, "accepted")}
                style={{ backgroundColor: "#44f956", marginRight: "5px" }}
              >
                Accept
              </button>
            </td>
            <td>
            <button
                className="btn-add"
                onClick={() => updateExhibitorStatus(booth.expo_id, booth._id, req.exhibitor_id, "rejected")}
                style={{ backgroundColor: "#f94444" }}
              >
                Reject
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr key={index}>
          <td>{booth.booth_number}</td>
          <td>{booth.floor}</td>
          <td>{booth.location}</td>
          <td>{booth.size}</td>
          <td className={`status-${booth.status}`}>{booth.status}</td>
          <td colSpan="2">No requests</td>
        </tr>
      )
    ))
  ) : (
    <tr>
      <td colSpan="7">No booths found</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default Getboothrequest;
