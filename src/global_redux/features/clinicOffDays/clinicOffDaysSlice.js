import { createSlice } from "@reduxjs/toolkit";
import { createClinicOffDay, deleteClinicOffDay, fetchClinicOffDays, fetchWeeklyOffDays, saveWeeklyOffDays } from "./clinicOffDaysThunk";

const clinicOffDaysSlice = createSlice({
  name: "clinicOffDays",
  initialState: {
    offDays: [],
    weeklyOff: [],
    loading: false,
    error: null,

  },

  reducers: {},

/**
 * Extra reducers for clinicOffDaysSlice
 * 
 * Handles the following actions:
 * - fetchClinicOffDays.pending, fetchClinicOffDays.fulfilled, fetchClinicOffDays.rejected
 * - createClinicOffDay.pending, createClinicOffDay.fulfilled, createClinicOffDay.rejected
 * - deleteClinicOffDay.pending, deleteClinicOffDay.fulfilled, deleteClinicOffDay.rejected
 * - fetchWeeklyOffDays.pending, fetchWeeklyOffDays.fulfilled, fetchWeeklyOffDays.rejected
 * 
 * Sets loading and error states based on the action type and payload
 */
  extraReducers: (builder) => {
    builder
      // 🔵 FETCH OFF DAYS
      .addCase(fetchClinicOffDays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClinicOffDays.fulfilled, (state, action) => {
        state.loading = false;
        state.offDays = action.payload; // store all off days
      })
      .addCase(fetchClinicOffDays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔵 CREATE OFF DAY
      .addCase(createClinicOffDay.pending, (state) => {
        state.loading = true;
      })
      .addCase(createClinicOffDay.fulfilled, (state, action) => {
        state.loading = false;

        // Add newly created off day to list
        state.offDays.push(action.payload);
      })
      .addCase(createClinicOffDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteClinicOffDay.pending, (state) => {
  state.loading = true;
})
.addCase(deleteClinicOffDay.fulfilled, (state, action) => {
  state.loading = false;

  // jiska id match karta hai use remove kar do
  state.offDays = state.offDays.filter((d) => d._id !== action.payload);
})
.addCase(deleteClinicOffDay.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})

.addCase(fetchWeeklyOffDays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeeklyOffDays.fulfilled, (state, action) => {
        state.loading = false;
        state.weeklyOff = action.payload;
      })
      .addCase(fetchWeeklyOffDays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(saveWeeklyOffDays.pending, (state) => {
  state.loading = true;
})
.addCase(saveWeeklyOffDays.fulfilled, (state, action) => {
  state.loading = false;
  state.weeklyOff = action.payload; // update list
})
.addCase(saveWeeklyOffDays.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});

  },
});

export default clinicOffDaysSlice.reducer;
