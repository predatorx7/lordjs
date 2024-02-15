import "./MaterialSymbol.module.scss";

export const MaterialSymbols = {
	RealEstateAgent: "real_estate_agent",
	Person: "person",
	AccountBalance: "account_balance",
	Description: "description",
	PersonAdd: "person_add",
	PersonRemove: "person_remove",
	Close: "close",
	Cancel: "cancel",
	Back: "arrow_back_ios_new",
	Download: "download",
	Logout: "logout",
};

export const MaterialSymbolType = {
	outlined: "material-symbols-outlined",
	rounded: "material-symbols-rounded",
	sharp: "material-symbols-sharp",
};

/**
 *
 * ```js
 * props = {
 * 	icon: MaterialSymbols;
 * 	type?: MaterialSymbolType;
 * 	className?: string;
 * 	iconSize?: string | number;
 * 	style?: React.CSSProperties;
 * 	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
 * };
 * ```
 * @param {*} props
 * @returns
 */
export const MaterialSymbol = (props) => {
	const symbolTypeClassName = (
		props.type || MaterialSymbolType.outlined
	).toString();
	const effectiveIconSize = props.iconSize || 24;

	let child = (
		<span
			className={symbolTypeClassName}
			style={{
				fontSize: effectiveIconSize,
				...props.style,
			}}
			onClick={props.onClick}
		>
			{props.icon.toString()}
		</span>
	);

	const className = props.className;
	if (className) {
		return <div className={className}>{child}</div>;
	}

	return child;
};
