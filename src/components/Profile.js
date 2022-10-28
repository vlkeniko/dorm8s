import React from "react";
import profile from "../pictures/profile.png"

export default function Profile() {
/*   const getName = () => {
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
 */
  return (
    <div className="profile-information">
      <div className="profile-image">
        <img className="profile-image" src={profile} alt="profile"></img>
      </div>
      <div className="profile-text">
 {/*        <h1>{getName}</h1>
        <h2>{getAddress}</h2>
        <h3>{getLeaseNumber}</h3> */}
        <h1>Natalia B.</h1>
        <h3>Denmarkvej 34</h3>
        <h3>123-1231234</h3>
      </div>
    </div>
  );
}
