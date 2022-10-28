import React from 'react'

export default function AvailableMachines() {
  return (
    <div className='availablemachines'>
        <div className='availablewms'>
            <img src="../pictures/washing-machine.png"></img>
            <span>Available Washing Machines</span>
        </div>
        <div className='availabledryers'>
          <img src="../pictures/dryer.png"></img>
        <span>Available Dryers</span>
        </div>
    </div>
  )
}
