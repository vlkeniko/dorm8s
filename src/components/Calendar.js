import React from "react";

export default function Calendar() {
  return (
    // <div className="calendar">
    //   <div className="event">
    //     <div className="date">
    //       <div className="day">11</div>
    //       <div className="month">OCT</div>
    //     </div>
    //     <div className="event-title">Kitchen Meeting</div>
    //   </div>

    //   <div className="event">
    //     <div className="date">
    //       <div className="day">22</div>
    //       <div className="month">OCT</div>
    //     </div>
    //     <div className="event-title">Cleaning duty</div>
    //   </div>

    //   <div className="event">
    //     <div className="date">
    //       <div className="day">30</div>
    //       <div className="month">OCT</div>
    //     </div>
    //     <div className="event-title">Kitchen tax due date</div>
    //   </div>
    // </div>

    <div class="calendar-wrapper">
      <ul class="calendar-flex calendar-cards">
        <li>
          <div class="date-nr">
            <h1 class="nr">17</h1>
            <h4 class="vertical-date">OCT</h4>
          </div>
          <p>Kitchen meeting</p>
        </li>

        <li>
          <div class="date-nr">
            <h1 class="nr">21</h1>
            <h4 class="vertical-date">NOV</h4>
          </div>
          <p>Cleaning week</p>
        </li>

        <li>
          <div class="date-nr">
            <h1 class="nr">10</h1>
            <h4 class="vertical-date">DEC</h4>
          </div>
          <p>Tour de chambre</p>
        </li>
      </ul>
    </div>
  );
}
