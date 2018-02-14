// config.js

// RQUIRES
require('dotenv').config(); // this loads the defined variables from .env

const env = process.env.NODE_ENV;

const development = {
	app: {
		port: parseInt(process.env.PORT) || 3000,
		bodyLimitInKB: `${parseInt(process.env.DEV_APP_BODY_LIMIT_IN_KB) || 100}kb`,
	},
	db: {
		provider: process.env.DEV_DB_PROVIDER || 'mongodb',
		host: process.env.DEV_DB_HOST || 'ds131258.mlab.com',
		port: parseInt(process.env.DEV_DB_PORT) || 31258,
		name: process.env.DEV_DB_NAME || 'emails',
		username: process.env.DEV_DB_USERNAME || 'admin2',
		password: process.env.DEV_DB_PASSWORD || 'admin2'
	},
};