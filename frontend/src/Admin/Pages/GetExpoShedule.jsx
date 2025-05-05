import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GetExpoShedule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/getExpoShedule');
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

  const deleteSchedule = async (id) => {

    try {
      const response = await axios.delete(`http://localhost:8001/deleteExpoShedule/${id}`);
      if (response.status === 200) {
        setData(data.filter(item => item._id !== id));
        alert('Schedule deleted successfully');
      } else {
        alert('Failed to delete schedule');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting schedule');
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Expo Schedule List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Expo Name</th>
            <th>Topic</th>
            <th>Speaker Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.expo_id.title}</td>
                <td>{item.topic}</td>
                <td>{item.speaker_id.speaker_name}</td>
                <td>{new Date(item.start_time).toLocaleTimeString()}</td>
                <td>{new Date(item.end_time).toLocaleTimeString()}</td>
                <td>{new Date(item.start_time).toLocaleDateString()}</td>
                <td>
                <Link
                  to={`/updateExpoSchedule/${item._id}`}
                  className="btn-add"
                  state={{ schedule: item }}
                >
                  Update
                </Link>
                </td>
                <td>
                  <button className="btn-add" onClick={() => deleteSchedule(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No schedule found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetExpoShedule;
