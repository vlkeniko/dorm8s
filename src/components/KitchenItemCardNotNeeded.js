import React from "react";


export default function KitchenItemCardNotNeeded(props) {

  


  function handleClick() {
    //change the item status

      //then publishing it to the database

      //then refresh the page
      window.location.reload(false);
    }



  return (
    <div
      className={props.type}
      style={{ display: props.itemstatus === "needed" ? "none" : "block" }}
      onClick={handleClick}
    >
      <img src={props.imgsrc} alt={props.alttext} />
      <p>{props.itemname}</p>
      {/* <p>{props.itemstatus}</p> */}
    </div>
  );
}
