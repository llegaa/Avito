export interface ReviewInterface {
    docs: Doc[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

export interface Doc {
    id: number;
    movieId: number;
    title: string;
    type: string;
    review: string;
    date: string;
    author: string;
    userRating: number;
    authorId: number;
    updatedAt: string;
    createdAt: string;
}