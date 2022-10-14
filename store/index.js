import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'
import trackerSlice from "./tracker-slice";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, trackerSlice.reducer);

export const store = configureStore({
    reducer: { tracker: persistedReducer },
    middleware: [thunk]
});

export const persistent = persistStore(store);