import {MoviePage} from "./oneMovieSlice";

export function getOneMovieInitialState():MoviePage{
    return {
        movie: {
            "status":
                null,
            "externalId":
                {
                    "imdb":
                        "tt0110357",
                    "tmdb":
                        8587,
                    "kpHD":
                        "4eac76d69bdb21d9aa2945deb6ba8d7f"
                }
            ,
            "rating":
                {
                    "kp":
                        0,
                    "imdb":
                        0,
                    "filmCritics":
                        0,
                    "russianFilmCritics":
                        0,
                    "await":
                        null
                }
            ,
            "votes":
                {
                    "kp":
                        697604,
                    "imdb":
                        1134083,
                    "filmCritics":
                        139,
                    "russianFilmCritics":
                        2,
                    "await":
                        0
                }
            ,
            "backdrop":
                {
                    "url":
                        "https://image.openmoviedb.com/tmdb-images/original/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
                    "previewUrl":
                        "https://image.openmoviedb.com/tmdb-images/w500/wXsQvli6tWqja51pYxXNG1LFIGV.jpg"
                }
            ,
            "movieLength":
                88,
            "images":
                {
                    "postersCount":
                        0,
                    "backdropsCount":
                        0,
                    "framesCount":
                        0
                }
            ,
            "productionCompanies":
                [
                    {
                        "name": "Walt Disney Pictures",
                        "url": "https://www.themoviedb.org/t/p/original/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
                        "previewUrl": "https://www.themoviedb.org/t/p/w500/wdrCwmRnLFJhEoH8GSfymY85KHT.png"
                    }
                ],
            "spokenLanguages":
                [
                    {
                        "name": "English",
                        "nameEn": "English"
                    }
                ],
            "id":
                0,
            "type":
                "cartoon",
            "name":
                "Король Лев",
            "description":
                "У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти.\nСимба познаёт горе утраты, предательство и изгнание, но в конце концов обретает верных друзей и находит любимую. Закалённый испытаниями, он в нелёгкой борьбе отвоёвывает своё законное место в «Круге жизни», осознав, что значит быть настоящим Королём. ",
            "distributors":
                {
                    "distributor":
                        "WDSSPR",
                    "distributorRelease":
                        "Уолт Дисней Компани СНГ"
                }
            ,
            "premiere":
                {
                    "world":
                        "1994-06-12T00:00:00.000Z",
                    "russia":
                        "2012-03-22T00:00:00.000Z",
                    "bluray":
                        "2012-04-24T00:00:00.000Z",
                    "dvd":
                        "2012-04-24T00:00:00.000Z"
                }
            ,
            "slogan":
                "The Circle of Life",
            "year":
                0,
            "budget":
                {
                    "value":
                        0,
                    "currency":
                        "$"
                }
            ,
            "poster":
                {
                    "url":
                        "https://image.openmoviedb.com/kinopoisk-images/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/orig",
                    "previewUrl":
                        "https://image.openmoviedb.com/kinopoisk-images/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/x1000"
                }
            ,
            "facts":
                [
                    {
                        "value": "«Симба» означает лев, «Сараби» — мираж, «Рафики» — друг, «Пумба» — простак, «Банзай» — прячущийся, «Шензи» — неотесанный.",
                        "type": "FACT",
                        "spoiler": false
                    }
                ],
            "genres":
                [
                    {
                        "name": "мультфильм"
                    }
                ],
            "countries":
                [
                    {
                        "name": "США"
                    }
                ],
            "seasonsInfo":
                [],
            "persons":
                [
                    {
                        "id": 0,
                        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_10968.jpg",
                        "name": "Мэттью Бродерик",
                        "enName": "Matthew Broderick",
                        "description": "Simba",
                        "profession": "актеры",
                        "enProfession": "actor"
                    }
                ],
            "lists":
                [
                    ""
                ],
            "typeNumber":
                0,
            "alternativeName":
                "The Lion King",
            "enName":
                null,
            "names":
                [
                    {
                        "name": ""
                    }
                ],
            "updatedAt":
                "",
            "sequelsAndPrequels":
                [
                    {
                        "id": 0,
                        "name": "",
                        "alternativeName": "",
                        "enName": null,
                        "type": "",
                        "poster": {
                            "url": "",
                            "previewUrl": ""
                        },
                        "rating": {
                            "kp": 0,
                            "imdb": 0,
                            "filmCritics": 0,
                            "russianFilmCritics": 0,
                            "await": null
                        },
                        "year": 0
                    }
                ],
            "similarMovies":
                [
                    {
                        "id": 2361,
                        "name": "Аладдин",
                        "enName": null,
                        "alternativeName": "Aladdin",
                        "type": "cartoon",
                        "poster": {
                            "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60add1e1-d3ae-4e5c-af67-4fdabadb40ac/orig",
                            "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60add1e1-d3ae-4e5c-af67-4fdabadb40ac/x1000"
                        },
                        "year": 1992,
                        "rating": {
                            "kp": 8.164,
                            "imdb": 8,
                            "filmCritics": 8.1,
                            "russianFilmCritics": 0,
                            "await": null
                        }
                    }
                ],
            "imagesInfo":
                {
                    "framesCount":
                        0
                }
            ,
            "ratingMpaa":
                "g",
            "shortDescription":
                "Львенок Симба бросает вызов дяде-убийце. Величественный саундтрек, рисованная анимация и шекспировский размах",
            "technology":
                {
                    "hasImax":
                        false,
                    "has3D":
                        true
                }
            ,
            "ticketsOnSale":
                false,
            "fees":
                {
                    "world":
                        {
                            "value":
                                0,
                            "currency":
                                "$"
                        }
                    ,
                    "russia":
                        {
                            "value":
                                0,
                            "currency":
                                "$"
                        }
                    ,
                    "usa":
                        {
                            "value":
                                0,
                            "currency":
                                "$"
                        }
                }
            ,
            "ageRating":
                0,
            "logo":
                {
                    "url":
                        "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016e044a3db74ffde3e15fc9a558cc/orig"
                }
            ,
            "watchability":
                {
                    "items":
                        []
                }
            ,
            "top10":
                null,
            "top250":
                33,
            "audience":
                [
                    {
                        "count": 89101104,
                        "country": "США"
                    }
                ],
            "deletedAt":
                null,
            "isSeries":
                false,
            "seriesLength":
                null,
            "totalSeriesLength":
                null,
            "networks":
                null,
            "videos":
                {
                    "trailers":
                        [
                            {
                                "url": "https://www.youtube.com/embed/nhm7y9npMQU",
                                "name": "Король Лев - Трейлер",
                                "site": "youtube",
                                "type": "TRAILER"
                            }
                        ]
                }

        },
        review: {
            "docs": [
                {
                    "id": 0,
                    "movieId": 0,
                    "title": "string",
                    "type": "string",
                    "review": "string",
                    "date": "string",
                    "author": "string",
                    "userRating": 0,
                    "authorId": 0,
                    "updatedAt": "2024-04-08T21:29:10.250Z",
                    "createdAt": "2024-04-08T21:29:10.250Z"
                }
            ],
            "total": 0,
            "limit": 0,
            "page": 0,
            "pages": 0
        },
        posters: {
            docs: [
                {
                    movieId: 0,
                    type: "string",
                    language: "string",
                    url: "string",
                    previewUrl: "string",
                    height: 0,
                    width: 0,
                    updatedAt: "string",
                    createdAt: "string"
                }
            ],
            total: 0,
            limit: 0,
            page: 0,
            pages: 0
        },
        loading : {
            movieLoading: false,
            reviewLoading: false,
            postersLoading: false,
            seasonLoading: false
        },
        error : {
            movieError: '',
            reviewError: '',
            postersError: '',
            seasonError: ''
        },
        seasons:{
            docs: [
                {
                    movieId: 0,
                    number: 0,
                    episodesCount: 0,
                    episodes: [
                        {
                            number: 0,
                            name: "string",
                            enName: "string",
                            description: "string",
                            still: {
                                url: "string",
                                previewUrl: "string"
                            },
                            airDate: "string",
                            enDescription: "string"
                        }
                    ],
                    poster: {
                        url: "string",
                        previewUrl: "string"
                    },
                    name: "string",
                    enName: "string",
                    duration: 0,
                    description: "string",
                    enDescription: "string",
                    airDate: "string",
                    updatedAt: "2024-04-10T19:35:37.414Z",
                    createdAt: "2024-04-10T19:35:37.414Z"
                }
            ],
            total: 0,
            limit: 0,
            page: 0,
            pages: 0
        }
    }
}
