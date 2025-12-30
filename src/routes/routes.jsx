import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AdminLayout from "../admin/layout/AdminLayout";
import HomePage from "../pages/home/components/HomePage";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import About from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";
import Services from "../pages/home/components/Services";
import ServiceDetail from "../pages/Services/componets/ServiceDetail";
import AdminLogin from "../pages/adminLogin/AdminLogin";
import AllBookings from "../admin/pages/bookings/AllBookings";
import ProtectedAdminRoute from "../components/common/ProtectedAdminRoute";
import CreateClinic from "../admin/pages/clinicProfile/CreateClinic";
import AllClinics from "../admin/pages/clinicProfile/AllClinics";
import EditClinic from "../admin/pages/clinicProfile/EditClinic";
import ProtectedClinicRoute from "../components/common/ProtectedClinicRoute";
import ClinicLayout from "../clinic-dashboard/layout/ClinicLayout";
import ClinicBookings from "../clinic-dashboard/pages/clinicBooking/AcceptedAppointments";
// import AssignedAppointments from "../clinic-dashboard/pages/clinicBooking/AssignedAppointments";
import ClinicProfile from "../clinic-dashboard/pages/profile/ClinicProfile";
import ClinicOffDaysPage from "../clinic-dashboard/pages/ClinicCelendar.jsx/ClinicOffDaysPage";
import WeeklyOffPage from "../clinic-dashboard/pages/ClinicCelendar.jsx/components/WeeklyOffPage";
import AssignedAppointments from "../admin/pages/bookings/AssignedAppointments";
import CompletedAppointments from "../admin/pages/bookings/CompletedAppointments";
import ClinicDashboard from "../clinic-dashboard/pages/ClinicDashboard/ClinicDashboard";
import AcceptedAppointments from "../clinic-dashboard/pages/clinicBooking/AcceptedAppointments";
import CompletedClinicBookings from "../clinic-dashboard/pages/clinicBooking/CompletedClinicBookings";
import AdminContactList from "../admin/pages/admin-contact/AdminContactList";
import BookingPage from "../pages/Booking-page/BookingPage";
import AppointmentForm from "../pages/home/components/AppointmentForm";
import { SearchCheck } from "lucide-react";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book-appointment" element={<BookingPage />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path ="/services" element ={<Services/>}/>
      
      
    
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/appointment" element={<AppointmentForm/>} />

        {/* <Route path="products/edit/:id" element={<EditProduct />} /> */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        {/* <Route path="/admin/users" element={<HomePage />} /> */}
        <Route path="/admin/bookings" element={<AllBookings />} />
        <Route path="/admin/all-clinics" element={<AllClinics />} />
        <Route path="/admin/create-clinic" element={<CreateClinic />} />
        <Route path="/admin/clinics/edit/:id" element={<EditClinic />} />
        <Route path="/admin/assigned-appointments" element={<AssignedAppointments />} />
        <Route path="/admin/completed-appointments" element={<CompletedAppointments />} />
        <Route path="/admin/contact-list" element={<AdminContactList />} />

        
        {/* <Route path="products/edit/:id" element={<EditProduct />} /> */}
      </Route>

      <Route
        path="/clinic"
        element={
          <ProtectedClinicRoute>
            {/* <AdminLayout /> */}
            <ClinicLayout />
          </ProtectedClinicRoute>
        }
      >
        <Route index element={<ClinicDashboard />} />
        <Route path="/clinic/users" element={<HomePage />} />
        {/* <Route path="/clinic/bookings" element={<ClinicBookings />} /> */}
        {/* <Route path="/clinic/notifications" element={<AssignedAppointments />} /> */}
        <Route path="/clinic/profile" element={<HomePage />} />
        <Route path="/clinic/profile/:id" element={<ClinicProfile />} />

        <Route path="/clinic/off-days" element={<ClinicOffDaysPage />} />
        <Route path="/clinic/weekly-off" element={<WeeklyOffPage />} />
        <Route path="/clinic/accepted-appointments" element={<AcceptedAppointments />} />
        <Route path="/clinic/completed-appointments" element={<CompletedClinicBookings />} />

        {/* <Route path="/clinic/bookings" element={<AllBookings />} />
        <Route path="/clinic/all-clinics" element={<AllClinics />} />
        <Route path="/clinic/create-clinic" element={<CreateClinic />} />
        <Route path="/clinic/clinics/edit/:id" element={<EditClinic />} /> */}
      </Route>

    </Routes>
  );
};

export default AllRoutes;
