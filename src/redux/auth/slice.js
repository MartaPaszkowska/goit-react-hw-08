import { createSlice } from "@reduxjs/toolkit"
import { logout, refreshUser, register, signIn } from "./operations"
const INITIAL_STATE = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    isError: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state, action) => state)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => state)
            .addCase(signIn.pending, (state) => state)
            .addCase(signIn.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true;
            })
            .addCase(signIn.rejected, (state) => state)
            .addCase(logout.pending, (state) => state)
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE
            })
            .addCase(logout.rejected, (state) => state)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.isLoggedIn = true;
                state.user = action.payload
            })
    }
})

export const authReducer = authSlice.reducer