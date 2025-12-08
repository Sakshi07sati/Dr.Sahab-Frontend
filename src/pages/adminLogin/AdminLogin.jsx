import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../global_redux/features/auth/authThunk";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const res = await dispatch(loginAdmin({ email, password }));

  //   if (res.meta.requestStatus === "fulfilled") {
  //     toast.success("Login successful!");
  //     navigate("/admin");
  //   } else {
  //     toast.error(res.payload || "Invalid email or password!");
  //   }
  // };

  const handleLogin = async (e) => {
  e.preventDefault();

  const res = await dispatch(loginUser({ email, password }));

  if (res.meta.requestStatus === "fulfilled") {
    const role = res.payload.role;

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "clinic") {
      navigate("/clinic");
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-5">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
