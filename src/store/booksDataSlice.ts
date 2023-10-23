import { createSlice } from "@reduxjs/toolkit";

export const booksDataSlice = createSlice({
    name: "books",
    initialState: { value: [] },
    reducers: {
        books: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { books } = booksDataSlice.actions;
export default booksDataSlice.reducer;
