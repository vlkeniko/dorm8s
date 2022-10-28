import React from "react";

export default function Calendar() {
  return (
    // <div classNameName="calendar">
    //   <div classNameName="event">
    //     <div classNameName="date">
    //       <div classNameName="day">11</div>
    //       <div classNameName="month">OCT</div>
    //     </div>
    //     <div classNameName="event-title">Kitchen Meeting</div>
    //   </div>

    //   <div classNameName="event">
    //     <div classNameName="date">
    //       <div classNameName="day">22</div>
    //       <div classNameName="month">OCT</div>
    //     </div>
    //     <div classNameName="event-title">Cleaning duty</div>
    //   </div>

    //   <div classNameName="event">
    //     <div classNameName="date">
    //       <div classNameName="day">30</div>
    //       <div classNameName="month">OCT</div>
    //     </div>
    //     <div classNameName="event-title">Kitchen tax due date</div>
    //   </div>
    // </div>

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
