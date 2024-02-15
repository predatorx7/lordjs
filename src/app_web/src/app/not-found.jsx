import notFoundImage from "/assets/images/404.png";

import { InfoPageContent } from "../components/info_content/InfoPageContent";

export default () => {
	return (
		<InfoPageContent
			contentImageSrc={notFoundImage}
			contentImageAlt="Not found"
			title="Something is wrong"
			description="The page you were looking for was moved, removed, renamed or might have never existed."
			isHomeButtonVisible
		/>
	);
};
