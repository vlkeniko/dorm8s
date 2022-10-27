import React from 'react'

export default function Transactions() {
  return (
    <div className='transactions'>

      <div className='transaction'>
        <h3 className='transaction-name'>Kitchen tax paid</h3>
        <p className='transaction-date'>12.10.2022</p>
        <p className='transaction-amount'>-50</p>
        <hr/>
      </div>

      <div className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>8.10.2022</p>
        <p className='transaction-amount'>+36</p>
        <hr/>
      </div>

      <div className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>23.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr/>
      </div>

      <div className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>20.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr/>
      </div>

      
    </div>
  )
}
