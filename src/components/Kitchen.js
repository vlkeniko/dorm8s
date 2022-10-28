import { useEffect, useState, React } from "react";
import { endpoint, getFromEndpoint } from '../utils/database_functions.js';
import Finances from "../pictures/finances.png";
import KitchenItemCard from "./KitchenItemCard.js";

export default function Kitchen() {



  const [items, setItems] = useState([]);
 
  /* Getting items data */
  async function getItems() {
    const url = `${endpoint}/Items.json`;
    let result = await getFromEndpoint(url);
    setItems(result);
  }

  useEffect(() => {
    getItems();

  }, []);


  return (
    <div className="kitchen-cards">
      <h2>To buy</h2>
      <div className="card-container">
        {items.map((item, i) => {


          // Return the element. Also pass key
          console.log(item.status)

          return <KitchenItemCard key={item.id} itemstatus={item.status} itemname={item.name} alttext={item.name} type="to-buy-card" imgsrc={Finances} />
          /* return <PostCard key={wm.id} wm={wm} users={users} />; */
        })}

        
      </div>
     <h2>In house</h2>
     <div className="card-container">
        {items.map((item, i) => {
          // Return the element. Also pass key
          return <KitchenItemCard key={item.id} itemstatus={item.status} itemname={item.name} alttext={item.name} type="to-buy-card" imgsrc={Finances} />
          /* return <PostCard key={wm.id} wm={wm} users={users} />; */
        })}

        
      </div>

       {/* <h3>Groceries</h3>
      <div className="card-container">
        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>
      </div>
      <h3>Other</h3>
      <div className="card-container">
        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>
      </div> */}
    </div>
  );
}
