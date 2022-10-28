import React from 'react'

export default function Machine() {
  return (
    <div className='machine'>
        <div className='icon'>
            <img src={require('../../pictures/laundry.png')} />
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