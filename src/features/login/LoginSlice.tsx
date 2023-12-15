import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    LoginSuccess(state, action) {
      state.data=(action.payload);
    },
  },
});

export const { LoginSuccess } = LoginSlice.actions;
export default LoginSlice.reducer;
