import React from 'react'

export default function Machine( props ) {
  return (
    <div className='machine'>
        <div className={props.available === "yes" ? "icon available" : "icon unavailable"}>
            <img src={require('../../pictures/laundry.png')} alt="Icon with a washing machine"/>
        </div>
        <p className='number'>
            {props.no/* db insert */}
        </p>
        <p className='number'>
            {props.available === "yes" ? "Available" : "Time left" /* db insert */}
        </p>
        
        <button className={props.available === "yes" ? "bookbutton" : "finance-button"} onClick={() => props.available === "no" ? alert("You can't book this machine yet!") : ""}>
            {/* Book */} {props.available === "yes" ? "book" : props.RemainingTime}
        </button>
    </div>
  )
}