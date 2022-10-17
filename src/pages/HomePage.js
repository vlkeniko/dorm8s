import React from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import WM from "../components/WM";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.js";

export default function HomePage() {
  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [leases, setLeases] = useState([]);

  async function getWms() {
    const url =
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/WachingMachines.json";
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    setWms(result);
  }

  async function getUsers() {
    const url =
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users.json";
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    setUsers(result);
  }

  async function getItems() {
    const url =
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Items.json";
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    setItems(result);
  }

  async function getLeases() {
    const url =
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Leases.json";
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
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
