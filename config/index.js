'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
	dev: {
		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/mcApi': {
				// target: 'https://travelwithus.mastercard.com/api',
				// target: 'http://192.168.1.172:8090',
				target: 'https://travelwithus-dev.dragonpass.com.cn/api',
				changeOrigin: true,
				secure: true,
				pathRewrite: {
					'^/mcApi': ''
				}
			},
			'/paymentApi': {
				target: 'https://paymentdev.dragonpass.com.cn',
				changeOrigin: true,
				secure: true,
				pathRewrite: {
					'^/paymentApi': ''
				}
			}
		},

		// Various Dev Server settings
		host: '0.0.0.0', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		/**
     * Source Maps
     */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	},

	build: {
		prodEnv: require('./prod.env'),
		testEnv: require('./test.env'),
		betaEnv: require('./beta.env'),

		// Template for index.html
		index: path.resolve(__dirname, '../' + process.env.ENV_CONFIG + '_dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../' + process.env.ENV_CONFIG + '_dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',

		/**
     * Source Maps
     */

		productionSourceMap: false,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: [ 'js', 'css' ],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
};
