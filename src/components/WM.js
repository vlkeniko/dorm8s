import React from 'react'
import Machine from '../components/WM/Machine'
import { LaundryData } from '../laundry'

export default function WM() {
  return (
    <div className='machines'>
      {LaundryData.map((machine, i) => {
          // Return the element. Also pass key
          console.log(machine);
          return <Machine no={machine.no} type={machine.type} available={machine.available} RemainingTime={machine.RemainingTime} />;
        })}
    </div>
  )
}
