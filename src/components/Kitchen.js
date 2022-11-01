import { useEffect, useState, React } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions.js";
import KitchenItemCard from "./KitchenItemCard.js";
import KitchenItemCardNotNeeded from "./KitchenItemCardNotNeeded.js";
//Eniko, Lajos
export default function Kitchen() {
  const [items, setItems] = useState([]);

  /* Getting items data from our endpoint */
  async function getItems() {
    const url = `${endpoint}/Items.json`;
    let result = await getFromEndpoint(url);
    setItems(result);
    localStorage.setItem("items", JSON.stringify(result));
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="kitchen-cards">
      <h2>To buy</h2>
      <div className="card-container">
        {/* Iterating through each item to make a component out of each one */}
        {items.map((item, i) => {
          return (
            <KitchenItemCard
              key={item.id}
              itemid={item.id}
              itemstatus={item.status}
              itemname={item.name}
              alttext={item.name}
              type="kitchenItems-buttons"
              imgsrc={require(`../pictures/${item.name}.png`)}
            />
          );
        })}
      </div>
      <h2>In house</h2>
      <div className="card-container">
        {/* Iterating through each item to make a component out of each one */}
        {items.map((item, i) => {
          return (
            <KitchenItemCardNotNeeded
              key={item.id}
              itemid={item.id}
              itemstatus={item.status}
              itemname={item.name}
              alttext={item.name}
              type="kitchenItems-buttons"
              imgsrc={require(`../pictures/${item.name}.png`)}
            />
          );
        })}
      </div>
    </div>
  );
}