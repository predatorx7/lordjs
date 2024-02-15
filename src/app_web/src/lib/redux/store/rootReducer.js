import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

import { authSlice, loginSlice, counterSlice } from "../feature";

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	login: loginSlice.reducer,
	counter: counterSlice.reducer,
});

const persistedReducer = persistReducer(
	{
		key: "root",
		version: 1,
		storage,
		whitelist: ["auth"],
	},
	rootReducer,
);

export const reducer = persistedReducer;
