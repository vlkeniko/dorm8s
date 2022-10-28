import React from "react";
import Nav from "../components/Nav";
import Balance from "../components/Balance";
import FinanceButtons from "../components/FinanceButtons";
import Transactions from "../components/Transactions";
export default function FinancesPage() {
  return (
    <>
      <h1 class="header-title">Finances</h1>
      <Balance/>
      <Transactions/>
      <FinanceButtons/>
      <Nav />
    </>
  );
}
