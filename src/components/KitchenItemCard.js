import React from "react";

export default function KitchenItemCard(props) {
  return (
    <div
      id={props.itemid + "needed"}
      className={props.className}
      style={{ display: props.itemstatus === "not needed" ? "none" : "block" }}
      onClick={() => {
        document.getElementById(props.itemid + "needed").style.display = "none";
        document.getElementById(props.itemid + "stock").style.display = "block";
      }}
    >
      <img className={props.type} src={props.imgsrc} alt={props.alttext} />
      <p>{props.itemname}</p>
    </div>
  );
}