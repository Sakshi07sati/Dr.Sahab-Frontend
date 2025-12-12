import React from 'react'
import Navbar from '../../components/common/Navbar'
import AppointmentForm from '../home/components/AppointmentForm'
import Footer from '../../components/common/Footer'

const BookingPage = () => {
  return (
    <div>
        <Navbar/>
        <AppointmentForm/>
        <Footer/>
    </div>
  )
}

export default BookingPage