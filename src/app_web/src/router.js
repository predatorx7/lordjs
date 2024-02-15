import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "./app/not-found";
import RootPage from "./app/page";
import LoginPage from "./app/login/page";
import { loginLoader } from "./app/login/loader";

// Note: This is a [() => Router] instead of [Router] to lazily build routes when redux store is hydrated
export const appRouter = () => {
	return createBrowserRouter([
		{
			path: "/",
			Component: RootPage,
		},
		{
			path: "/login",
			loader: loginLoader,
			Component: LoginPage,
		},
		{
			path: "*",
			Component: NotFoundPage,
		},
	]);
};
