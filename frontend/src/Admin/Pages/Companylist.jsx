import React, { useState, useEffect } from 'react';
import './Table.css';
import { FaClipboard } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompanyList = () => {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/getCompany');

      setData(response.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      alert('Something went wrong');
    }
  };
  const deleteCompany = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:8001/deleteCompany/${id}`)
      alert(response.data.message)
      console.log(response.data);
      fetchData();
      
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
        <h2>Company List</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Details</th>
            <th>Exhibitor Name</th>
            <th>Company Image</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((company, index) => (
              <tr key={index}>
                <td>{company.company_name}</td>
                <td>{company.company_details}</td>
                <td>{company.exhibitor_id.user_id.user_name}</td>
                <td>
                  <img
                    src={company.company_image}
                    width={100}
                    height={100}
                    alt="company"
                  />
                </td>
                <td>
                  <Link to={`/companies/${company._id}/edit`}>
                    <button className="btn-add">Edit</button>
                  </Link>
                </td>
                <td>
                    <button className="btn-add" onClick={()=> deleteCompany(company._id)} >Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No companies found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
