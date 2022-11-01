import React from "react";
import Nav from "../components/Nav";
import Balance from "../components/Balance";
import FinanceButtons from "../components/FinanceButtons";
import Transactions from "../components/Transactions";
import ProfileNav from "../components/ProfileNav";

export default function FinancesPage() {
  let balance =
    localStorage.getItem("loggedinbalance")?.length > 0
      ? JSON.parse(localStorage.getItem("loggedinbalance"))
      : "N/A";

  return (
    <>
      <ProfileNav />
      <h1 className="header-title">Finances</h1>
      <Balance balance={balance} />
      <Transactions />
      <FinanceButtons />
      <Nav />
    </>
  );
}