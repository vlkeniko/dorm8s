import React from 'react';
import { NavLink } from 'react-router-dom';
import Profilepic from "../pictures/profilepic.jpg";

export default function ProfileNav() {
  return (
    <div className="navlink-container">
        <NavLink className="navlink navlink-profile" to="/profile">
          <img src={Profilepic} alt="Profile frame" className="nav-icon"/>
        </NavLink>
      </div> 
  )
}
