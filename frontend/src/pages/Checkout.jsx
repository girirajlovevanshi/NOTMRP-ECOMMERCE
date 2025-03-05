import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Checkout() {
  const { state } = useContext(CartContext)
  const total = state.items.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>
      <h2>Checkout</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {state.items.map(item => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          {/* Add order placement functionality here */}
        </div>
      )}
    </div>
  )
}

export default Checkout