import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import api from "../../../api/axiosBase";

// Clinic → Get all bookings assigned to them
export const getClinicBookings = createAsyncThunk(
  "clinicBookings/getClinicBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic-booking/my-bookings"); // token auto attached
      return res.data; // returns list of clinic-specific bookings
    } catch (error) {
      const err =
        error.response?.data?.message || "Failed to load clinic bookings";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);


export const getAssignedBookings = createAsyncThunk(
  "clinicBookings/getAssignedBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic-booking/assigned"); // Token auto attached
      return res.data;  // { bookings: [], count: number }
    } catch (error) {
      const err =
        error.response?.data?.message ||
        "Failed to load assigned bookings!";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);

// ✅ Fetch only accepted bookings for that clinic
export const getAcceptedClinicBookings = createAsyncThunk(
  "clinicBookings/getAcceptedClinicBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic-booking/accepted");
      return res.data.bookings || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch accepted bookings"
      );
    }
  }
);

// Fetch completed bookings for clinic
export const getCompletedClinicBookings = createAsyncThunk(
  "clinicBookings/getCompletedClinicBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic-booking/completed");
      return res.data.bookings || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch completed bookings"
      );
    }
  }
);



export const acceptClinicBooking = createAsyncThunk(
  "clinicBookings/acceptClinicBooking",
  async (bookingId, { rejectWithValue }) => {
    try {
      const res = await api.post(`/clinic-booking/${bookingId}/accept`);
      const updatedBooking = res.data?.booking || res.data;
      toast.success("Appointment accepted successfully!");
      return updatedBooking;
    } catch (error) {
      const err =
        error.response?.data?.message ||
        "Failed to accept appointment. Please try again.";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);

// ✅ Clinic Reject Booking
export const rejectClinicBooking = createAsyncThunk(
  "clinicBookings/rejectClinicBooking",
  async (bookingId, { rejectWithValue }) => {
    try {
      const res = await api.post(`/clinic-booking/${bookingId}/reject`);
      const updatedBooking = res.data?.booking || res.data;
      toast.success("Appointment rejected successfully!");
      return updatedBooking;
    } catch (error) {
      const err =
        error.response?.data?.message ||
        "Failed to reject appointment. Please try again.";
      toast.error(err);
      console.log("Reject response:", error.response);
      return rejectWithValue(err);
    }
  }
);


export const completeClinicBooking = createAsyncThunk(
  "clinicBookings/completeClinicBooking",
  async ({ bookingId, amount }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/clinic-booking/${bookingId}/complete`, {
        amount,
      });

      toast.success("Appointment marked as completed!");
      return res.data.booking;
    } catch (error) {
      const err =
        error.response?.data?.message ||
        "Failed to complete appointment.";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);
