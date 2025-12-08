import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../api/axiosBase";
import toast from "react-hot-toast";
import api from "../../../api/axiosBase";

export const createClinic = createAsyncThunk(
  "clinic/createClinic",
  async (
    {
      clinic_name,
      dentist_name,
      number,
      location,
      address,
      clinic_email,
      password,
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.post("/clinic", {
        clinic_name,
        dentist_name,
        number,
        location,
        address,
        clinic_email,
        password,
      });

      toast.success("Clinic created successfully!");
      return res.data;
    } catch (error) {
      const err =
        error.response?.data?.message || "Failed to create clinic!";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);


export const getAllClinics = createAsyncThunk(
  "clinic/getAllClinics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/clinic"); // token auto sent
        console.log("All Clinics Response:", res.data);
      return res.data; // returns list of clinics
    } catch (error) {
      const err =
        error.response?.data?.message || "Failed to fetch clinics!";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);


export const updateClinic = createAsyncThunk(
  "clinic/updateClinic",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/clinic/${id}`, updatedData);
      toast.success("Clinic updated successfully!");
      return res.data;
    } catch (error) {
      const err = error.response?.data?.message || "Failed to update clinic!";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);


export const deleteClinic = createAsyncThunk(
  "clinic/deleteClinic",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/clinic/${id}`);
      toast.success("Clinic deleted successfully!");
      return id; // return the deleted clinic's id
    } catch (error) {
      const err = error.response?.data?.message || "Failed to delete clinic!";
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);