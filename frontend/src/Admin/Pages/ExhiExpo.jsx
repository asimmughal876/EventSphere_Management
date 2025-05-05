import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import { Link,  useNavigate } from 'react-router-dom';
// import Editexpo from './Edtiexpo';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ExhiExpo = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();

  const fetchData = async () => {
    
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
      const response = await fetch(`http://localhost:8001/fetchRegisteredExpos/${decoded.exhibitor.id}`);
      const result = await response.json();

      if (response.ok) {
        setData(result.data);
      } else {
        alert('Failed to fetch data');
        console.error(result);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Expo List</h2>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Location</th>
            <th>Image</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((expo, index) => (
              <tr key={index}>
                <td>{expo.title}</td>
                <td>{new Date(expo.start_date).toLocaleDateString()}</td>
                <td>{new Date(expo.end_date).toLocaleDateString()}</td>
                <td className={`status-${expo.status}`}>{expo.status}</td>
                <td>{expo.location}</td>
                <td>
                  <img src={expo.expo_image} width={100} height={100} alt="expo" />
                </td>

                <td>
                    {expo.alreadyRegistered == false ? (
                        <Link to={`/addcompany/${expo._id}`}>
                        <button className="btn-add">Register</button>
                        </Link>
                    ) : (
                        <p >Already Registered</p>
                    )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Expos found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExhiExpo;
