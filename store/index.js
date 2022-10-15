import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'
import trackerSlice from "./tracker-slice";

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    tracker: trackerSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export let persistent = persistStore(store);