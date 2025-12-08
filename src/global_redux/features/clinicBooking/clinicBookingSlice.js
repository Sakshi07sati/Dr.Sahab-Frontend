import { createSlice } from "@reduxjs/toolkit";
import {
  getClinicBookings,
  getAssignedBookings,
  acceptClinicBooking,
  rejectClinicBooking,
} from "./clinicBookingThunk";

const clinicBookingSlice = createSlice({
  name: "clinicBookings",
  initialState: {
    loading: false,
    bookings: [],
    assignedBookings: [],
    assignedCount: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 My Bookings
      .addCase(getClinicBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClinicBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getClinicBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Assigned Bookings
      .addCase(getAssignedBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAssignedBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.assignedBookings = action.payload.bookings;
        state.assignedCount = action.payload.count;
      })
      .addCase(getAssignedBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Accept Booking
      .addCase(acceptClinicBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(acceptClinicBooking.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        // Remove it from assigned list because status is now "accepted"
        state.assignedBookings = state.assignedBookings.filter(
          (b) => b._id !== updated._id
        );
        if (state.assignedCount > 0) state.assignedCount -= 1;
      })
      .addCase(acceptClinicBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔹 Reject Booking
      .addCase(rejectClinicBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(rejectClinicBooking.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        // Status is now "pending" and clinicId = null, so remove from assigned list
        state.assignedBookings = state.assignedBookings.filter(
          (b) => b._id !== updated._id
        );
        if (state.assignedCount > 0) state.assignedCount -= 1;
      })
      .addCase(rejectClinicBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clinicBookingSlice.reducer;
