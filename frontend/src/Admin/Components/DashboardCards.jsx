import React, { useEffect, useState } from 'react';
import './DashboardCards.css';
import {
  FaCalendarAlt,
  FaUsers,
  FaUserCheck,
  FaUserTie,
  FaMicrophoneAlt,
  FaBuilding
} from 'react-icons/fa';
import axios from 'axios';

const DashboardCards = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/fetchCount');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cards = [
    { icon: <FaCalendarAlt />, title: 'Expos', value: data?.expo, color: '#FFA500' },
    { icon: <FaUsers />, title: 'Exhibitors', value: data?.exhibitors, color: '#00BFFF' },
    { icon: <FaUserCheck />, title: 'Attendees', value: data?.attendee || 0, color: '#20B2AA' },
    { icon: <FaUserTie />, title: 'Users', value: data?.users, color: '#1DA1F2' },
    { icon: <FaMicrophoneAlt />, title: 'Speakers', value: data?.speakers, color: '#32CD32' },
    { icon: <FaBuilding />, title: 'Companies', value: data?.companies, color: '#9370DB' }
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon" style={{ color: card.color }}>
            {card.icon}
          </div>
          <div className="card-info">
            <h3>{card.value}</h3>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
