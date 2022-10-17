import React from "react";

export default function Balance() {
  const getBalance = () => {
    fetch(
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users/id/balance"
    ).then(function (response) {
      return response.json();
    });
  };

  return (
    <>
      <div className="balance">
        <h3>Your balance:</h3>
        <h2>{getBalance}</h2>
      </div>
    </>
  );
}
