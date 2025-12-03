import React from 'react'
import Navbar from '../../components/common/Navbar'
import HomePage from './components/HomePage'
import Hero from './components/Hero'
import Services from './components/Services'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        {/* <HomePage/> */}
    </div>
  )
}

export default Home