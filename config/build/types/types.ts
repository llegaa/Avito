export interface BuildPaths {
    entry: string;
    html: string;
    output: string
}
export type BuildMode = 'production'| 'development'
export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode
}