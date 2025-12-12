import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axiosBase";
// import api from "../../../utils/api";

// GET ALL CONTACTS (ADMIN)
export const getContacts = createAsyncThunk(
  "contact/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/contact");   // GET /contact
      return res.data.data || [];             // <-- FIX: return res.data.data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
      );
    }
  }
);

// CREATE CONTACT (PUBLIC)
export const createContact = createAsyncThunk(
  "contact/createContact",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await api.post("/contact", payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to submit contact form"
      );
    }
  }
);
