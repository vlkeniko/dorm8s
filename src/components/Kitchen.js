import { useEffect, useState, React } from "react";
import { endpoint, getFromEndpoint } from '../utils/database_functions.js';
import Finances from "../pictures/finances.png";
import KitchenItemCard from "./KitchenItemCard.js";
import KitchenItemCardNotNeeded from "./KitchenItemCardNotNeeded.js";

export function handleClick(id, mode) {
  document.getElementById(id).style.display = mode;
}

export default function Kitchen() {
  //TODO
  /* if needed, goes to correct one
  if not needed, goes to correct one
  because of rerendering
  so the only thing that needs to change
  in the state is the status of the item 
  OR
  instead of using a state
  save it into localStorage and manipulate there
  and cause a rerender somehow */

  const [items, setItems] = useState([]);
 
  /* Getting items data */
  async function getItems() {
    const url = `${endpoint}/Items.json`;
    let result = await getFromEndpoint(url);
    setItems(result);
    localStorage.setItem('items', JSON.stringify(result));
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

          return /* item.status === "needed" ? */ <KitchenItemCard key={item.id} itemid={item.id} itemstatus={item.status} itemname={item.name} alttext={item.name} type="to-buy-card" imgsrc={Finances} />;
        })}

        
      </div>
     <h2>In house</h2>
     <div className="card-container">
        {items.map((item, i) => {
          // Return the element. Also pass key
          return /* item.status === "not needed" ? */ <KitchenItemCardNotNeeded key={item.id} itemid={item.id} itemstatus={item.status} itemname={item.name} alttext={item.name} type="to-buy-card" imgsrc={Finances} />;
        })}

      </div>
    </div>
  );
}
