import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { dispatch } = useContext(CartContext)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
  }, [id])

  if (!product) return <div>Loading...</div>

  const addToCart = () => {
    // Assuming each product has an "id", "name", and "price" field
    dispatch({ type: 'ADD_ITEM', payload: { id: product._id, name: product.name, price: product.price } })
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.stock}</p>
      <p>Description: {product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetails