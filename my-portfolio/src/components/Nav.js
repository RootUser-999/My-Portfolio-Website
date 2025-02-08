import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" id='heroName' to="/">
                    Shahzeb <span className="text-info">Aman</span>
                </NavLink>

                {/* Toggler button for smaller screens */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Navbar */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" id="Nav-ul">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link nav-hover ${isActive ? 'active-link' : ''}`} 
                                to="/" 
                                style={{ marginRight: '10px' }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link nav-hover ${isActive ? 'active-link' : ''}`} 
                                to="/education" 
                                style={{ marginRight: '10px' }}
                            >
                                Education
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link nav-hover ${isActive ? 'active-link' : ''}`} 
                                to="/services" 
                                style={{ marginRight: '10px' }}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link nav-hover ${isActive ? 'active-link' : ''}`} 
                                to="/contact" 
                                style={{ marginRight: '10px' }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
