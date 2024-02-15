"use client";

import { StoreProvider } from "./redux/StoreProvider";

/**
 * @param {{
 *  children: React.JSX.Element | () => React.JSX.Element
 * }} props
 * @returns
 */
export const Providers = (props) => {
	return <StoreProvider>{props.children}</StoreProvider>;
};
