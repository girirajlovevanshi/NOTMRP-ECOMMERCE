// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

function Carousel_categroies() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axiosInstance.get('/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      {/* Main Container for Categories */}
      < div className="max-w-7xl mx-auto p-4" >
        {/* Hero Section (optional) */}
        < div className="hero bg-base-200 rounded-lg mb-8" >
          <div className="hero-content text-center p-10">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Explore Our Categories</h1>
              <p className="py-6">
                Discover a variety of products from Electronics to Groceries!
              </p>
            </div>
          </div>
        </div >

        {/* Category Heading */}
        < h2 className="text-3xl font-bold mb-6" > Product Categories</h2 >

        {/* Categories Grid */}
        < div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5" >
          {
            categories.map(cat => (
              <div
                key={cat._id}
                className="card shadow-xl hover:shadow-2xl transition"
              >
                <div className="card-body ">

                  <Link to={`/category/${cat._id}`} className="btn btn-primary mt-4 bg-green-50	text-lime-700 ">
                    <h3 className="card-title ">{cat.name}</h3>
                  </Link>
                </div>
              </div>
            ))
          }
        </div >
      </div >
    </>
  );
}

export default Carousel_categroies
