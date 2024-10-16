import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "../../redux/contacts//operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {

    items: [],
    loading: false,
    error: null

};

export const sliceContacts = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1)
            })
            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                state.loading = true;
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), (state) => {
                state.loading = false;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    },
})

export const contactsReducer = sliceContacts.reducer
