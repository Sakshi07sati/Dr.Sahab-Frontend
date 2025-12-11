import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AdminLayout from "../admin/layout/AdminLayout";
import HomePage from "../pages/home/components/HomePage";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import About from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";
import ServiceDetail from "../pages/Services/componets/ServiceDetail";
import AdminLogin from "../pages/adminLogin/AdminLogin";
import AllBookings from "../admin/pages/bookings/AllBookings";
import ProtectedAdminRoute from "../components/common/ProtectedAdminRoute";
import CreateClinic from "../admin/pages/clinicProfile/CreateClinic";
import AllClinics from "../admin/pages/clinicProfile/AllClinics";
import EditClinic from "../admin/pages/clinicProfile/EditClinic";
import ProtectedClinicRoute from "../components/common/ProtectedClinicRoute";
import ClinicLayout from "../clinic-dashboard/layout/ClinicLayout";
import ClinicBookings from "../clinic-dashboard/pages/clinicBooking/ClinicBookings";
import AssignedAppointments from "../clinic-dashboard/pages/clinicBooking/AssignedAppointments";
import ClinicProfile from "../clinic-dashboard/pages/profile/ClinicProfile";
import ClinicOffDaysPage from "../clinic-dashboard/pages/ClinicCelendar.jsx/ClinicOffDaysPage";
import WeeklyOffPage from "../clinic-dashboard/pages/ClinicCelendar.jsx/components/WeeklyOffPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
    
    <Route path="/admin/login" element={<AdminLogin />} />

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
        <Route path="/admin/users" element={<HomePage />} />
        <Route path="/admin/bookings" element={<AllBookings />} />
        <Route path="/admin/all-clinics" element={<AllClinics />} />
        <Route path="/admin/create-clinic" element={<CreateClinic />} />
        <Route path="/admin/clinics/edit/:id" element={<EditClinic />} />

        
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
        <Route index element={<Dashboard />} />
        <Route path="/clinic/users" element={<HomePage />} />
        <Route path="/clinic/bookings" element={<ClinicBookings />} />
        <Route path="/clinic/notifications" element={<AssignedAppointments />} />
        <Route path="/clinic/profile" element={<HomePage />} />
        <Route path="/clinic/profile/:id" element={<ClinicProfile />} />

        <Route path="/clinic/off-days" element={<ClinicOffDaysPage />} />
        <Route path="/clinic/weekly-off" element={<WeeklyOffPage />} />

        {/* <Route path="/clinic/bookings" element={<AllBookings />} />
        <Route path="/clinic/all-clinics" element={<AllClinics />} />
        <Route path="/clinic/create-clinic" element={<CreateClinic />} />
        <Route path="/clinic/clinics/edit/:id" element={<EditClinic />} /> */}
      </Route>

    </Routes>
  );
};

export default AllRoutes;
