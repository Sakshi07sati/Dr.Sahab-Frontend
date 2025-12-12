import { createSlice } from "@reduxjs/toolkit";
import { createClinic, deleteClinic, getAllClinics, getClinicById, updateClinic } from "./clinicThunk";

const clinicSlice = createSlice({
  name: "clinic",
  initialState: {
    loading: false,
    clinic: null, // single clinic creation response
    clinics: [], // list of all clinics
    error: null,
    clinicProfile: null,
loadingProfile: false,
profileError: null,
clinicDetails: {}, 
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // --- CREATE CLINIC ---
      .addCase(createClinic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createClinic.fulfilled, (state, action) => {
        state.loading = false;
        state.clinic = action.payload;
      })
      .addCase(createClinic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // --- GET ALL CLINICS ---
      .addCase(getAllClinics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllClinics.fulfilled, (state, action) => {
        state.loading = false;
        state.clinics = action.payload;
      })
      .addCase(getAllClinics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //--- UPDATE CLINIC ---
      .addCase(updateClinic.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateClinic.fulfilled, (state, action) => {
        state.loading = false;
        state.clinic = action.payload;
      })
      .addCase(updateClinic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // --- DELETE CLINIC ---
.addCase(deleteClinic.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(deleteClinic.fulfilled, (state, action) => {
  state.loading = false;
  // Remove deleted clinic from the list
  state.clinics = state.clinics.filter(clinic => clinic._id !== action.payload);
})
.addCase(deleteClinic.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})


.addCase(getClinicById.pending, (state) => {
        state.loadingProfile = true;
        state.profileError = null;
      })
      .addCase(getClinicById.fulfilled, (state, action) => {
        state.loadingProfile = false;
        state.clinicProfile = action.payload;
        
        // 🔥 NEW: Store in clinicDetails map for easy lookup
        const clinic = action.payload.clinic || action.payload;
        if (clinic._id) {
          state.clinicDetails[clinic._id] = clinic;
        }
      })
      .addCase(getClinicById.rejected, (state, action) => {
        state.loadingProfile = false;
        state.profileError = action.payload;
      });
  },
});

export default clinicSlice.reducer;
