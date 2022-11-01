import React from "react";
//Lajos
export default function Machine(props) {
  function changeIconColor(id) {
    console.log(id);
    console.log(document.getElementById(id).style);
    document.getElementById(id).style.backgroundColor = "#E48B94";
    document.getElementById("availability" + id).innerHTML = "Reserved";
  }

  return (
    /* Depending on each machines availability we set various attributes on the components */
    <div className="machine">
      <div
        className={
          /* Here we set the icon color */
          props.available === "yes" ? "icon available" : "icon unavailable"
        }
        id={(props.type === "wash" ? "wm" : "dm") + props.no}
      >
        <img
          src={require("../../pictures/laundry-white.png")}
          alt="Icon with a washing machine"
        />
      </div>
      <p className="number">{props.no}</p>
      <p id={"availability" + (props.type === "wash" ? "wm" : "dm") + props.no} className="availability">
        {/* Here we set the text */}
        {props.available === "yes" ? "Available" : "Time left" }
      </p>

      <button
        /* Here we set the button's styling and an onClick() alert if needed */
        className={
          props.available === "yes" ? "bookbutton" : "bookbutton-unavailable"
        }
        onClick={() =>
          props.available === "no"
            ? alert("You can't book this machine yet!")
            : changeIconColor((props.type === "wash" ? "wm" : "dm") + props.no)
        }
      >
        {/* Here we set the button text */}
        {props.available === "yes" ? "book" : props.RemainingTime}
      </button>
    </div>
  );
}
