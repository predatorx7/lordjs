/**
 *
 * @param {{
 *    isProcessing: boolean
 * }} props
 * @returns
 */
export const SignInButton = ({ isProcessing }) => {
	return (
		<button
			className="text-white text-base font-helvetica rounded-lg bg-brand-blue w-4/12 p-2 mb-4 mt-4"
			type="submit"
			disabled={isProcessing}
		>
			{isProcessing ? "Signing In.." : "Sign In"}
		</button>
	);
};
