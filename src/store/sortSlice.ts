import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
    name: "sort",
    initialState: { value: "relevance" },
    reducers: {
        sort: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { sort } = sortSlice.actions;
export default sortSlice.reducer;
