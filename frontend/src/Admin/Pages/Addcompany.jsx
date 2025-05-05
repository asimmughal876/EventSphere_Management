import React, { useEffect, useState } from 'react';
import './Addcompany.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useParams } from 'react-router-dom';

const AddCompany = () => {
  const [company, setCompany] = useState({
    company_name: '',
    company_details: '',
    compony_image: null,
    exhibitor_id: ''
  });

  const { expo_id } = useParams();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'compony_image') {
      setCompany({ ...company, compony_image: files[0] }); 
    } else {
      setCompany({ ...company, [name]: value });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  const token = localStorage.getItem("token");
  let decoded = {};
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }
  
    const formData = new FormData();
    formData.append('company_name', company.company_name);
    formData.append('company_details', company.company_details);
    if (company.compony_image) {
      formData.append('image', company.compony_image);
    }
    formData.append('exhibitor_id', decoded.exhibitor.id);

    try {
      const response = await fetch('http://localhost:8001/addCompany', {
        method: 'POST',
        body: formData 
      });

      const data = await response.json();

      const exporesponse = await axios.post(`http://localhost:8001/registerExhiExop/${expo_id}`, {
        exhibitor_id: decoded.exhibitor.id,
      });
      
      if (response.ok) {
        alert('Company added successfully!');
        console.log('Response:', data);
        navigate("/ExhiExpo");
      } else {
        alert('Failed to add company');
        console.error(data);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">Add Company</div>
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="company_name"
            value={company.company_name}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="form-group">
          <label>Company Details</label>
          <textarea
            name="company_details"
            value={company.company_details}
            onChange={handleChange}
            placeholder="Describe the company"
            required
          />
        </div>

        <div className="form-group">
          <label>Company Image</label>
          <input
            type="file"
            name="compony_image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
