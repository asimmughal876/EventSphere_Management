import React, { useEffect, useState } from 'react';
import './Addexpo.css';
import { useNavigate } from 'react-router-dom';

const AddExpoSchedule = () => {
    const [expo, setExpo] = useState({
        expo_id: '',
        speaker_id: '',
        topic: '',
        start_time: '',
        end_time: '',
      });
      

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [speaker, setSpeaker] = useState([]);

  useEffect(() => {
    fetchData();
    fetchSpeaker();
  }, []);

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
  const fetchSpeaker = async () => {
    try {
      const response = await fetch('http://localhost:8001/getSpeaker');
      const result = await response.json();

      if (response.ok) {
        setSpeaker(result.data);
      } else {
        alert('Failed to fetch data');
        console.error(result);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      alert('Something went wrong');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpo({ ...expo, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const localToISOString = (datetime) => {
      const localDate = new Date(datetime);
      return localDate.toISOString(); 
    };
  
    const payload = {
      ...expo,
      start_time: localToISOString(expo.start_time),
      end_time: localToISOString(expo.end_time),
    };
  
    try {
      const response = await fetch('http://localhost:8001/addExpoSchedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Expo added successfully!');
        console.log('Response:', data);
        navigate('/getExpoShedule');
      } else {
        alert('Failed to add expo');
        console.error(data);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };
    
  
  return (
    <div className="add-expo-container">
      <h2 className="add-expo-heading">Add Expo</h2>
      <form onSubmit={handleSubmit} className="add-expo-form" encType="multipart/form-data">
      <label>Start Date & Time</label>
<input
  type="datetime-local"
  name="start_time"
  value={expo.start_time}
  onChange={handleChange}
  required
/>

<label>End Date & Time</label>
<input
  type="datetime-local"
  name="end_time"
  value={expo.end_time}
  onChange={handleChange}
  required
/>

<label>Topic</label>
<input
  type="text"
  name="topic"
  value={expo.topic}
  onChange={handleChange}
  required
/>

<label>Expo</label>
<select name="expo_id" value={expo.expo_id} onChange={handleChange} required>
  <option value="">Select an Expo</option>
  {data.map((expo) => (
    <option key={expo._id} value={expo._id}>
      {expo.title || 'Unnamed Expo'}
    </option>
  ))}
</select>

<label>Speaker</label>
<select name="speaker_id" value={expo.speaker_id} onChange={handleChange}>
  <option value="">Select a Speaker</option>
  {speaker.map((sp) => (
    <option key={sp._id} value={sp._id}>
      {sp.speaker_name || 'Unnamed Speaker'}
    </option>
  ))}
</select>


        <button type="submit">Add Expo</button>
      </form>
    </div>
  );
};

export default AddExpoSchedule;
