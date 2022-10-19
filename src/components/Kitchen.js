import React from "react";
import Finances from "../pictures/finances.png";

export default function Kitchen() {
  return (
    <div className="kitchen-cards">
      <h2>To buy</h2>
      <div className="card-container">
        <div className="to-buy-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="to-buy-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="to-buy-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>
      </div>
      <h2>In house</h2>
      <h3>Groceries</h3>
      <div className="card-container">
        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>
      </div>
      <h3>Other</h3>
      <div className="card-container">
        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>

        <div className="in-house-card">
          <img src={Finances} alt="onion" />
          <p>Onion</p>
          <p>!!!</p>
        </div>
      </div>
    </div>
  );
}
