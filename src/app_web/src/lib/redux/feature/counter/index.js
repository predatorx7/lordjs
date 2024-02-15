import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "count",
	initialState,
	reducers: {
		setCounter: (state, action) => {
			state.count = action.payload;
		},
	},
	extraReducers: (builders) => {},
});

export const { incrementCounter, setCounter } = counterSlice.actions;

export const selectCounterCount = (state) => state.counter.count;
