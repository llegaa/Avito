import {MoviePage} from "../oneMovieSlice";

export function getOneMovieInitialState(): MoviePage {
    return {
        movie: {
            status:
                null,
            externalId:
                {
                    imdb: "",
                    tmdb: 0,
                    kpHD: ""
                }
            ,
            rating:
                {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: null
                },
            votes:
                {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0
                },
            backdrop:
                {
                    url: "",
                    previewUrl: ""
                },
            movieLength: 0,
            images:
                {
                    postersCount: 0,
                    backdropsCount: 0,
                    framesCount: 0
                },
            productionCompanies: [],
            spokenLanguages: [],
            id: 0,
            type: "",
            name: "",
            description: "",
            distributors:
                {
                    distributor: "",
                    distributorRelease: ""
                },
            premiere:
                {
                    world: "",
                    russia: "",
                    bluray: "",
                    dvd: ""
                }
            ,
            slogan: "",
            year: 0,
            budget:
                {
                    value: 0,
                    currency: ""
                },
            poster:
                {
                    url: "",
                    previewUrl: ""
                },
            facts: [],
            genres: [],
            countries: [],
            seasonsInfo: [],
            persons: [],
            lists: [],
            typeNumber: 0,
            alternativeName: "",
            enName: null,
            names: [],
            updatedAt: "",
            sequelsAndPrequels: [],
            similarMovies: [],
            imagesInfo:
                {
                    framesCount: 0
                },
            ratingMpaa: "",
            shortDescription: "",
            technology:
                {
                    hasImax: false,
                    has3D: true
                },
            ticketsOnSale: false,
            fees:
                {
                    world:
                        {
                            value: 0,
                            currency: ""
                        },
                    russia:
                        {
                            value: 0,
                            currency: ""
                        },
                    usa:
                        {
                            value: 0,
                            currency:
                                ""
                        }
                },
            ageRating: 0,
            logo:
                {
                    url: ""
                },
            watchability:
                {
                    items:
                        []
                },
            top10: null,
            top250: 0,
            audience: [],
            deletedAt: null,
            isSeries: false,
            seriesLength: null,
            totalSeriesLength: null,
            networks: null,
            videos:
                {
                    trailers: []
                }

        },
        review: {
            docs: [],
            total: 0,
            limit: 0,
            page: 0,
            pages: 0
        },
        posters: {
            docs: [],
            total: 0,
            limit: 0,
            page: 0,
            pages: 0
        },
        loading: {
            movieLoading: false,
            reviewLoading: false,
            postersLoading: false,
            seasonLoading: false
        },
        error: {
            movieError: '',
            reviewError: '',
            postersError: '',
            seasonError: ''
        },
        seasons: {
            docs: [],
            total: 0,
            limit: 0,
            page: 0,
            pages: 0
        }
    }
}
