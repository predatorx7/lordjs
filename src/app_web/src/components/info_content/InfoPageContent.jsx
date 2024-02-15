import "./info_content.scss";

import AppIcon from "/assets/icon.png";
import { GoHomeButton } from "../GoHomeButton";

/**
 * @param {{
 *    contentImageSrc: string;
 *    contentImageAlt: string;
 *    title: string;
 *    description: string;
 *    isHomeButtonVisible?: boolean;
 * }} props
 * @returns
 */
export const InfoPageContent = (props) => {
	return (
		<div className="page-info-content">
			<div className="flex justify-center">
				<img src={AppIcon} height={32} width={32} alt="Application Logo" />
			</div>
			<div className="flex justify-center">
				<img
					src={props.contentImageSrc}
					alt={props.contentImageAlt}
					className="content-img"
				/>
			</div>
			<div className="content-title">
				<p>{props.title}</p>
			</div>
			<div className="content-description">
				<p>{props.description}</p>
			</div>
			{props.isHomeButtonVisible ? <GoHomeButton /> : undefined}
		</div>
	);
};
