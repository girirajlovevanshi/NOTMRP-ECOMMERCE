import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { state, dispatch } = useContext(CartContext)

  return (
    <div>
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} 
              <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
    </div>
  )
}

export default Cart