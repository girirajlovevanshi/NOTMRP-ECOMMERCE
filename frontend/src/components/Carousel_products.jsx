// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

function Carousel_products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axiosInstance.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <>
        {/* Main Container for products */}
        < div className="max-w-7xl mx-auto p-4" >
          {/* Hero Section (optional) */}
          < div className="hero bg-base-200 rounded-lg mb-8" >
            <div className="hero-content text-center p-10">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Explore Our products</h1>
                <p className="py-6">
                  Discover a variety of products from Electronics to Groceries!
                </p>
              </div>
            </div>
          </div >

          {/* Category Heading */}
          < h2 className="text-3xl font-bold mb-6" > Various Products</h2 >

          {/* Categories Grid */}
          < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
            {
              products.map(product => (
                <div
                  key={product._id}
                  className="card shadow-xl hover:shadow-2xl transition"
                >
                  <div className="card-body">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" />

                    <h3 className="card-title">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Shop {product.name}!
                    </p>
                    <Link to={`/products/${product._id}`} className="btn btn-primary mt-4">
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))
            }
          </div >
        </div >
      </>

    </>
  );
}

export default Carousel_products
