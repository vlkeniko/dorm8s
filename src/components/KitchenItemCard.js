import React from "react";
//Lajos, Eniko
export default function KitchenItemCard(props) {
  return (
    <div
      id={props.itemid + "needed"}
      style={{ display: props.itemstatus === "not needed" ? "none" : "block" }}
      onClick={() => {
        document.getElementById(props.itemid + "needed").style.display = "none";
        document.getElementById(props.itemid + "stock").style.display = "block";
      }}
    >
      <img className={props.type} src={props.imgsrc} alt={props.alttext} />
      <p style={{color: "#5A6EAB", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", textAlign: "center" }}>
        {props.itemname}
      </p>
    </div>
  );
}