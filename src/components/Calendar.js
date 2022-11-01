import React from "react";
//Giulia
export default function Calendar() {
  return (
    <div className="calendar-wrapper">
      <ul className="calendar-flex calendar-cards">
        <li>
          <div className="date-nr">
            <h1 className="nr">17</h1>
            <h4 className="vertical-date">OCT</h4>
          </div>
          <p>Kitchen meeting</p>
        </li>

        <li>
          <div className="date-nr">
            <h1 className="nr">21</h1>
            <h4 className="vertical-date">NOV</h4>
          </div>
          <p>Cleaning week</p>
        </li>

        <li>
          <div className="date-nr">
            <h1 className="nr">10</h1>
            <h4 className="vertical-date">DEC</h4>
          </div>
          <p>Tour de chambre</p>
        </li>
      </ul>
    </div>
  );
}