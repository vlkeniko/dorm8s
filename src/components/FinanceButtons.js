import React from 'react'
export default function FinanceButtons() {

  return (
    <div>
      <button className="finance-button">Pay kitchen tax</button>
      <button className="finance-button" id="btn">Add reciept</button>
      <input type="file" accept="image/*" capture="camera" for="btn" />

    </div>
  )
}
