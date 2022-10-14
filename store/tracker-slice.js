import { createSlice } from "@reduxjs/toolkit";
import { users } from "../assets/js/data-users";

const initialState = users.map((user) => {
    return {
        id: user.id,
        isTrackerActive: false
    }
});

const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        toggle: (state, action) => {
            const id = action.payload;
            const userExist = state.find(user => user.id == id);

            if ( userExist ) {
                userExist.isTrackerActive = !userExist.isTrackerActive;
            }
        }
    }
});

export const trackerActions = trackerSlice.actions;
export default trackerSlice;