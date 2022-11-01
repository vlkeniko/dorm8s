import React from "react";

export default function KitchenItemCardNotNeeded(props) {
  return (
    <div
      id={props.itemid + "stock"}
      className={props.type}
      style={{ display: props.itemstatus === "needed" ? "none" : "block" }}
      onClick={() => {
        document.getElementById(props.itemid + "stock").style.display = "none";
        document.getElementById(props.itemid + "needed").style.display =
          "block";
      }}
    >
      <img src={props.imgsrc} alt={props.alttext} />
      <p>{props.itemname}</p>
    </div>
  );
}