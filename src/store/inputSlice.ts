import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: "input",
    initialState: { value: "" },
    reducers: {
        input: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { input } = inputSlice.actions;
export default inputSlice.reducer;
