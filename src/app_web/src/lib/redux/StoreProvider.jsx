import { useRef } from "react";
import { Provider } from "react-redux";
import { makePersistedStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

/**
 * @param {{
 *  children: React.JSX.Element | () => React.JSX.Element
 * }} props
 * @returns
 */
export const StoreProvider = (props) => {
	const storeRef = useRef();
	const persistorRef = useRef();

	if (!storeRef.current) {
		// Create the store instance the first time this renders
		const { store, persistor } = makePersistedStore();
		storeRef.current = store;
		persistorRef.current = persistor;
	}

	return (
		<Provider store={storeRef.current}>
			<PersistGate loading={null} persistor={persistorRef.current}>
				{(bootstrapped) => {
					if (!bootstrapped) return <></>;
					if (typeof props.children !== "function") return props.children;
					return props.children();
				}}
			</PersistGate>
		</Provider>
	);
};
