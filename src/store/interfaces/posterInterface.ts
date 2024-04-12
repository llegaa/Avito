export interface PosterDocsInterface {
    movieId: number,
    type: string,
    language: string,
    url: string,
    previewUrl: string,
    height: number,
    width: number,
    updatedAt: string,
    createdAt: string
}
export interface PosterInterface {
    docs: PosterDocsInterface[],
    total: number,
    limit: number,
    page: number,
    pages: number
}
