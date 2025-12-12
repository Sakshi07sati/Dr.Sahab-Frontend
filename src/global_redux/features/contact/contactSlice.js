import { createSlice } from "@reduxjs/toolkit";
import { createContact, getContacts } from "./contactThunk";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    loading: false,
    successMessage: null,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // CREATE CONTACT
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Message submitted successfully!";
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET CONTACTS
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;   // <--- FIXED
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.contacts = [];
      });
  },
});

export default contactSlice.reducer;
