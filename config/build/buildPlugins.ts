import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/types";
const Dotenv = require('dotenv-webpack');

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'
    return [
        new Dotenv(),
        new HtmlWebpackPlugin({ template: options.paths.html}),
        isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })]
}
