import React, { useState } from 'react';
import './Addcompany.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSpeaker = () => {
  const [speaker, setSpeaker] = useState({
    name: '',
    bio: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setSpeaker({ ...speaker, image: files[0] });
    } else {
      setSpeaker({ ...speaker, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('speaker_name', speaker.name);
    formData.append('speaker_bio', speaker.bio);
    if (speaker.image) {
      formData.append('image', speaker.image);
    }

    try {
      const response = await fetch('http://localhost:8001/addSpeaker', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Speaker added successfully!');
        console.log('Response:', data);
      } else {
        alert('Failed to add Speaker');
        console.error(data);
      }
      navigate('/AddExpoSchedule');
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">Add Speaker</div>
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Speaker Name</label>
          <input
            type="text"
            name="name"
            value={speaker.name}
            onChange={handleChange}
            placeholder="Enter Speaker name"
            required
          />
        </div>

        <div className="form-group">
          <label>Speaker Details</label>
          <textarea
            name="bio"
            value={speaker.bio}
            onChange={handleChange}
            placeholder="Describe the Speaker"
            required
          />
        </div>

        <div className="form-group">
          <label>Speaker Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Speaker</button>
      </form>
    </div>
  );
};

export default AddSpeaker;
