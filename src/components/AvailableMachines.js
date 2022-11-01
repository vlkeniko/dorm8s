import React from "react";
import washingMachine from "../pictures/washing-machine.png";
import dryerMachine from "../pictures/dryer.png";

export default function AvailableMachines() {
  return (
    <div className="wm-wrapper">
      <ul className="wm-flex wm-cards">
        <li>
          <div className="notification-circle circle-left">
            <div className="notification-text">3</div>
          </div>
          <div className="wm-icon">
            <img src={washingMachine} alt="Icon of a washing machine" id='wash'/>
          </div>
          <p>Available washing machines</p>
        </li>

        <li>
          <div className="notification-circle circle-right">
            <div className="notification-text">1</div>
          </div>
          <div className="wm-icon">
            <img src={dryerMachine} alt="Icon of a dryer machine" />
          </div>
          <p>Available dryers</p>
        </li>
      </ul>
    </div>
  );
}