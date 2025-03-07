import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Carousel_categroies from '../components/Carousel_categroies'
import Carousel_products from '../components/Carousel_products'

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Carousel_categroies></Carousel_categroies>
            <Carousel_products></Carousel_products>
        </div>
    )
}

export default Home
