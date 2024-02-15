import { useState } from "react";
import appLogo from "/assets/icon.png";
import {
	useAppSelector,
	selectCounterCount,
	setCounter,
	useAppDispatch,
} from "../lib/redux";
import { Link } from "react-router-dom";

export default function IndexPage() {
	const count = useAppSelector(selectCounterCount);
	const dispatch = useAppDispatch();

	const setCount = (count) => {
		dispatch(setCounter(count));
	};

	return (
		<>
			<div>
				<a href="https://google.com" target="_blank">
					<img src={appLogo} height={100} width={100} alt="Sample App logo" />
				</a>
			</div>
			<div className="card">
				<button
					className="text-white text-base font-helvetica rounded-lg bg-brand-blue w-11/12 p-2 mb-4 mt-4"
					onClick={() => setCount(count + 1)}
				>
					I am a button and the count is {count}
				</button>
				<p>This is main home page</p>
				<Link
					className="text-white text-base font-helvetica rounded-lg bg-brand-blue w-11/12 p-2 mb-4 mt-4"
					to={"/login"}
				>
					Login
				</Link>
			</div>
		</>
	);
}
