import { createSlice } from "@reduxjs/toolkit";
import { 
  createBooking, 
  getAllBookings, 
  getAvailableClinics, 
  assignClinicToBooking 
} from "./bookingThunk";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    booking: null,
    bookings: [],
    availableClinics: [], // Add this
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // ========== CREATE BOOKING ==========
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ========== GET ALL BOOKINGS ==========
      .addCase(getAllBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ========== GET AVAILABLE CLINICS ==========
      // ========== GET AVAILABLE CLINICS ==========
.addCase(getAvailableClinics.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(getAvailableClinics.fulfilled, (state, action) => {
  state.loading = false;
  // Handle both array response and object with clinics property
  state.availableClinics = Array.isArray(action.payload) 
    ? action.payload 
    : action.payload?.clinics || [];
})
.addCase(getAvailableClinics.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.availableClinics = [];
})

      // ========== ASSIGN CLINIC TO BOOKING ==========
      .addCase(assignClinicToBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignClinicToBooking.fulfilled, (state, action) => {
        state.loading = false;
        // Update the booking in the list
        const index = state.bookings.findIndex(
          (booking) => booking._id === action.payload._id
        );
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(assignClinicToBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;