import React from "react";
import handleClick from "./Kitchen";

export default function KitchenItemCard(props) {
  /* function handleClick(id) {
    let items = JSON.parse(localStorage.getItem('items'));
    items.forEach(item => {
      console.log(id)
      if (item.id === id && item.status === "needed") {
        item.status = "not needed";
      }
    });
    console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
    //window.location.reload(false);
  } */

  return (
    <div
      id={props.itemid + "needed"}
      className={props.type}
      style={{ display: props.itemstatus === "not needed" ? "none" : "block" }}
      onClick={() => {
        console.log(props.itemid + "needed");
        document.getElementById(props.itemid + "needed").style.display = "none";
        document.getElementById(props.itemid + "stock").style.display = "block";
      }}
    >
      <img src={props.imgsrc} alt={props.alttext} />
      <p>{props.itemname}</p>
      {/* <p>{props.itemstatus}</p> */}
    </div>
  );
}
