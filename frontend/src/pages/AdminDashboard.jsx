import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AdminDashboard() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            {/* Add edit and delete controls here */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboard