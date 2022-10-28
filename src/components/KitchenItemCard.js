import React from 'react'

export default function KitchenItemCard(props) {

  function handleClick () {
    props.itemstatus = "not needed"
  }
  
  return (
    <div className={props.type} style={ {display: props.itemstatus === "needed" ? 'block' : 'none' }} onClick={handleClick} >
        <img src={props.imgsrc} alt={props.alttext} />
        <p>{props.itemname}</p>
        {/* <p>{props.itemstatus}</p> */}
    </div>
  )
}