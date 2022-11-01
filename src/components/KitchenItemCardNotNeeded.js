import React from "react";
import handleClick from "./Kitchen";

export default function KitchenItemCardNotNeeded(props) {
  return (
    <div
      id={props.itemid + "stock"}
      className={props.type}
      style={{ display: props.itemstatus === "needed" ? "none" : "block" }}
      onClick={() => {
        console.log(props.itemid + "stock");
        document.getElementById(props.itemid + "stock").style.display = "none";
        document.getElementById(props.itemid + "needed").style.display = "block";
      }}
    >
      <img src={props.imgsrc} alt={props.alttext} />
      <p>{props.itemname}</p>
      {/* <p>{props.itemstatus}</p> */}
    </div>
  );
}
