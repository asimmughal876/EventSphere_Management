import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';

const GetTotalAttendees = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/getTotalAttendeesPerExpo');
        const result = await response.json();
        console.log(result);
        
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


  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Expo User Register List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Expo Name</th>
            <th>Total Register</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.expoTitle}</td>
                <td>{item.totalAttendees}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No Attendent found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetTotalAttendees;
