import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Getbooth = () => {
  const { expoId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchBooth();
  }, []);

  const FetchBooth = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/getBooth/${expoId}`);
      setData(response.data.data.booths);
      console.log(response.data.data);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  const deletebooth = async (id,expo_id)=>{
    try {
      const response = await axios.delete(`http://localhost:8001/deletebooth/${expo_id}/${id}`)
      alert(response.data.message)
      console.log(response.data);
      FetchBooth();
      
    } catch (error) {
      alert(error.response.message)      
    }
  } 
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-icon">
          <FaClipboard />
        </div>
        <h2>Booth List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Booth Number</th>
            <th>Status</th>
            <th>Size</th>
            <th>Floor</th>
            <th>Coordinates</th>
            <th>Assign</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((booth, index) => (
              <tr key={index}>
                <td>{booth.booth_number}</td>
                <td className={`status-${booth.status}`}>{booth.status}</td>
                <td>{booth.size || 'N/A'}</td>
                <td>{booth.floor || 'N/A'}</td>
                <td>
                  {booth.coordinates
                    ? `X: ${booth.coordinates.x}, Y: ${booth.coordinates.y}`
                    : 'N/A'}
                </td>
                <td>
                  {booth.assignment_requests._id ?(
                    <p>Request Aleady Send</p>
                  ): booth.status === 'available' ? (
                  <Link to={`/expos/${expoId}/${booth._id}/assign-booth`}>
                    <button className="btn-add">Assign Booth</button>
                  </Link>
                  ) : (
                    <p>Already booked</p>
                  )} 
                </td>
                <td>
                    <button className="btn-add" onClick={()=> deletebooth(booth._id,booth._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Booths Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Getbooth;
