import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AdminLayout from "../admin/layout/AdminLayout";
import HomePage from "../pages/home/components/HomePage";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import About from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
    
        {/* <Route path="products/edit/:id" element={<EditProduct />} /> */}
      <Route
        path="/admin"
        element={
          // <AdminProtectedRoute>
            <AdminLayout />
          // </AdminProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/admin/users" element={<HomePage />} />
        
        {/* <Route path="products/edit/:id" element={<EditProduct />} /> */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
