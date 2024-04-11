import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";


export function buildLoaders(options: BuildOptions): RuleSetRule[]{
    const isDev = options.mode === 'development'
    return [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.module\.scss$/,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        ]
}