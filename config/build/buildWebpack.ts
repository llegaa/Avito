import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'
    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        // devtool: isDev ? 'inline-source-map': false,
        devServer: isDev ? buildDevServer() : undefined,

    }
}