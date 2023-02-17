const path = require('path')

module.exports = {
	mode: 'development',
	entry: './frontend/script.js',
	output: {
		path: path.resolve(__dirname, 'public', 'js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env']
				}
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: { configFile: 'tsconfig.json' },
		},
	]
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
	devtool: 'source-map'
}