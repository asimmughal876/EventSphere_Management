import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [expoList, setExpoList] = useState([]);
  const [selectedExpo, setSelectedExpo] = useState('');

  useEffect(() => {
    const fetchExpos = async () => {
      try {
        const response = await axios.get('http://localhost:8001/getExpos');
        setExpoList(response.data.data);
      } catch (err) {
        console.error('Failed to fetch expos:', err);
        alert('Could not load expos');
      }
    };

    fetchExpos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8001/expos/${selectedExpo}/register`, {
        name,
        email,
        number,
      });

      alert(response.data.message || 'Registered successfully');
      setName('');
      setEmail('');
      setNumber('');
      setSelectedExpo('');
    } catch (err) {
      console.error(err);
      alert('Failed to register');
    }
  };

  return (
    <div className="register-container">
      <style>{`
        .register-container {
          max-width: 700px;
          margin: 50px auto;
          padding: 40px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
          font-size: 2rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
        }

        .register-form input,
        .register-form select,
        .register-form textarea {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .register-form input:focus,
        .register-form select:focus,
        .register-form textarea:focus {
          border-color: pink;
          outline: none;
        }

        .register-form button {
          padding: 15px;
          background-color: pink;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .register-form button:hover {
          background-color: #0056b3;
        }

        .register-form select {
          cursor: pointer;
        }
      `}</style>

      <h2>Register for an Expo</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          value={number}
          placeholder="Phone Number"
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <select
          value={selectedExpo}
          onChange={(e) => setSelectedExpo(e.target.value)}
          required
        >
          <option value="">-- Select Expo --</option>
          {expoList.map((expo) => (
            <option key={expo._id} value={expo._id}>
              {expo.title}
            </option>
          ))}
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
