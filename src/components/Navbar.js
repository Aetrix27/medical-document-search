import './Navbar.css'
// src/Title.js
import { NavLink } from 'react-router-dom'
import React from 'react'

function Navbar(){
    return (
        <div className="Title">
        <h1>Medical Documents Search</h1>
                <div className="Title-Subtitle">Search for a document!</div>

        <div>
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">Documents</NavLink>
            <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/form">Submit Document</NavLink>
            
        </div>
        </div>
    )
}

  export default Navbar