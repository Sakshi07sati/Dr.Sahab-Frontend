import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import PageTitle from '../../components/common/PageTitle'
import DentalServicesAccordion from './components/DentalServicesAccordion'
import DentistTestimonials from '../home/components/DentistTestimonials'
import AboutSection from './components/AboutSection'
import ClientTestimonials from './components/ClintTestimonials'

const About = () => {
  return (
    <div>
      <Navbar/>
      <PageTitle pageName={"About Us"} pageRoute={"Home / About Us"}/>
      <AboutSection/>
      <DentalServicesAccordion/>
      <ClientTestimonials/>
      <DentistTestimonials/>
      <Footer/>
    </div>
  )
}

export default About