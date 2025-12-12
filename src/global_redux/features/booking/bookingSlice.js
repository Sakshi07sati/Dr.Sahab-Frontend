import { createSlice } from "@reduxjs/toolkit";
import { 
  createBooking, 
  getAllBookings, 
  getAvailableClinics, 
  assignClinicToBooking, 
  getPendingBookings,
  getAssignedBookings,
  getCompletedBookings
} from "./bookingThunk";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    booking: null,
    bookings: [],
    pendingBookings: [],
    assignedBookings: [],
    availableClinics: [],
    error: null,
    availableLoading: false,
    completedBookings: [],
    completedLoading: false,
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

      // ========== GET PENDING BOOKINGS ==========
      .addCase(getPendingBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPendingBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingBookings = action.payload;
      })
      .addCase(getPendingBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ========== GET ASSIGNED BOOKINGS ==========
      .addCase(getAssignedBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAssignedBookings.fulfilled, (state, action) => {
        state.loading = false;
        // Handle both formats: direct array or { data: [...] }
        state.assignedBookings = Array.isArray(action.payload) 
          ? action.payload 
          : action.payload?.data || [];
      })
      .addCase(getAssignedBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.assignedBookings = [];
      })

      // ========== GET AVAILABLE CLINICS ==========
      .addCase(getAvailableClinics.pending, (state) => {
        state.availableLoading = true;
      })
      .addCase(getAvailableClinics.fulfilled, (state, action) => {
        state.availableLoading = false;
        state.availableClinics = Array.isArray(action.payload)
          ? action.payload
          : action.payload?.clinics || [];
      })
      .addCase(getAvailableClinics.rejected, (state, action) => {
        state.availableLoading = false;
        state.availableClinics = [];
      })

      // ========== ASSIGN CLINIC TO BOOKING ========== 🔥 FIXED
      .addCase(assignClinicToBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignClinicToBooking.fulfilled, (state, action) => {
        state.loading = false;
        
        // 🔥 FIX: Extract the actual booking data from the response
        const updated = action.payload?.data || action.payload;

        // Only proceed if we have valid booking data with an _id
        if (updated && updated._id) {
          // Remove from pending
          state.pendingBookings = state.pendingBookings.filter(
            (b) => b._id !== updated._id
          );

          // Update in all bookings
          state.bookings = state.bookings.map((b) =>
            b._id === updated._id ? updated : b
          );

          // 🔥 Add to assigned bookings (only if not already there)
          const existsInAssigned = state.assignedBookings.some(
            (b) => b._id === updated._id
          );
          
          if (!existsInAssigned) {
            state.assignedBookings.push(updated);
          } else {
            // Update existing entry
            state.assignedBookings = state.assignedBookings.map((b) =>
              b._id === updated._id ? updated : b
            );
          }
        }
      })
      .addCase(assignClinicToBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ========== GET COMPLETED BOOKINGS ==========
      .addCase(getCompletedBookings.pending, (state) => {
        state.completedLoading = true;
      })
      .addCase(getCompletedBookings.fulfilled, (state, action) => {
        state.completedLoading = false;
        state.completedBookings = action.payload || [];
      })
      .addCase(getCompletedBookings.rejected, (state, action) => {
        state.completedLoading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;