import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {
    return {
        port: 7070,
        open: true,
        historyApiFallback: true
    }
}