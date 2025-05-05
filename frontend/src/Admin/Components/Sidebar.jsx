import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {
  FaTachometerAlt,
  FaRegFileAlt,
  FaTable,
  FaPlusSquare,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Sidebar = () => {
  const [decoded, setDecoded] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setDecoded(decodedToken);
      } catch (err) {
        console.error("Invalid token:", err);
        navigate("/");
      }
    } else {
      navigate("/"); 
    }
  }, [navigate]);

  useEffect(() => {
    if (decoded && decoded.role !== 1 && decoded.role !== 2) {
      navigate("/");
    }
  }, [decoded, navigate]);

  if (!decoded) return null; 

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin" className="sidebar-link">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
              <Link to="/message" className="sidebar-link">
                <FaTable /> Message List
              </Link>
            </li>

        {decoded.role === 1 && (
          <>
            <li>
              <Link to="/getexpo" className="sidebar-link">
                <FaTable /> Expo List
              </Link>
            </li>
            <li>
              <Link to="/GetTotalAttendees" className="sidebar-link">
                <FaTable /> Expo User Register List
              </Link>
            </li>
            <li>
              <Link to="/getExpoShedule" className="sidebar-link">
                <FaTable /> Expo Schedule List
              </Link>
            </li>
            <li>
              <Link to="/Exhibitorlist" className="sidebar-link">
                <FaTable /> Exhibitor List
              </Link>
            </li>
            <li>
              <Link to="/ExhiMessage" className="sidebar-link">
                <FaTable /> Exhibitor Message
              </Link>
            </li>
            <li>
              <Link to="/addexpo" className="sidebar-link">
                <FaPlusSquare /> Add Expo
              </Link>
            </li>
            <li>
              <Link to="/addSpeaker" className="sidebar-link">
                <FaPlusSquare /> Add Speaker
              </Link>
            </li>
            <li>
              <Link to="/AddExpoSchedule" className="sidebar-link">
                <FaPlusSquare /> Add Expo Schedule
              </Link>
            </li>
          </>
        )}

        {decoded.role === 2 && (
          <>
            <li>
              <Link to="/getboothrequest" className="sidebar-link">
                <FaTable /> Booth Request List
              </Link>
            </li>
            <li>
              <Link to="/ExhiExpo" className="sidebar-link">
                <FaTable /> Expo List
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
