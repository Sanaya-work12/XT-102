module.exports = {
	entry: './initiate-client.js',
	output: {
		publicPath: '/',
		path: './dist/',
		filename: 'main.js'
	},
	module: {
		rules: [
		  {
			enforce: "pre",
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "eslint-loader"
		  },
		  {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
		  },
		],
	  }
};