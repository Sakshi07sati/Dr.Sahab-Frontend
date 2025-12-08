import { Navigate } from "react-router-dom";

const ProtectedClinicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "clinic") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedClinicRoute;
