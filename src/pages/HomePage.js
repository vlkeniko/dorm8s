import React from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import WM from "../components/WM";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const params = useParams();
  const currentuser = JSON.parse(params.user);

  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);

  async function getWms() {
    const url = "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/WachingMachines";
    const response = await fetch(url);
    const data = await response.json();
    setWms(data.wms);
  }

  async function getUsers() {
    const url = "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.users);
  }

  useEffect(() => {
    getWms();
    getUsers();
  }, []);

  return (
    <>
      <article>
        <h1>Washing overview</h1>
        <p>You are logged in as {currentuser.username}</p>
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          {wms.map((wms) => (
            <PostCard key={wms.wmid} wms={wms} users={users} />
          ))}
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
