// src/pages/Home.jsx
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
    <div className="max-w-7xl mx-auto p-4">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-lg mb-8">
        <div className="hero-content text-center p-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Explore Our Categories</h1>
            <p className="py-6">
              Discover a variety of products from Electronics to Groceries!
            </p>
          </div>
        </div>
      </div>

      {/* Category Heading */}
      <h2 className="text-3xl font-bold mb-6">Product Categories</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div
            key={cat._id}
            className="card shadow-xl hover:shadow-2xl transition"
          >
            <div className="card-body">
              <h3 className="card-title">{cat.name}</h3>
              <p className="text-sm text-gray-600">
                Shop amazing deals in {cat.name}!
              </p>
              <Link to={`/category/${cat._id}`} className="btn btn-primary mt-4">
                View Category
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
