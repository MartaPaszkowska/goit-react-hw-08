import { baseAPI } from "../auth/operations"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContacts = createAsyncThunk("contacts/getAll", async (_, thunkAPI) => {
    try {
        const { data } = await baseAPI.get("/contacts")
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const { data } = await baseAPI.post("/contacts", newContact)
        return data
    } catch (e) { return thunkAPI.rejectWithValue(e.message) }
})

export const deleteContact = createAsyncThunk("contact/deleteContact", async (idContact, thunkAPI) => {
    try {
        const { data } = await baseAPI.delete(`/contacts/${idContact}`)
        return data
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})