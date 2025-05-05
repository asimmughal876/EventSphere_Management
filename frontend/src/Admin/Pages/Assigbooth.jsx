import React, { useEffect, useState } from 'react';
import './Addcompany.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Assigbooth = () => {
  const { expoId, booth_id } = useParams();  
  const navigate = useNavigate();
  const [exhi, setExhi] = useState("");
  const [exhibitors, setExhibitors] = useState([]);

  useEffect(() => {
    fetchexhi();
  }, []);

  const fetchexhi = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/getValidExhi/${expoId}`);
      setExhibitors(response.data.data);
      
    } catch (error) {
      console.error("Error fetching exhibitors:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!exhi) {
      alert("Please select an exhibitor.");
      return;
    }

    if (!expoId || !booth_id) {
      alert("Invalid parameters.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8001/assignBooth/${expoId}/${booth_id}`, {
        exhibitor_id: exhi,
      });
      console.log("Assignment Success:", response.data);
      alert("Booth assigned successfully!");
      navigate("/getexpo");
    } catch (error) {
      console.error("Error assigning booth:", error);
      alert("Failed to assign booth.");
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">Assign Booth</div>
      <form className="form-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exhibitor</label>
          <select
            name="exhibitor_id"
            value={exhi}
            onChange={(e) => setExhi(e.target.value)}
            required
          >
            <option value="">Select an exhibitor</option>
            {exhibitors.map((exhibitor) => (
              <option key={exhibitor._id} value={exhibitor._id}>
                {exhibitor?.user_name || 'Unnamed Exhibitor'}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">Assign Booth</button>
      </form>
    </div>
  );
};

export default Assigbooth;
