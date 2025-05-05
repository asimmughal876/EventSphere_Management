import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import { Link,  useNavigate } from 'react-router-dom';
// import Editexpo from './Edtiexpo';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [editingExpo, setEditingExpo] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');
  const [updatedStatus, setUpdatedStatus] = useState('');
  const [updatedStartDate, setUpdatedStartDate] = useState('');
  const [updatedEndDate, setUpdatedEndDate] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8001/getExpos');
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

  const deleteExpo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8001/deleteExpo/${id}`);
      alert(response.data.message);
      console.log(response.data);
      fetchData();
    } catch (error) {
      alert(error.response.message);
    }
  };

  const updateExpo = async (id) => {
    const updatedExpoData = {
      title: updatedTitle,
      location: updatedLocation,
      status: updatedStatus,
      start_date: updatedStartDate,
      end_date: updatedEndDate
    };

    try {
      const response = await axios.put(`http://localhost:8001/updateExpo/${id}`, updatedExpoData);
      alert(response.data.message);
      fetchData();
      setEditingExpo(null);  
    } catch (error) {
      console.error(error);
      alert('Failed to update expo');
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

      {editingExpo && (
        <div className="edit-form">
          <h3>Edit Expo</h3>
          <form onSubmit={(e) => { e.preventDefault(); updateExpo(editingExpo._id); }}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
              placeholder="Location"
            />
            <select
              value={updatedStatus}
              onChange={(e) => setUpdatedStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              type="date"
              value={updatedStartDate}
              onChange={(e) => setUpdatedStartDate(e.target.value)}
            />
            <input
              type="date"
              value={updatedEndDate}
              onChange={(e) => setUpdatedEndDate(e.target.value)}
            />
            <button type="submit">Update Expo</button>
            <button type="button" onClick={() => setEditingExpo(null)}>Cancel</button>
          </form>
        </div>
      )}

      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Location</th>
            <th>Image</th>
            <th>Action</th>
            <th>Get Booth</th>
            <th>Delete Expo</th>
            <th>Edit Expo</th>
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
                  <Link to={`/expos/${expo._id}/add-booth`}>
                    <button className="btn-add">Add Booth</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/expos/${expo._id}/get-booth`}>
                    <button className="btn-add">Get Booth</button>
                  </Link>
                </td>
                <td>
                  <button className="btn-add" onClick={() => deleteExpo(expo._id)}>Delete</button>
                </td>
                <td>
                <button
  className="btn-add"
  onClick={() => {
    navigate('/Editexpo', { state: { expo } }); // ✅ Passing expo object in state
  }}
>
  Edit
</button>


                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No Expos found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
