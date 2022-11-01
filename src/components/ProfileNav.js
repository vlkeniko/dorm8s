import React from "react";
import { NavLink } from "react-router-dom";
import Profilepic from "../pictures/profilepic.jpg";
//Eniko, Giulia
export default function ProfileNav() {
  return (
    <div className="navlink-container">
      <NavLink className="navlink navlink-profile" to="/dorm8ts.build/profile">
        <img src={Profilepic} alt="Profile frame" className="nav-icon" />
      </NavLink>
    </div>
  );
}