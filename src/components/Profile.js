import { React, useState, useEffect } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions";
import profile from "../pictures/profilepic.jpg";
import { forceHomePage } from "../pages/LoginPage";

export default function Profile(props) {
  let loggedinid = JSON.parse(localStorage.getItem("loggedinid"));

  function handleLogout() {
    localStorage.clear();
    forceHomePage(1000);
  }
  
  return (
    <div className="profile-information">
      <div className="profile-image">
        <img className="profile-image profile-img" src={profile} alt="profile"></img>
      </div>
      <div className="profile-text">
        <h1>Name: {props.user.name}</h1>
        <h3>{props.lease.address}</h3>
        <h3>Lease: {props.user.leasenum}</h3>
        {loggedinid && loggedinid.length > 0 ? <button onClick={handleLogout} className="logoutbutton nohover">Log out</button> : ""}
      </div>
    </div>
  );
}
