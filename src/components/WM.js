import React from "react";
import Machine from "../components/WM/Machine";
import { LaundryData } from "../laundry";
//Lajos, Razvan
export default function WM() {
  return (
    <div className="machines">
      {/* We import the laundry data from a static JSON
      then iterate through each machine to make a component out of each one */}
      {LaundryData.map((machine, i) => {
        return (
          <Machine
            key={machine.type + machine.no}
            no={machine.no}
            type={machine.type}
            available={machine.available}
            RemainingTime={machine.RemainingTime}
          />
        );
      })}
    </div>
  );
}