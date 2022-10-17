import React from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import WM from "../components/WM";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.js";

export default function HomePage() {
  /* const params = useParams();
  const currentuser = JSON.parse(params.user);
  console.log(currentuser) */

  const [wms, setWms] = useState([]);
  const [users, setUsers] = useState([]);

  async function getWms() {
    const url = "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/WachingMachines.json";
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    setWms(result);
  }

  async function getUsers() {
    const url = "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users.json";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getWms();
    getUsers();
  }, []);

  let html = "";

  return (
    <>
      <article>
        <h1>Washing overview</h1>
        {/* <p>You are logged in as {currentuser.username}</p> */}
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          
          {
            wms.map((wm, i) => {     
              console.log("Entered");                 
              // Return the element. Also pass key     
              return (<PostCard key={wm.id} wm={wm} users={users} />) 
            })
          }
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
