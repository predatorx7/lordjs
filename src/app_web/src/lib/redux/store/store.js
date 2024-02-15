import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/lib/persistStore";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loggerMiddleware } from "./middleware";
import { reducer } from "./rootReducer";

const makeStore = () => {
	return configureStore({
		reducer: reducer,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(loggerMiddleware);
		},
	});
};

export const rootStore = makeStore();

export const makePersistedStore = () => {
	const persistor = persistStore(rootStore);

	setupListeners(rootStore.dispatch);

	return {
		store: rootStore,
		persistor,
	};
};
