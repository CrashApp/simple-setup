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

const test = {
	app: {
		port: parseInt(process.env.PORT) || 3000,
		bodyLimitInKB: `${parseInt(process.env.TEST_APP_BODY_LIMIT_IN_KB) || 100}kb`,
	},
	db: {
		provider: process.env.TEST_DB_PROVIDER || 'mongodb',
		host: process.env.TEST_DB_HOST || 'ds131258.mlab.com',
		port: parseInt(process.env.TEST_DB_PORT) || 31258,
		name: process.env.TEST_DB_NAME || 'emails',
		username: process.env.TEST_DB_USERNAME || 'admin2',
		password: process.env.TEST_DB_PASSWORD || 'admin2'
	},
	email: {
		host: process.env.EMAIL_HOST || 'smtp.office365.com',
		port: process.env.EMAIL_PORT || '587',
		username: process.env.EMAIL_USERNAME || 'noreply@crewmobile.com',
		password: process.env.EMAIL_PASSWORD || 'Crashtime2017!',
		tls: process.env.EMAIL_TLS || {ciphers: 'SSLv3'}
	}
};

const production = {
	app: {
		port: parseInt(process.env.PORT) || 3000,
		bodyLimitInKB: `${parseInt(process.env.PROD_APP_BODY_LIMIT_IN_KB) || 100}kb`,
	},
	db: {
		provider: process.env.PROD_DB_PROVIDER || 'mongodb',
		host: process.env.PROD_DB_HOST || 'ds131258.mlab.com',
		port: parseInt(process.env.PROD_DB_PORT) || 31258,
		name: process.env.PROD_DB_NAME || 'emails',
		username: process.env.PROD_DB_USERNAME || 'admin2',
		password: process.env.PROD_DB_PASSWORD || 'admin2'
	},
	email: {
		host: process.env.EMAIL_HOST || 'smtp.office365.com',
		port: process.env.EMAIL_PORT || '587',
		username: process.env.EMAIL_USERNAME || 'noreply@crewmobile.com',
		password: process.env.EMAIL_PASSWORD || 'Crashtime2017!',
		tls: process.env.EMAIL_TLS || {ciphers: 'SSLv3'}
	}
};

const config = {
development,
test,
production
};

module.exports = config[env];