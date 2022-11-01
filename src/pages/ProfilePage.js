import { React, useState, useEffect } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

export default function ProfilePage() {
  let loggedinid = JSON.parse(localStorage.getItem("loggedinid"));
  let currentuser = {};
  let currentlease = {};

  const [users, setUsers] = useState([]);
  const [leases, setLeases] = useState([]);

  async function getUsers() {
    const url = `${endpoint}/Users.json`;
    let result = await getFromEndpoint(url);
    setUsers(result);
  }

  async function getLeases() {
    const url = `${endpoint}/Leases.json`;
    let result = await getFromEndpoint(url);
    setLeases(result);
  }

  useEffect(() => {
    getUsers();
    getLeases();
  }, []);

  /* if the logged in user's id exists */
  if (loggedinid && loggedinid.length > 0) {
    users.forEach((user) => {
      /* we find the user's data */
      if (user.id === loggedinid) {
        currentuser = user;
      }
    });
  }

  /* if the currentuser object has properties */
  if (Object.keys(currentuser).length > 0) {
    /* we find the corresponding lease */
    leases.forEach((lease) => {
      if (lease.id === currentuser.leasenum.toString()) {
        currentlease = lease;
      }
    });
  }

  return (
    <>
      <h1 className="header-title">Profile</h1>

      <Profile user={currentuser} lease={currentlease} />
      <Settings lease={currentlease} />
      <Nav />
    </>
  );
}