
import { createSlice } from "@reduxjs/toolkit";

export const bookDataSlice = createSlice({
    name: "book",
    initialState: { value: [], load: false },
    reducers: {
        book: (state, action) => {
            state.value = action.payload;
        },
        status: (state, action) => {
            state.load = action.payload;
        }
    }
});

export const { book, status } = bookDataSlice.actions;
export default bookDataSlice.reducer;
