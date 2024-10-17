import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import { login, logout, refreshUser, register } from "./operations";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: {
//       name: null,
//       email: null,
//     },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(register.pending, (state) => {
//       state.loading = true;
//       state.isLoggedIn = false;
//       state.error = null;
//     });
//     builder.addCase(register.fulfilled, (state, action) => {
//       const { token, user } = action.payload;
//       state.loading = false;
//       state.isLoggedIn = true;
//       state.user.name = user.name;
//       state.user.email = user.email;
//       state.token = token;
//     });
//     builder.addCase(register.rejected, (state, action) => {
//       state.loading = false;
//       state.isLoggedIn = false;
//       state.error = action.payload;
//     });
//     builder.addCase(login.pending, (state) => {
//       state.loading = true;
//       state.isLoggedIn = false;
//       state.error = null;
//     });
//     builder.addCase(login.fulfilled, (state, action) => {
//       const { token, user } = action.payload;
//       state.loading = false;
//       state.isLoggedIn = true;
//       state.user.name = user.name;
//       state.user.email = user.email;
//       state.token = token;
//     });
//     builder.addCase(login.rejected, (state, action) => {
//       state.loading = false;
//       state.isLoggedIn = false;
//       state.error = action.payload;
//     });
//     builder.addCase(logout.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(logout.fulfilled, (state) => {
//       state.loading = false;
//       state.isLoggedIn = false;
//       state.user.name = null;
//       state.user.email = null;
//       state.token = null;
//     });
//     builder.addCase(logout.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//     builder.addCase(refreshUser.pending, (state) => {
//       state.loading = true;
//       state.isLoggedIn = false;
//       state.error = null;
//       state.isRefreshing = true;
//     });
//     builder.addCase(refreshUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//       state.user.name = action.payload.name;
//       state.user.email = action.payload.email;
//     });
//     builder.addCase(refreshUser.rejected, (state, action) => {
//       state.loading = false;
//       state.isLoggedIn = false;
//       state.isRefreshing = false;
//       state.error = action.payload;
//     });
//   },
// });

// export const authReducer = authSlice.reducer;