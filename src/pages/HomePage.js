import React from "react";
import { useEffect, useState } from "react";

import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import WM from "../components/WM";
import PostCard from "../components/PostCard.js";
import { endpoint } from '../utils/database_functions.js';

export default function HomePage() {
  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [leases, setLeases] = useState([]);

  /* Getting data from an endpoint */
  async function getFromEndpoint(url) {
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    return result;
  }

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
  async function getItems() {
    const url = `${endpoint}/Items.json`;
    let result = await getFromEndpoint(url);
    setItems(result);
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
    getItems();
    getLeases();
  }, []);

  return (
    <>
      <article>
        <h1>Washing overview</h1>
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          {wms.map((wm, i) => {
            // Return the element. Also pass key
            return <PostCard key={wm.id} wm={wm} users={users} />;
          })}
        </div>
      </article>

      <div>HomePage</div>
      <Balance />
      <Calendar />
      <WM />
      <Nav />
    </>
  );
}
