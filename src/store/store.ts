import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import isFindSlice from "./isFindSlice";
import booksDataSlice from "./booksDataSlice";
import sortSlice from "./sortSlice";
import isLoadSlice from "./idLoadSlice";
import bookDataSlice from "./bookDataSlice";

const store = configureStore({
    reducer: {
        input: inputReducer,
        find: isFindSlice,
        books: booksDataSlice,
        book: bookDataSlice,
        sort: sortSlice,
        load: isLoadSlice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
