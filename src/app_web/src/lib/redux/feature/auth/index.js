import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserApi } from "../../../services/user";
import { promiseDelayed } from "../../../utils/wait";

/**
 * @property {null | { name: string; }} user
 * @property {null | { access_token: string; refresh_token: string; }} token
 * @property {null | string} login_time_iso
 */
const initialState = {
	user: null,
	token: null,
	login_time_iso: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, payload) => {
			state.token = payload.payload.token;
			state.login_time_iso = DateTime.now().toISO();
		},
		removeUserAndCredentials: (state) => {
			state.user = null;
			state.token = null;
			state.login_time_iso = null;
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchUserAsync.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export const { setCredentials, removeUserAndCredentials } = authSlice.actions;

const fetchUserAsync = createAsyncThunk(
	"auth/fetchUserAsync",
	async (access_token, { getState, rejectWithValue }) => {
		await promiseDelayed(200);

		const token = access_token ?? selectUserToken(getState())?.access_token;
		if (!token) {
			throw new Error("Invalid token");
		}
		const response = await UserApi.getUser(token);
		if (response.data) {
			return response.data;
		}
		return rejectWithValue(response);
	},
);

export const setUserAuthentication = (token) => async (dispatch, getState) => {
	dispatch(setCredentials({ token }));

	dispatch(fetchUserAsync(token.access_token));
};

const selectAuthData = (state) => state.auth;
export const selectAuthenticated = (state) => !!selectAuthData(state)?.token;
export const selectUserToken = (state) => selectAuthData(state)?.token;
export const selectUserName = (state) => selectAuthData(state)?.user?.name;
