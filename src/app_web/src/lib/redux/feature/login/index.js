import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { promiseDelayed } from "../../../utils/wait";
import { LoginError, UserApi } from "../../../services/user";
import { setUserAuthentication } from "../auth";

/**
 * @property {string} email
 * @property {string} password
 * @property {string | null} errorText
 * @property {'idle' | 'loading'} state
 */
const initialState = {
	email: "",
	password: "",
	errorText: null,
	state: "idle",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		clearErrorText: (state) => {
			state.errorText = null;
		},
	},
	extraReducers: (builders) => {
		builders
			.addCase(loginWithEmailPasswordAsync.pending, (state) => {
				state.state = "pending";
			})
			.addCase(loginWithEmailPasswordAsync.rejected, (state, action) => {
				state.state = "idle";
				if (action.payload instanceof LoginError) {
					state.errorText = "Your password should be 'passwordwa'";
				} else {
					action.payload = "Could not login";
				}
			})
			.addCase(loginWithEmailPasswordAsync.fulfilled, (state, action) => {
				state.state = "idle";
			});
	},
});

export const { clearErrorText } = loginSlice.actions;

export const loginWithEmailPasswordAsync = createAsyncThunk(
	"login/loginWithEmailPasswordAsync",
	/**
	 *
	 * @param {{ email: string, password: string }} arg
	 */
	async (arg, thunkApi) => {
		thunkApi.dispatch(clearErrorText());

		await promiseDelayed(200);
		try {
			const tokenResponse = await UserApi.login(arg.email, arg.password);
			thunkApi.dispatch(setUserAuthentication(tokenResponse.token));
			return tokenResponse.token;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);
