import React from "react";

export default function TransactionsCard(props) {
  return (
    <div className="transaction">
    <h3 className={props.title}>q</h3>
    <p className={props.date}></p>
    <p className={props.amount}></p>
    <hr/>
  </div>
  );
}
