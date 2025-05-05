import React, { useState, useEffect } from 'react';
import './Addexpo.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; 
import axios from 'axios';

const UpdateExpoSchedule = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); 
  const passedSchedule = location.state?.schedule; 

  const [schedule, setSchedule] = useState({
    expo_id: '',
    topic: '',
    speaker_id: '',
    start_time: '',
    end_time: ''
  });

  const [expos, setExpos] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const expoRes = await axios.get('http://localhost:8001/getExpos');
        const speakerRes = await axios.get('http://localhost:8001/getSpeaker');
        setExpos(expoRes.data.data);
        setSpeakers(speakerRes.data.data);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();

    const formatToLocalDatetime = (dateStr) => {
        const date = new Date(dateStr);
        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60000);
        return localDate.toISOString().slice(0, 16);
      };
      
      if (passedSchedule) {
        setSchedule({
          expo_id: passedSchedule.expo_id._id,
          topic: passedSchedule.topic,
          speaker_id: passedSchedule.speaker_id._id,
          start_time: formatToLocalDatetime(passedSchedule.start_time),
          end_time: formatToLocalDatetime(passedSchedule.end_time),
        });
      }
formatToLocalDatetime(passedSchedule.start_time);
      formatToLocalDatetime(passedSchedule.end_time);      
  }, [passedSchedule]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:8001/updateExpoShedule/${id}`, schedule);
      if (res.status === 200) {
        alert('Schedule updated successfully');
        navigate('/getExpoShedule');
      } else {
        alert('Failed to update schedule');
      }
    } catch (err) {
      console.error('Update error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="add-expo-container">
      <h2 className="add-expo-heading">Update Expo Schedule</h2>
      <form onSubmit={handleSubmit} className="add-expo-form">

        <label>Expo</label>
        <select name="expo_id" value={schedule.expo_id} onChange={handleChange} required>
          <option value="">Select Expo</option>
          {expos.map(expo => (
            <option key={expo._id} value={expo._id}>{expo.title}</option>
          ))}
        </select>

        <label>Topic</label>
        <input type="text" name="topic" value={schedule.topic} onChange={handleChange} required />

        <label>Speaker</label>
        <select name="speaker_id" value={schedule.speaker_id} onChange={handleChange} required>
          <option value="">Select Speaker</option>
          {speakers.map(speaker => (
            <option key={speaker._id} value={speaker._id}>{speaker.speaker_name}</option>
          ))}
        </select>

        <label>Start Time</label>
        <input type="datetime-local" name="start_time" value={schedule.start_time} onChange={handleChange} required />

        <label>End Time</label>
        <input type="datetime-local" name="end_time" value={schedule.end_time} onChange={handleChange} required />

        <button type="submit" className="update-expo-button">Update Schedule</button>
      </form>
    </div>
  );
};

export default UpdateExpoSchedule;
