import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    clearContacts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = []; 
      });
  },
});

export const { clearContacts } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
