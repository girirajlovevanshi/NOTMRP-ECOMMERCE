import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function CategoryPage() {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products?category=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [id])

  return (
    <div>
      <h2>Products in Category</h2>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            <Link to={`/product/${prod._id}`}>
              {prod.name} - ${prod.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryPage