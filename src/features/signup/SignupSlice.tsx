import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

export const SignupSlice = createSlice({
  name: "Signup",
  initialState,
  reducers: {
    SignupSuccess(state, action) {
      state.data = action.payload;
    },
  },
});

export const { SignupSuccess } = SignupSlice.actions;
export default SignupSlice.reducer;
