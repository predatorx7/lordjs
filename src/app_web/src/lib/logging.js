import pino from "pino";

export const logger = pino({
	browser: {
		asObject: true,
	},
});

export const log = logger.info;
