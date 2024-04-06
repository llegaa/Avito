import webpack from 'webpack';
import 'webpack-dev-server';
import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";

interface EnvVariables {
    mode: BuildMode;
}
export default (env: EnvVariables)=>{
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        paths
    })

    return config
};