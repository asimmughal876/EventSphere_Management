import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setDecoded(decodedToken);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  return (
    <div>
      {/* Inline style block */}
      <style>
        {`
          .site-logo {
            width: 100px;
            height: auto;
            transition: width 0.3s ease;
          }

          @media (min-width: 1024px) {
            .site-logo {
              width: 160px;
            }
          }
        `}
      </style>

      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="img/logo2.png" className="site-logo" alt="Logo" />
            </Link>
          </div>
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu">
              <ul>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                <li><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}>Schedule</NavLink></li>
                <li><NavLink to="/userMessage" className={({ isActive }) => isActive ? 'active' : ''}>Message</NavLink></li>
                <li><NavLink to="/userprofile" className={({ isActive }) => isActive ? 'active' : ''}>
                  {decoded ? "User Profile" : "Login"}
                </NavLink></li>
              </ul>
            </nav>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
