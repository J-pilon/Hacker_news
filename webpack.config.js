const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./app/index.js",
	devServer: {
    	static: './dist',
  	},
	module: {
		rules: [
		{ test: /\.svg$/, use: "svg-inline-loader" },
		{ test: /\.s[ac]ss$/i, use: [
				"style-loader",
				"css-loader",
				"sass-loader"
		]},
		{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/}

		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
}