import React from 'react'

export default function Transactions() {
  return (
    <ul className='transactions'>

      <li className='transaction'>
        <h3 className='transaction-name'>Kitchen tax paid</h3>
        <p className='transaction-date'>12.10.2022</p>
        <p className='transaction-amount'>-50</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>8.10.2022</p>
        <p className='transaction-amount'>+36</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>23.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>20.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr />
      </li>

      {/* See more button */}

      <input type="checkbox" id="more" name="view more" className="see-more_more-checkbox" /><label className="see-more_more-label" for="more"><span>See more
      </span></label>
      <input type="checkbox" id="more" name="view more" className="see-more_less-checkbox" /><label className="see-more_less-label" for="more"><span>Collapse
      </span></label>

      {/* The rest of transactions */}

      <li className='transaction'>
        <h3 className='transaction-name'>Kitchen tax paid</h3>
        <p className='transaction-date'>12.10.2022</p>
        <p className='transaction-amount'>-50</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>8.10.2022</p>
        <p className='transaction-amount'>+36</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>23.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr />
      </li>

      <li className='transaction'>
        <h3 className='transaction-name'>Reciept 113</h3>
        <p className='transaction-date'>20.9.2022</p>
        <p className='transaction-amount'>+30</p>
        <hr />
      </li>
    </ul>
  )
}
