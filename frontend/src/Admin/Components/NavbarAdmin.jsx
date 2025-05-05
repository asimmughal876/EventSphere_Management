import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const NavbarAdmin = () => {
  const [decoded, setDecoded] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setDecoded(decodedToken);
        console.log(decodedToken);
      } catch (err) {
        console.error("Invalid token:", err);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <div className="nav-right">

        {/* User name and logout */}
        <p>{decoded?.name || 'Admin'}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
