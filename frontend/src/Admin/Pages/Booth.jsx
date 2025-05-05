import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Addexhibitor.css'; // Reuse the same styling as Add Exhibitor

const Booth = () => {
  const { expoId } = useParams(); // ✅ get expoId from URL
  const navigate = useNavigate();

  const [booth, setBooth] = useState({
    booth_number: '',
    size: '',
    floor: '',
    coordinates: {
      x: '',
      y: ''
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'x' || name === 'y') {
      setBooth((prev) => ({
        ...prev,
        coordinates: {
          ...prev.coordinates,
          [name]: Number(value)
        }
      }));
    } else {
      setBooth((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Expo ID:", expoId);

    const payload = { ...booth };

    try {
      const response = await fetch(`http://localhost:8001/addBooth/${expoId}/booths`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Booth added successfully!');
        console.log(data);
        navigate("/getexpo")
      } else {
        alert('Failed to add booth');
        console.error(data);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">Add Booth</div>
      <form onSubmit={handleSubmit} className="form-body">
        <div className="form-group">
          <label>Booth Number</label>
          <input
            type="text"
            name="booth_number"
            value={booth.booth_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={booth.size}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Floor</label>
          <input
            type="text"
            name="floor"
            value={booth.floor}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>X Coordinate</label>
          <input
            type="number"
            name="x"
            value={booth.coordinates.x}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Y Coordinate</label>
          <input
            type="number"
            name="y"
            value={booth.coordinates.y}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn" type="submit">Add Booth</button>
      </form>
    </div>
  );
};

export default Booth;
