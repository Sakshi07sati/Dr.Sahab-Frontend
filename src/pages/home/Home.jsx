import React from 'react'
import Navbar from '../../components/common/Navbar'
import HomePage from './components/HomePage'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import Footer from '../../components/common/Footer'
import AboutSection from './components/AboutSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <AboutSection/>
        <BeforeAfterSlider />
        <Footer/>
        {/* <HomePage/> */}
    </div>
  )
}

export default Home