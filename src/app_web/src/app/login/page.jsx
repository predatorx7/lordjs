import { useForm } from "react-hook-form";
import { SignInButton } from "../../components/login/SignInButton";
import { LoginPageLabel } from "../../components/login/Label";
import { logger } from "../../lib/logging";
import { loginWithEmailPasswordAsync, useAppDispatch } from "../../lib/redux";

export default () => {
	const dispatch = useAppDispatch();

	const {
		formState: { errors, isSubmitting },
		reset,
		register,
		handleSubmit,
		setValue,
		setError,
		clearErrors,
	} = useForm({
		values: {
			email: "",
			password: "",
		},
	});

	const isProcessing = isSubmitting;

	const onValidSubmit = async (data) => {
		const log = logger("Login.onValidSubmit");
		log.info(data);
		dispatch(loginWithEmailPasswordAsync(data));
	};

	const onInvalidSubmit = (error) => {
		const log = logger("Login.onInvalidSubmit");
		// optional
		log.info("invalid", error);
	};

	return (
		<>
			<LoginPageLabel />
			<form
				onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
				onReset={reset}
			>
				<div className="grid gap-6 mb-6 md:grid-rows-2 p-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Email
						</label>
						<input
							{...register("email", {
								required: true,
								min: 3,
							})}
							type="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="sample@example.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Password
						</label>
						<input
							{...register("password", {
								required: true,
								min: 3,
							})}
							type="password"
							id="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required
						/>
					</div>
					<SignInButton />
				</div>
			</form>
		</>
	);
};
