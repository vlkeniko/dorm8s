import React from 'react'
import { LaundryData } from "src\laundry";

export default function Machine() {
  return (
    <div className='machine'>
        <div className='icon'>
            <img src={require('../../pictures/laundry.png')} alt="Icon with a washing machine"/>
        </div>
        <p className='number'>
            1 {/* db insert */}
        </p>
        <p className='availability'>
            Available {/* db insert */}
        </p>
        <button className='bookbutton'>
            Book {/* available? "book" : getRemainingTime() */}
        </button>
    </div>
  )
}