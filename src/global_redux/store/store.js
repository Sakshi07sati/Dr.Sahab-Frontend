import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import bookingReducer from "../features/booking/bookingSlice";
import clinicReducer from "../features/clinic/clinicSlice";
import clinicBookingReducer from "../features/clinicBooking/clinicBookingSlice";

export const store = configureStore({
  reducer: {
     counter: counterReducer,
     auth: authReducer,
     booking: bookingReducer,
     clinic: clinicReducer,
     clinicBookings: clinicBookingReducer,
  },
});
