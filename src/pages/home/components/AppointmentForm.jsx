import React, { useState,useEffect } from "react";
import { CartoonButton } from "../../../components/ui/cartoon-button";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../../global_redux/features/booking/bookingThunk";
// import { createBooking } from "../../../redux/features/booking/bookingThunk";
import { resetBookingSucess } from "../../../global_redux/features/booking/bookingSlice";

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const { loading,success = false } = useSelector((state) => state.booking) || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    bookingDate: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map UI form fields → backend fields
    const payload = {
      name: formData.name,
      phone: formData.phone,
      dob: formData.dob,
      bookingDate: formData.bookingDate,
      message: formData.message,
      location: formData.address, // backend wants "location"
    };

    dispatch(createBooking(payload));
  };
//form reset after submit//
   useEffect(()=>{
if (success){
  setFormData({
     name: "",
    phone: "",
    dob: "",
    bookingDate: "",
    address: "",
    message: "",
  });
  
  dispatch(resetBookingSucess());
}
  },[success]);

  return (
    <div className="bg-[#f4f4f4c0] max-w-7xl mx-auto h-full backdrop-blur-xl rounded-3xl p-8 shadow-2xl overflow-y-auto ">
      <h2 className="text-2xl font-bold text-black mb-4">Book Your Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your phone"
              required
            />
          </div>
        </div>

        {/* DOB, Booking Date and Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Booking Date
            </label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your address"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-black text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            placeholder="Tell us about your concerns..."
          />
        </div>

        {/* Submit Button */}
        <CartoonButton
          label={loading ? "Booking..." : "Book Appointment"}
          className="w-full bg-primary text-white font-bold py-3 rounded-xl transition-all shadow-lg"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default AppointmentForm;
