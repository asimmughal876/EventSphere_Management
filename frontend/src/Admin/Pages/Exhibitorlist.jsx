import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exhibitorlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/getExhi');
        const result = await response.json();

        if (response.ok) {
          setData(result.data);
        } else {
          alert('Failed to fetch data');
          console.error(result);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const updateExhibitorStatus = async (exhibitorId, status) => {
    try {
        const response = await axios.post(`http://localhost:8001/updateExhi/${exhibitorId}`, {
            status: status,
        });
        console.log(response.data);
        
        if (response.status === 200) {
            setData(data.filter((exhi) =>  exhi._id !== exhibitorId ))
            alert(`Exhibitor status updated to ${status}`);
        } else {
            alert('Failed to update status');
        }
        
    } catch (error) {
        console.error('Error updating status:', error);
        alert('Failed to update status');
        return;
    }
  
  }
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Exhi List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Image</th>
            <th>Request date</th>
            <th>Reject</th> 
            <th>Accept</th> 
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((exhi, index) => (
              <tr key={index}>
                <td>{exhi.user_id.user_name}</td>
                <td>{exhi.user_id.user_email}</td>
                <td className={`status-${exhi.status}`}>{exhi.status}</td>
                <td><img src={exhi.user_id.user_image} width={100} height={100} alt="exhi" /></td>
                <td>{new Date(exhi.user_id.created_at).toLocaleDateString()}</td>
                <td>
                    <button className="btn-add" onClick={()=> updateExhibitorStatus(exhi._id,"rejected")}>Reject</button>
                </td>
                <td>
                    <button className="btn-add" onClick={()=> updateExhibitorStatus(exhi._id,"accepted")} style={{backgroundColor: "#44f956"}}>Accept</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Exhibitor found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Exhibitorlist;
