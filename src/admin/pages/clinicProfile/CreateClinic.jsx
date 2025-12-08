import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createClinic } from "../../../global_redux/features/clinic/clinicThunk";

const CreateClinic = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.clinic);

  const [formData, setFormData] = useState({
    clinic_name: "",
    dentist_name: "",
    number: "",
    location: "",
    address: "",
    clinic_email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --------------------------
  // VALIDATION LOGIC
  // --------------------------
  const validateForm = () => {
    const { clinic_name, dentist_name, number, location, address, clinic_email, password } =
      formData;

    if (!clinic_name || clinic_name.length < 3) {
      toast.error("Clinic name must be at least 3 characters");
      return false;
    }

    if (!dentist_name || dentist_name.length < 3) {
      toast.error("Dentist name must be at least 3 characters");
      return false;
    }

    if (!number || number.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      return false;
    }

    if (!location || location.length < 2) {
      toast.error("Location must be at least 2 characters");
      return false;
    }

    if (!address || address.length < 5) {
      toast.error("Address must be at least 5 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!clinic_email || !emailRegex.test(clinic_email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const res = await dispatch(createClinic(formData));

    if (res.meta.requestStatus === "fulfilled") {
      toast.success("Clinic created successfully!");
      setFormData({
        clinic_name: "",
        dentist_name: "",
        number: "",
        location: "",
        address: "",
        clinic_email: "",
        password: "",
      });
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Clinic</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="clinic_name"
          placeholder="Clinic Name"
          value={formData.clinic_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="dentist_name"
          placeholder="Dentist Name"
          value={formData.dentist_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="City/Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="clinic_email"
          placeholder="Clinic Email"
          value={formData.clinic_email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Clinic"}
        </button>
      </form>
    </div>
  );
};

export default CreateClinic;
