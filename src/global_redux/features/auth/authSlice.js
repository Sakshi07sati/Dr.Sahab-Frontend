import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    role: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(loginUser.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload.user;
  state.role = action.payload.role;

  state.token = action.payload.token;
})
.addCase(loginUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
