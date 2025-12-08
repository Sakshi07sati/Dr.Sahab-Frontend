import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axiosBase";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async ({ name, phone, dob, bookingDate, message, location }, { rejectWithValue }) => {
    try {
      const res = await api.post("/user-bookings", {
        name,
        phone,
        dob,
        bookingDate,
        message,
        location
      });

      toast.success("Booking created successfully!");
      return res.data;
    } catch (error) {
      const errMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);


export const getAllBookings = createAsyncThunk(
  "booking/getAllBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/user-bookings");  // token already attached by axiosBase
      console.log("All Bookings Response:", res.data);
      return res.data;  // returns list of bookings
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to fetch bookings!";
      console.error("Fetch Bookings Error:", errMsg);
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);


// Add these to your existing bookingThunk.js file

// Get Available Clinics (clinics not on off-day today)
export const getAvailableClinics = createAsyncThunk(
  "booking/getAvailableClinics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic/available");
      console.log("Available Clinics Response:", res.data); // Debug log
      
      // Return the clinics array, handle both response formats
      return Array.isArray(res.data) 
        ? res.data 
        : res.data?.clinics || [];
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to fetch available clinics!";
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);

// Assign Clinic to Booking
export const assignClinicToBooking = createAsyncThunk(
  "booking/assignClinicToBooking",
  async ({ bookingId, clinicId }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/clinic/booking/${bookingId}`, { clinicId });
      toast.success("Clinic assigned successfully!");
      return res.data; // returns updated booking
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to assign clinic!";
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);
