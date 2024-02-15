import { redirect } from "react-router-dom";
import { rootStore, selectAuthenticated } from "../../lib/redux";
import { logger } from "../../lib/logging";

/**
 * @param {import('react-router-dom').LoaderFunctionArgs} args
 */
export const loginLoader = async (args) => {
	const log = logger.child({ module: loginLoader.name });
	const isAuthenticated = selectAuthenticated(rootStore.getState());

	console.info(isAuthenticated);
	log.info("authenitcted", { isAuthenticated: isAuthenticated });

	if (isAuthenticated) return redirect("/");

	return null;
};
