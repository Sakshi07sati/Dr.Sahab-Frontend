import React from 'react'
// import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import ClinicSidebar from '../components/ClinicSidebar'
import ClinicHeader from '../components/ClinicHeader'

// import AdminNav from './components/AdminNav'

const ClinicLayout = () => {
  return (
     <div className="flex min-h-screen">
      {/* Sidebar */}
      <ClinicSidebar />

      {/* Right side content */}
      <div className="flex-1">
        {/* <Navbar /> */}
       <div className='sticky top-0 z-50'>
         <ClinicHeader/>
       </div>
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default ClinicLayout