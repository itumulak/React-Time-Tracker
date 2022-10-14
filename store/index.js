import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./tracker-slice";

const store = configureStore({
    reducer: { tracker: trackerSlice.reducer }
});

export default store;