import React from 'react'

export default function KitchenItemCard(props) {
  
  return (
    <div className={props.type} style={{display: props.itemstatus === "needed" ? 'block' : 'none' }} >
        <img src={props.imgsrc} alt={props.alttext} />
        <p>{props.itemname}</p>
        {/* <p>{props.itemstatus}</p> */}
    </div>
  )
}