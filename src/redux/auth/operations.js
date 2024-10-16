import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const baseAPI = axios.create({
	baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
	baseAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
	baseAPI.defaults.headers.common.Authorization = "";
};

// credentials - обʼєкт властивостей, які користувач введе в форму реєстраії
export const register = createAsyncThunk(
	"auth/register",
	async (credentials, thunkAPI) => {
		try {
			const { data } = await baseAPI.post("/users/signup", credentials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const signIn = createAsyncThunk(
	"auth/login",
	async (credentials, thunkAPI) => {
		try {
			const { data } = await baseAPI.post("/users/login", credentials);
			setAuthHeader(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		await baseAPI.post("/users/logout");
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		try {
			const reduxState = thunkAPI.getState();
			setAuthHeader(reduxState.auth.token);
			const { data } = await baseAPI.get("/users/current");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, thunkAPI) => {
			const reduxState = thunkAPI.getState();
			return reduxState.auth.token !== null;
		},
	}
);
