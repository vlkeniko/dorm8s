import React from 'react'

export default function KitchenItemCard(props) {

  function handleClick() {
    //changing the status on click
    this.setState({
      itemstatus: "not needed",
    });
    //refresh page
    window.location.reload(false);
  }
  
  return (
    <div className={props.type} style={ {display: props.itemstatus === "needed" ? 'block' : 'none' }} onClick={handleClick} >
        <img src={props.imgsrc} alt={props.alttext} />
        <p>{props.itemname}</p>
        {/* <p>{props.itemstatus}</p> */}
    </div>
  )
}