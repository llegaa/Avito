export interface Movie {
    status:              null;
    externalId:          ExternalID;
    rating:              Rating;
    votes:               Rating;
    backdrop:            Backdrop;
    movieLength:         number;
    images:              Images;
    productionCompanies: ProductionCompany[];
    spokenLanguages:     SpokenLanguage[];
    id:                  number;
    type:                string;
    name:                string;
    description:         string;
    distributors:        Distributors;
    premiere:            Premiere;
    slogan:              string;
    year:                number;
    budget:              Budget;
    poster:              Backdrop;
    facts:               Fact[];
    genres:              Country[];
    countries:           Country[];
    seasonsInfo:         any[];
    persons:             Person[];
    lists:               string[];
    typeNumber:          number;
    alternativeName:     string;
    enName:              null;
    names:               Name[];
    updatedAt:           string;
    sequelsAndPrequels:  SequelsAndPrequel[];
    similarMovies:       SequelsAndPrequel[];
    imagesInfo:          ImagesInfo;
    ratingMpaa:          string;
    shortDescription:    string;
    technology:          Technology;
    ticketsOnSale:       boolean;
    fees:                Fees;
    ageRating:           number;
    logo:                Logo;
    watchability:        Watchability;
    top10:               null;
    top250:              number;
    audience:            Audience[];
    deletedAt:           null;
    isSeries:            boolean;
    seriesLength:        null;
    totalSeriesLength:   null;
    networks:            null;
    videos:              Videos;
}

export interface Audience {
    count:   number;
    country: string;
}

export interface Backdrop {
    url:        string;
    previewUrl: string;
}

export interface Budget {
    value:    number;
    currency: string;
}

export interface Country {
    name: string;
}

export interface Distributors {
    distributor:        string;
    distributorRelease: string;
}

export interface ExternalID {
    imdb: string;
    tmdb: number;
    kpHD: string;
}

export interface Fact {
    value:   string;
    type:    string;
    spoiler: boolean;
}



export interface Fees {
    world:  Budget;
    russia: Budget;
    usa:    Budget;
}

export interface Images {
    postersCount:   number;
    backdropsCount: number;
    framesCount:    number;
}

export interface ImagesInfo {
    framesCount: number;
}

export interface Logo {
    url: string;
}

export interface Name {
    name:      string;
    language?: string;
    type?:     null;
}

export interface Person {
    id:           number;
    photo:        string;
    name:         string;
    enName:       null | string;
    description:  null | string;
    profession:   string;
    enProfession: string;
}

export interface Premiere {
    world:  string;
    russia: string;
    bluray: string;
    dvd:    string;
}

export interface ProductionCompany {
    name:       string;
    url:        string;
    previewUrl: string;
}

export interface Rating {
    kp:                 number;
    imdb:               number;
    filmCritics:        number;
    russianFilmCritics: number;
    await:              number | null;
}

export interface SequelsAndPrequel {
    id:              number;
    name:            string;
    alternativeName: string;
    enName:          null;
    type:            string;
    poster:          Backdrop;
    rating:          Rating;
    year:            number;
}


export interface SpokenLanguage {
    name:   string;
    nameEn: string;
}

export interface Technology {
    hasImax: boolean;
    has3D:   boolean;
}

export interface Videos {
    trailers: Trailer[];
}

export interface Trailer {
    url:  string;
    name: string;
    site: string;
    type: string;
}

export interface Watchability {
    items: any[];
}
