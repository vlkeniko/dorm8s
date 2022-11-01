import React from "react";
import Balance from "../components/Balance";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";
import AvailableMachines from "../components/AvailableMachines";
import ProfileNav from "../components/ProfileNav";

export default function HomePage() {
  /* if loggedinbalance is missing from localStorage for whatever reason
  setItem() will convert the undefined value to a string,
  so we need to check for case too with the !== "undefined" part */
  let balance =
    localStorage.getItem("loggedinbalance")?.length > 0 &&
    localStorage.getItem("loggedinbalance") !== "undefined"
      ? JSON.parse(localStorage.getItem("loggedinbalance"))
      : "N/A";

  return (
    <>
      <ProfileNav />
      <h1 className="header-title">
        {JSON.parse(localStorage.getItem("loggedinname"))
          ? `Hello, ${JSON.parse(localStorage.getItem("loggedinname"))}`
          : ""}
      </h1>
      <Balance balance={balance} />
      <Calendar />
      <AvailableMachines />
      <Nav />
    </>
  );
}