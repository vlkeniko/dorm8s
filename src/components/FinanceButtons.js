import React from 'react'
export default function FinanceButtons() {

  return (
    <div>
      <button className="finance-button">Pay kitchen tax</button>
      
      {/* Hiding the file input under the "Add receipt" button */}
      <input type="file" accept="image/*" id="fileUpload" capture="camera" style={{display: "none"}} />
      <button className="finance-button" id="btn" value="Add receipt" onClick={() => document.getElementById('fileUpload').click()} >Add receipt</button>
    </div>
  )
}
