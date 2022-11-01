import React from "react";
import { useEffect, useState } from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import AvailableMachines from "../components/AvailableMachines";
import PostCard from "../components/PostCard.js";
import ProfileNav from "../components/ProfileNav";
import { endpoint, getFromEndpoint } from "../utils/database_functions.js";

export default function HomePage() {
  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);
  const [leases, setLeases] = useState([]);

  /* Getting washing machine data */
  async function getWms() {
    const url = `${endpoint}/WashingMachines.json`;
    let result = await getFromEndpoint(url);
    setWms(result);
  }

  /* Getting user data */
  async function getUsers() {
    const url = `${endpoint}/Users.json`;
    let result = await getFromEndpoint(url);
    setUsers(result);
  }

  /* Getting leases data */
  async function getLeases() {
    const url = `${endpoint}/Leases.json`;
    let result = await getFromEndpoint(url);
    setLeases(result);
  }

  useEffect(() => {
    getWms();
    getUsers();
    getLeases();
  }, []);

  /* if loggedinbalance is missing from localStorage for whatever reason
  setItem() will convert the undefined value to a string,
  so we need to check for case too with the !== "undefined" part */
  let balance = localStorage.getItem("loggedinbalance")?.length > 0 && localStorage.getItem("loggedinbalance") !== "undefined" ? JSON.parse(localStorage.getItem("loggedinbalance")) : "N/A";

  return (
    <>
    <ProfileNav/>
      <article>
        {/*Sorry for the ugly way of hiding the washing machine display*/}
        <div style={{ display: "none" }}>
          {wms.map((wm, i) => {
            // Return the element. Also pass key
            return <PostCard key={wm.id} wm={wm} users={users} />;
          })}
        </div>
      </article>
      {/* 
      <p>You are logged in as {currentuser.username}</p> */}
      <h1 className="header-title">
        {JSON.parse(localStorage.getItem("loggedinname"))
          ? `Hello, ${JSON.parse(localStorage.getItem("loggedinname"))}`
          : ""}
      </h1>
      <Balance balance={balance} />
      <Calendar />
      <AvailableMachines />
      <Nav />
    </>
  );
}
