import { createSlice } from "@reduxjs/toolkit";

export const isLoadSlice = createSlice({
    name: "isLoad",
    initialState: { value: false },
    reducers: {
        load: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { load } = isLoadSlice.actions;
export default isLoadSlice.reducer;
