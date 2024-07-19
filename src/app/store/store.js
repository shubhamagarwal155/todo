import { configureStore } from "@reduxjs/toolkit";
import {todoAppSlice} from "../features/todoAppSlice";

export const store = configureStore({
    reducer : todoAppSlice.reducer
})