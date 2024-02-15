export class LoginError {}

export class UserApi {
	static getUser = async (token) => {
		return {
			data: {
				name: "Selmon Bhai",
			},
		};
	};

	/**
	 * 
	 * @param {string} email 
	 * @param {string} password 
	 * @returns 
	 */
	static login = async (email, password) => {
		if (password !== "passwordwa") throw new LoginError();
		if (!email.includes('@') || password.includes(' ')) throw new Error('bad request');

		return {
			token: {
				access_token: "yo",
				refresh_token: "mazaak",
			},
		};
	};
}
