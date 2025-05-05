import React, { useState, useEffect } from 'react';
import './Addexpo.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Editexpo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expo, setExpo] = useState(location.state?.expo || {

      title: '',
      start_date: '',
      end_date: '',
      location: '',
      description: '',
      theme: '',
      status: 'upcoming'
    });
  
    const [imageFile, setImageFile] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setExpo((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleImageChange = (e) => {
      setImageFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      Object.entries(expo).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      if (imageFile) {
        formData.append('image', imageFile);
      }
  
      console.log(formData.get('image'));
      
      try {
        const response = await fetch(`http://localhost:8001/updateExpo/${expo._id}`, {
          method: 'PUT',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error('Failed to update expo');
        }
  
        alert('Expo updated successfully!');
        navigate("/getexpo");
      } catch (err) {
        console.error('Error:', err);
        alert('Something went wrong');
      }
    };
  
    return (
      <div className="add-expo-container">
        <h2 className="add-expo-heading">Update Expo</h2>
        <form onSubmit={handleSubmit} className="add-expo-form" encType="multipart/form-data">
  
          <label>Title</label>
          <input type="text" name="title" value={expo.title} onChange={handleChange} required />
  
          <label>Start Date</label>
          <input type="date" name="start_date" value={expo.start_date?.substring(0,10)} onChange={handleChange} required />
  
          <label>End Date</label>
          <input type="date" name="end_date" value={expo.end_date?.substring(0,10)} onChange={handleChange} required />
  
          <label>Expo Image</label>
          <input type="file" name="expo_image" onChange={handleImageChange} accept="image/*" />
  
          <label>Location</label>
          <input type="text" name="location" value={expo.location} onChange={handleChange} required />
  
          <label>Description</label>
          <textarea name="description" value={expo.description} onChange={handleChange} />
  
          <label>Theme</label>
          <input type="text" name="theme" value={expo.theme} onChange={handleChange} />
  
          <label>Status</label>
          <select name="status" value={expo.status} onChange={handleChange}>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
  
          <button type="submit" className="update-expo-button">Update Expo</button>
        </form>
      </div>
    );
  };
  
  export default Editexpo;
  