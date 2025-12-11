import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axiosBase";
import toast from "react-hot-toast";

export const fetchClinicOffDays = createAsyncThunk(
  "clinicOffDays/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));
      const clinicId = auth?.user?.id; // 🔥 correct ID

      if (!clinicId) return rejectWithValue("Clinic ID not found");

      const res = await api.get(`/clinic-offdays/${clinicId}`);

      return res.data.data;
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Failed to load clinic off days";
      return rejectWithValue(msg);
    }
  }
);


export const createClinicOffDay = createAsyncThunk(
  "clinicOffDays/create",
  async ({ date, reason }, { rejectWithValue }) => {
    try {
      // Date is required by backend
      if (!date) return rejectWithValue("Date is required");

      const payload = {
        date,
        reason: reason || ""
      };

      const res = await api.post("/clinic-offdays", payload);

      toast.success("Off day added successfully!");

      return res.data.data; // saved record
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Failed to add off day";
      toast.error(msg);
      return rejectWithValue(msg);
    }
  }
);

// 🔴 DELETE OFF DAY
export const deleteClinicOffDay = createAsyncThunk(
  "clinicOffDays/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/clinic-offdays/${id}`);

      return id; // backend ne message bheja, hum id return karte hain
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Failed to delete off day";
      return rejectWithValue(msg);
    }
  }
);


export const fetchWeeklyOffDays = createAsyncThunk(
  "weeklyOff/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));
      const clinicId = auth?.user?.id;

      if (!clinicId) return rejectWithValue("Clinic ID missing");

      const res = await api.get(`/weekly-off/${clinicId}`);

      return res.data.weeklyOffDays; // only send array ["Sunday", "Monday"]
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to load weekly off days";
      return rejectWithValue(msg);
    }
  }
);

export const saveWeeklyOffDays = createAsyncThunk(
  "weeklyOff/save",
  async (weeklyOffDays, { rejectWithValue }) => {
    try {
      const res = await api.post("/weekly-off", { weeklyOffDays });

      return res.data.data.weeklyOffDays; // return saved list
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Failed to save weekly off days";
      return rejectWithValue(msg);
    }
  }
);
