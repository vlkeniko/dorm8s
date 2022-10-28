import { React, useState, useEffect } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions";
import profile from "../pictures/profile.png";

export default function Profile(props) {
  return (
    <div className="profile-information">
      <div className="profile-image">
        <img className="profile-image" src={profile} alt="profile"></img>
      </div>
      <div className="profile-text">
        <h1>Name: {props.user.name}</h1>
        <h3>{props.lease.address}</h3>
        <h3>Lease#: {props.user.leasenum}</h3>
      </div>
    </div>
  );
}
