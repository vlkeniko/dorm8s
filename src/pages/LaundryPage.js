import React from "react";
import Nav from "../components/Nav";
import WM from "../components/WM";
import PreviousReservation from "../components/PreviousReservation";
import ProfileNav from "../components/ProfileNav";

export default function LaundryPage() {
  return (
    <>
      <ProfileNav />
      <h1 className="header-title">Laundry</h1>
      <PreviousReservation />
      <WM />
      <Nav />
    </>
  );
}