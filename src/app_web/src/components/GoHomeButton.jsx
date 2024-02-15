import { useNavigate } from "react-router-dom";

export const GoHomeButton = () => {
	const navigate = useNavigate();

	return (
		<button
			title="Go Home"
			className="text-white text-base font-helvetica rounded-lg bg-brand-blue w-11/12 p-2 mb-4 mt-4"
			onClick={() => navigate("/")}
		>
			Go Home
		</button>
	);
};
