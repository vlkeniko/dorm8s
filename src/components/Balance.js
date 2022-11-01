import React from "react";

export default function Balance(props) {
  return (
    <>
      <div className="balance">
        <h3>Account balance</h3>
        <h2 className="amount">+{props.balance} kr.</h2>
      </div>
    </>
  );
}