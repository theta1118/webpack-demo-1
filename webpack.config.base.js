const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.[contenthash].js' //这个是http用来作缓存的
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "写代码啦",
			template: 'src/assets/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,//如果你是...,那就结尾了
				use: ["file-loader"] //那么你就使用file-loader,它的作用是把文件变成文件加载路径
			},
			{
				test: /\.styl$/,
				loader: ['style-loader', 'css-loader', 'stylus-loader']
			},
			{
				test: /\.less$/,
				loader: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.scss$/i,
				use: [
					'style-loader',
					'css-loader',
					//把css代码转化成js的字符串
					{
						loader: "sass-loader",
						options: {
							implementation: require('dart-sass')
						}
					},
				],
			},
		],
	},
};