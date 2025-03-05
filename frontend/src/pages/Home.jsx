import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat._id}>
            <Link to={`/category/${cat._id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home