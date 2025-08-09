import React from 'react'

const Selector = () => {
    const cost=300;
  return (
    <div>
        <ul>
          <li>Material:
            <select>
              <option>PLA</option>
              <option>Nylon</option>
              <option>Resin</option>
            </select>
          </li>
          <li>Color:
            <select>
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Orange</option>
            </select>
          </li>
          <li>Quantity: <input type="number" min="1" max="10" defaultValue="1" /></li>
          <li>Scale: <input type="number" min="60" max="160" defaultValue="100" /></li>
          <li>Standard:
            <select>
              <option>Standard</option>
              <option>Express</option>
            </select>
          </li>
          <li>Cost: {cost}</li>
          <button className='return'>Add to cart</button>
        </ul>
    </div>
  )
}

export default Selector