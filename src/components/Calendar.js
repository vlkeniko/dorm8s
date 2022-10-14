import React from "react";

export default function Calendar() {
  return (
    <div className="calendar">

      <div className="event">
        <div className="date">
          <div className="day">11</div>
          <div className="month">OCT</div>
        </div>
        <div className="event-title">Kitchen Meeting</div>
      </div>

      <div className="event">
        <div className="date">
          <div className="day">22</div>
          <div className="month">OCT</div>
        </div>
        <div className="event-title">Cleaning duty</div>
      </div>

      <div className="event">
        <div className="date">
          <div className="day">30</div>
          <div className="month">OCT</div>
        </div>
        <div className="event-title">Kitchen tax due date</div>
      </div>

    </div>
  );
}
