import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState:{
        value: localStorage.getItem("lang") || "en",
    },
    reducers: {
        setLanguage: (state, action)=> {
            localStorage.setItem("lang", action.payload);
            state.value = action.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer
