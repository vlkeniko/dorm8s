import React from "react";
import { useEffect, useState } from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import AvailableMachines from "../components/AvailableMachines";
import PostCard from "../components/PostCard.js";
import { createUser, endpoint, getUser, getFromEndpoint } from '../utils/database_functions.js';
export default function HomePage() {

  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);
  /* const [items, setItems] = useState([]); */
  const [leases, setLeases] = useState([]);


  /* Getting data from an endpoint */
  
  
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

  /* Getting items data */
 /*  async function getItems() {
    const url = `${endpoint}/Items.json`;
    let result = await getFromEndpoint(url);
    setItems(result);
  } */

  /* Getting leases data */
  async function getLeases() {
    const url = `${endpoint}/Leases.json`;
    let result = await getFromEndpoint(url);
    setLeases(result);
  }


  useEffect(() => {
    getWms();
    getUsers();
    //getItems();
    getLeases();
   
  }, []);

  return (
    <>
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

      <h1 className="header-title">HomePage</h1>
      <h1> Hello </h1>
      <Balance />
      <Calendar />
      <AvailableMachines />
      <Nav />
    </>
  );
}
