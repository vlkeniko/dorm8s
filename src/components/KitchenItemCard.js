import React from 'react'

export default function KitchenItemCard(props) {
  return (
    <div className={props.type} >
        <img src={props.imgsrc} alt={props.alttext} />
        <p>{props.itemname}</p>
    </div>
  )
}