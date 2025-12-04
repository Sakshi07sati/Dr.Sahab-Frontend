import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import PageTitle from '../../components/common/PageTitle'
import DentalServicesAccordion from './components/DentalServicesAccordion'

const About = () => {
  return (
    <div>
      <Navbar/>
      <PageTitle pageName={"About Us"} pageRoute={"Home / About Us"}/>
      <DentalServicesAccordion/>
      <Footer/>
    </div>
  )
}

export default About