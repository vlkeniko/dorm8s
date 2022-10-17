import React from "react";

export default function Profile() {
  const getName = () => {
    fetch(
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users/id/name"
    ).then(function (response) {
      return response.json();
    });
  };

  const getAddress = () => {
    fetch(
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users/id/address"
    ).then(function (response) {
      return response.json();
    });
  };

  const getLeaseNumber = () => {
    fetch(
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users/id/leasenum"
    ).then(function (response) {
      return response.json();
    });
  };

  return (
    <div>
      <div className="image-placeholder">
        <p>image placeholder</p>
      </div>
      <div className="information">
        <h1>{getName}</h1>
        <h2>{getAddress}</h2>
        <h3>{getLeaseNumber}</h3>
      </div>
    </div>
  );
}
