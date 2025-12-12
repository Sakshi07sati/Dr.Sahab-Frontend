import { createSlice } from "@reduxjs/toolkit";
import {
  getClinicBookings,
  getAssignedBookings,
  acceptClinicBooking,
  rejectClinicBooking,
  completeClinicBooking,
  getAcceptedClinicBookings,
  getCompletedClinicBookings,
} from "./clinicBookingThunk";

const clinicBookingSlice = createSlice({
  name: "clinicBookings",
  initialState: {
    loading: false,
    bookings: [],
    assignedBookings: [],
    assignedCount: 0,
    error: null,
    completedBookings: [],

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

      .addCase(getAcceptedClinicBookings.pending, (state) => {
  state.loading = true;
})
.addCase(getAcceptedClinicBookings.fulfilled, (state, action) => {
  state.loading = false;
  state.bookings = action.payload;  // only accepted bookings
})
.addCase(getAcceptedClinicBookings.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})

.addCase(getCompletedClinicBookings.pending, (state) => {
  state.loading = true;
})
.addCase(getCompletedClinicBookings.fulfilled, (state, action) => {
  state.loading = false;
  state.completedBookings = action.payload; // store completed bookings
})
.addCase(getCompletedClinicBookings.rejected, (state, action) => {
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
      })
      // 🔹 Complete Booking
.addCase(completeClinicBooking.pending, (state) => {
  state.loading = true;
})
.addCase(completeClinicBooking.fulfilled, (state, action) => {
  state.loading = false;

  const updated = action.payload;

  // Update in main bookings list
  state.bookings = state.bookings.map((b) =>
    b._id === updated._id ? updated : b
  );

  // Update assigned list if needed
  state.assignedBookings = state.assignedBookings.map((b) =>
    b._id === updated._id ? updated : b
  );
})
.addCase(completeClinicBooking.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});

  },
});

export default clinicBookingSlice.reducer;
