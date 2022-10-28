import React from 'react'

export default function KitchenItemCardNotNeeded(props) {

  function handleClick () {
    //changing the status on click
    props.itemstatus = "needed"
  }

  //then publishing it to the database
  
  return (
    <div className={props.type} style={{display: props.itemstatus === "needed" ? 'none' : 'block' }} onClick={handleClick} >
        <img src={props.imgsrc} alt={props.alttext} />
        <p>{props.itemname}</p>
        {/* <p>{props.itemstatus}</p> */}
    </div>
  )
}