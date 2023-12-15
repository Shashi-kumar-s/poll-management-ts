import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "../features/signup/SignupSlice";
import LoginSlice from "../features/login/LoginSlice";

export const store=configureStore({
    reducer:{
        SignupSlice:SignupSlice,
        LoginSlice:LoginSlice,
    }
})