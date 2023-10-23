import { createSlice } from "@reduxjs/toolkit";

export const isFindSlice = createSlice({
    name: "isFind",
    initialState: { value: false },
    reducers: {
        find: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { find } = isFindSlice.actions;
export default isFindSlice.reducer;
