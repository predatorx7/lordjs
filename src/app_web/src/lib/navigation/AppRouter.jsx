import { RouterProvider } from "react-router-dom";
import { appRouter } from "../../router";

export const AppRouter = () => {
	return <RouterProvider router={appRouter()} fallbackElement={<></>} />;
};
