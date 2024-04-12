export interface Seasons {
    docs:  Doc[];
    total: number;
    limit: number;
    page:  number;
    pages: number;
}

export interface Doc {
    movieId:       number;
    number:        number;
    episodesCount: number;
    episodes:      Episode[];
    poster:        Poster;
    name:          string;
    enName:        string;
    duration:      number;
    description:   string;
    enDescription: string;
    airDate:       string;
    updatedAt:     string;
    createdAt:     string;
}

export interface Episode {
    number:        number;
    name:          string;
    enName:        string;
    description:   string;
    still:         Poster;
    airDate:       string;
    enDescription: string;
}

export interface Poster {
    url:        string;
    previewUrl: string;
}
