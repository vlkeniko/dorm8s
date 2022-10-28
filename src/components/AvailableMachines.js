import React from 'react';
import washingMachine from "../pictures/washing-machine.png";
import dryerMachine from "../pictures/dryer.png";

export default function AvailableMachines() {
  return (
    // <div className='availablemachines'>
    //     <div className='availablewms'>
    //         <img src="../pictures/washing-machine.png" alt="Icon of a washing machine"></img>
    //         <span>Available Washing Machines</span>
    //     </div>
    //     <div className='availabledryers'>
    //       <img src="../pictures/dryer.png" alt="Icon of a dryer machine"></img>
    //       <span>Available Dryers</span>
    //     </div>
    // </div>

    <div class="wm-wrapper">
      <ul class="wm-flex wm-cards">
        <li>
          <div class="wm-icon">
            <img src={washingMachine} alt="Icon of a washing machine" />
          </div>
          <p>Available washing machines</p>

          <div class="notification-circle">
            <div class="notification-text">5</div>
          </div>
        </li>

        <li>
          <div class="notification-circle">
            <div class="notification-text">9</div>
          </div>
          <div class="wm-icon">
            <img src={dryerMachine} alt="Icon of a dryer machine" />
          </div>
          <p>Available dryers</p>
        </li>
      </ul>
    </div>
  );
}
