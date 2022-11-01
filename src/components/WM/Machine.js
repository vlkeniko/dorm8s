import React from "react";

export default function Machine(props) {
  return (
    /* Depending on each machines availability we set various attributes on the components */
    <div className="machine">
      <div
        className={
          /* Here we set the icon color */
          props.available === "yes" ? "icon available" : "icon unavailable"
        }
      >
        <img
          src={require("../../pictures/laundry.png")}
          alt="Icon with a washing machine"
        />
      </div>
      <p className="number">{props.no}</p>
      <p className="availability">
        {/* Here we set the text */}
        {props.available === "yes" ? "Available" : "Time left"}
      </p>

      <button
        /* Here we set the button's styling and an onClick() alert if needed */
        className={props.available === "yes" ? "bookbutton" : "finance-button"}
        onClick={() =>
          props.available === "no"
            ? alert("You can't book this machine yet!")
            : ""
        }
      >
        {/* Here we set the button text */}
        {props.available === "yes" ? "book" : props.RemainingTime}
      </button>
    </div>
  );
}