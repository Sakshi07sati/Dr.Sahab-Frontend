import { createSlice } from "@reduxjs/toolkit";
import { 
  createBooking, 
  getAllBookings, 
  getAvailableClinics, 
  assignClinicToBooking, 
  getPendingBookings
} from "./bookingThunk";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
  loading: false,
  booking: null,
  bookings: [],
  pendingBookings: [],   // 🔥 NEW
  availableClinics: [],
  error: null,
  availableLoading: false,
  

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

      .addCase(getPendingBookings.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(getPendingBookings.fulfilled, (state, action) => {
  state.loading = false;
  state.pendingBookings = action.payload; // 🔥 only pending stored
})
.addCase(getPendingBookings.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})


      // ========== GET AVAILABLE CLINICS ==========
      // ========== GET AVAILABLE CLINICS ==========
// .addCase(getAvailableClinics.pending, (state) => {
//   state.loading = true;
//   state.error = null;
// })
// .addCase(getAvailableClinics.fulfilled, (state, action) => {
//   state.loading = false;
//   // Handle both array response and object with clinics property
//   state.availableClinics = Array.isArray(action.payload) 
//     ? action.payload 
//     : action.payload?.clinics || [];
// })
// .addCase(getAvailableClinics.rejected, (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
//   state.availableClinics = [];
// })
// Get Available Clinics
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



      // ========== ASSIGN CLINIC TO BOOKING ==========
      .addCase(assignClinicToBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignClinicToBooking.fulfilled, (state, action) => {
  state.loading = false;

  const updated = action.payload; // updated booking from backend

  // 1️⃣ Remove from pending immediately
  state.pendingBookings = state.pendingBookings.filter(
    (b) => b._id !== updated._id
  );

  // 2️⃣ Update inside all bookings (if loaded anywhere else)
  state.bookings = state.bookings.map((b) =>
    b._id === updated._id ? updated : b
  );
})

      .addCase(assignClinicToBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;