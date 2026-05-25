import type { remoteAnime } from "../types";

export const mockRemoteAnimeList: remoteAnime[] = [
  {
    data: {
      mal_id: 1,
      url: "https://myanimelist.net/anime/1/Cowboy_Bebop_Mock_1",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-1-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-1-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-1-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-2-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-2-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-2-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer001",
        url: "https://www.youtube.com/watch?v=mockTrailer001",
        embed_url: "https://www.youtube.com/embed/mockTrailer001"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 1"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 1"
        }
      ],
      title: "Cowboy Bebop Mock 1",
      title_english: "Cowboy Bebop Mock 1",
      title_japanese: "カウボーイビバップ Mock 1",
      title_synonyms: [
        "Cowboy Bebop Alternative 1"
      ],
      type: "TV",
      source: "Original",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1991-01-01T00:00:00+00:00",
        to: "1991-03-04T00:00:00+00:00",
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 1991
          },
          to: {
            day: 4,
            month: 3,
            year: 1991
          },
          string: "1991-01-01 to 1991-03-04"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 9.24,
      scored_by: 17321,
      rank: 1,
      popularity: 101,
      members: 65000,
      favorites: 1243,
      synopsis: "Cowboy Bebop Mock 1 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 1 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1991,
      broadcast: {
        day: "Thursdays",
        time: "23:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1001,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1001/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2001,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2001/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3001,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3001/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4010,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4010/Suspense"
        },
        {
          mal_id: 4011,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4011/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5001,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5001/None"
        }
      ],
      themes: [
        {
          mal_id: 6010,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6010/Super_Power"
        },
        {
          mal_id: 6011,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6011/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7001,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7001/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1001,
              type: "anime",
              name: "Cowboy Bebop Mock 1 Related",
              url: "https://myanimelist.net/anime/1001/Cowboy_Bebop_Mock_1_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 1"
        ],
        endings: [
          "Ending Theme 1"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/1"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 2,
      url: "https://myanimelist.net/anime/2/Naruto_Mock_2",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-3-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-3-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-3-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-4-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-4-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-4-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer002",
        url: "https://www.youtube.com/watch?v=mockTrailer002",
        embed_url: "https://www.youtube.com/embed/mockTrailer002"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 2"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 2"
        }
      ],
      title: "Naruto Mock 2",
      title_english: "Naruto Mock 2",
      title_japanese: "ナルト Mock 2",
      title_synonyms: [
        "Naruto Alternative 2"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1992-02-02T00:00:00+00:00",
        to: "1992-04-05T00:00:00+00:00",
        prop: {
          from: {
            day: 2,
            month: 2,
            year: 1992
          },
          to: {
            day: 5,
            month: 4,
            year: 1992
          },
          string: "1992-02-02 to 1992-04-05"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.23,
      scored_by: 24642,
      rank: 2,
      popularity: 102,
      members: 80000,
      favorites: 1486,
      synopsis: "Naruto Mock 2 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 2 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1992,
      broadcast: {
        day: "Fridays",
        time: "12:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1002,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1002/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2002,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2002/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3002,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3002/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4020,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4020/Adventure"
        },
        {
          mal_id: 4021,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4021/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5002,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5002/None"
        }
      ],
      themes: [
        {
          mal_id: 6020,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6020/Historical"
        },
        {
          mal_id: 6021,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6021/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7002,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7002/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1002,
              type: "anime",
              name: "Naruto Mock 2 Related",
              url: "https://myanimelist.net/anime/1002/Naruto_Mock_2_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 2"
        ],
        endings: [
          "Ending Theme 2"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/2"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 3,
      url: "https://myanimelist.net/anime/3/Fullmetal_Alchemist:_Brotherhood_Mock_3",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-5-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-5-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-5-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-6-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-6-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-6-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer003",
        url: "https://www.youtube.com/watch?v=mockTrailer003",
        embed_url: "https://www.youtube.com/embed/mockTrailer003"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 3"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 3"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 3",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 3",
      title_japanese: "鋼の錬金術師 Mock 3",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 3"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1993-03-03T00:00:00+00:00",
        to: "1993-05-06T00:00:00+00:00",
        prop: {
          from: {
            day: 3,
            month: 3,
            year: 1993
          },
          to: {
            day: 6,
            month: 5,
            year: 1993
          },
          string: "1993-03-03 to 1993-05-06"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 9.23,
      scored_by: 31963,
      rank: 3,
      popularity: 103,
      members: 95000,
      favorites: 1729,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 3 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 3 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1993,
      broadcast: {
        day: "Mondays",
        time: "14:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1003,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1003/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2003,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2003/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3003,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3003/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4030,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4030/Slice_of_Life"
        },
        {
          mal_id: 4031,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4031/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5003,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5003/None"
        }
      ],
      themes: [
        {
          mal_id: 6030,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6030/Military"
        },
        {
          mal_id: 6031,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6031/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7003,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7003/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1003,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 3 Related",
              url: "https://myanimelist.net/anime/1003/Fullmetal_Alchemist:_Brotherhood_Mock_3_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 3"
        ],
        endings: [
          "Ending Theme 3"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/3"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 4,
      url: "https://myanimelist.net/anime/4/Attack_on_Titan_Mock_4",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-7-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-7-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-7-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-8-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-8-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-8-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer004",
        url: "https://www.youtube.com/watch?v=mockTrailer004",
        embed_url: "https://www.youtube.com/embed/mockTrailer004"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 4"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 4"
        }
      ],
      title: "Attack on Titan Mock 4",
      title_english: "Attack on Titan Mock 4",
      title_japanese: "進撃の巨人 Mock 4",
      title_synonyms: [
        "Attack on Titan Alternative 4"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1994-04-04T00:00:00+00:00",
        to: "1994-06-07T00:00:00+00:00",
        prop: {
          from: {
            day: 4,
            month: 4,
            year: 1994
          },
          to: {
            day: 7,
            month: 6,
            year: 1994
          },
          string: "1994-04-04 to 1994-06-07"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.59,
      scored_by: 39284,
      rank: 4,
      popularity: 104,
      members: 110000,
      favorites: 1972,
      synopsis: "Attack on Titan Mock 4 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 4 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1994,
      broadcast: {
        day: "Wednesdays",
        time: "14:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1004,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1004/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2004,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2004/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3004,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3004/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4040,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4040/Sci-Fi"
        },
        {
          mal_id: 4041,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4041/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5004,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5004/None"
        }
      ],
      themes: [
        {
          mal_id: 6040,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6040/Psychological"
        },
        {
          mal_id: 6041,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6041/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7004,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7004/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1004,
              type: "anime",
              name: "Attack on Titan Mock 4 Related",
              url: "https://myanimelist.net/anime/1004/Attack_on_Titan_Mock_4_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 4"
        ],
        endings: [
          "Ending Theme 4"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/4"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 5,
      url: "https://myanimelist.net/anime/5/Death_Note_Mock_5",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-9-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-9-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-9-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-10-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-10-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-10-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer005",
        url: "https://www.youtube.com/watch?v=mockTrailer005",
        embed_url: "https://www.youtube.com/embed/mockTrailer005"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 5"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 5"
        }
      ],
      title: "Death Note Mock 5",
      title_english: "Death Note Mock 5",
      title_japanese: "デスノート Mock 5",
      title_synonyms: [
        "Death Note Alternative 5"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "1995-05-05T00:00:00+00:00",
        to: "1995-07-08T00:00:00+00:00",
        prop: {
          from: {
            day: 5,
            month: 5,
            year: 1995
          },
          to: {
            day: 8,
            month: 7,
            year: 1995
          },
          string: "1995-05-05 to 1995-07-08"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 7.89,
      scored_by: 46605,
      rank: 5,
      popularity: 105,
      members: 125000,
      favorites: 2215,
      synopsis: "Death Note Mock 5 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 5 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1995,
      broadcast: {
        day: "Saturdays",
        time: "15:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1005,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1005/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2005,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2005/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3005,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3005/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4050,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4050/Drama"
        },
        {
          mal_id: 4051,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4051/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5005,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5005/None"
        }
      ],
      themes: [
        {
          mal_id: 6050,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6050/Historical"
        },
        {
          mal_id: 6051,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6051/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7005,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7005/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1005,
              type: "anime",
              name: "Death Note Mock 5 Related",
              url: "https://myanimelist.net/anime/1005/Death_Note_Mock_5_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 5"
        ],
        endings: [
          "Ending Theme 5"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/5"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 6,
      url: "https://myanimelist.net/anime/6/One_Piece_Mock_6",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-11-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-11-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-11-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-12-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-12-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-12-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer006",
        url: "https://www.youtube.com/watch?v=mockTrailer006",
        embed_url: "https://www.youtube.com/embed/mockTrailer006"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 6"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 6"
        }
      ],
      title: "One Piece Mock 6",
      title_english: "One Piece Mock 6",
      title_japanese: "ワンピース Mock 6",
      title_synonyms: [
        "One Piece Alternative 6"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1996-06-06T00:00:00+00:00",
        to: "1996-08-09T00:00:00+00:00",
        prop: {
          from: {
            day: 6,
            month: 6,
            year: 1996
          },
          to: {
            day: 9,
            month: 8,
            year: 1996
          },
          string: "1996-06-06 to 1996-08-09"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 9.23,
      scored_by: 53926,
      rank: 6,
      popularity: 106,
      members: 140000,
      favorites: 2458,
      synopsis: "One Piece Mock 6 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 6 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1996,
      broadcast: {
        day: "Fridays",
        time: "13:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1006,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1006/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2006,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2006/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3006,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3006/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4060,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4060/Slice_of_Life"
        },
        {
          mal_id: 4061,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4061/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5006,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5006/None"
        }
      ],
      themes: [
        {
          mal_id: 6060,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6060/Martial_Arts"
        },
        {
          mal_id: 6061,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6061/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7006,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7006/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1006,
              type: "anime",
              name: "One Piece Mock 6 Related",
              url: "https://myanimelist.net/anime/1006/One_Piece_Mock_6_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 6"
        ],
        endings: [
          "Ending Theme 6"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/6"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 7,
      url: "https://myanimelist.net/anime/7/Demon_Slayer_Mock_7",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-13-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-13-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-13-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-14-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-14-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-14-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer007",
        url: "https://www.youtube.com/watch?v=mockTrailer007",
        embed_url: "https://www.youtube.com/embed/mockTrailer007"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 7"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 7"
        }
      ],
      title: "Demon Slayer Mock 7",
      title_english: "Demon Slayer Mock 7",
      title_japanese: "鬼滅の刃 Mock 7",
      title_synonyms: [
        "Demon Slayer Alternative 7"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1997-07-07T00:00:00+00:00",
        to: "1997-09-10T00:00:00+00:00",
        prop: {
          from: {
            day: 7,
            month: 7,
            year: 1997
          },
          to: {
            day: 10,
            month: 9,
            year: 1997
          },
          string: "1997-07-07 to 1997-09-10"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 9.26,
      scored_by: 61247,
      rank: 7,
      popularity: 107,
      members: 155000,
      favorites: 2701,
      synopsis: "Demon Slayer Mock 7 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 7 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1997,
      broadcast: {
        day: "Sundays",
        time: "07:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1007,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1007/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2007,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2007/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3007,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3007/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4070,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4070/Drama"
        },
        {
          mal_id: 4071,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4071/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5007,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5007/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6070,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6070/Time_Travel"
        },
        {
          mal_id: 6071,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6071/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7007,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7007/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1007,
              type: "anime",
              name: "Demon Slayer Mock 7 Related",
              url: "https://myanimelist.net/anime/1007/Demon_Slayer_Mock_7_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 7"
        ],
        endings: [
          "Ending Theme 7"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/7"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 8,
      url: "https://myanimelist.net/anime/8/Jujutsu_Kaisen_Mock_8",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-15-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-15-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-15-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-16-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-16-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-16-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer008",
        url: "https://www.youtube.com/watch?v=mockTrailer008",
        embed_url: "https://www.youtube.com/embed/mockTrailer008"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 8"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 8"
        }
      ],
      title: "Jujutsu Kaisen Mock 8",
      title_english: "Jujutsu Kaisen Mock 8",
      title_japanese: "呪術廻戦 Mock 8",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 8"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1998-08-08T00:00:00+00:00",
        to: "1998-10-11T00:00:00+00:00",
        prop: {
          from: {
            day: 8,
            month: 8,
            year: 1998
          },
          to: {
            day: 11,
            month: 10,
            year: 1998
          },
          string: "1998-08-08 to 1998-10-11"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.47,
      scored_by: 68568,
      rank: 8,
      popularity: 108,
      members: 170000,
      favorites: 2944,
      synopsis: "Jujutsu Kaisen Mock 8 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 8 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1998,
      broadcast: {
        day: "Wednesdays",
        time: "12:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1008,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1008/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2008,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2008/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3008,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3008/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4080,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4080/Supernatural"
        },
        {
          mal_id: 4081,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4081/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5008,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5008/None"
        }
      ],
      themes: [
        {
          mal_id: 6080,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6080/Historical"
        },
        {
          mal_id: 6081,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6081/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7008,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7008/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1008,
              type: "anime",
              name: "Jujutsu Kaisen Mock 8 Related",
              url: "https://myanimelist.net/anime/1008/Jujutsu_Kaisen_Mock_8_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 8"
        ],
        endings: [
          "Ending Theme 8"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/8"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 9,
      url: "https://myanimelist.net/anime/9/Steins;Gate_Mock_9",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-17-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-17-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-17-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-18-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-18-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-18-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer009",
        url: "https://www.youtube.com/watch?v=mockTrailer009",
        embed_url: "https://www.youtube.com/embed/mockTrailer009"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 9"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 9"
        }
      ],
      title: "Steins;Gate Mock 9",
      title_english: "Steins;Gate Mock 9",
      title_japanese: "シュタインズ・ゲート Mock 9",
      title_synonyms: [
        "Steins;Gate Alternative 9"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1999-09-09T00:00:00+00:00",
        to: "1999-11-12T00:00:00+00:00",
        prop: {
          from: {
            day: 9,
            month: 9,
            year: 1999
          },
          to: {
            day: 12,
            month: 11,
            year: 1999
          },
          string: "1999-09-09 to 1999-11-12"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.43,
      scored_by: 75889,
      rank: 9,
      popularity: 109,
      members: 185000,
      favorites: 3187,
      synopsis: "Steins;Gate Mock 9 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 9 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1999,
      broadcast: {
        day: "Tuesdays",
        time: "02:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1009,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1009/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2009,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2009/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3009,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3009/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4090,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4090/Action"
        },
        {
          mal_id: 4091,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4091/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5009,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5009/None"
        }
      ],
      themes: [
        {
          mal_id: 6090,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6090/Space"
        },
        {
          mal_id: 6091,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6091/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7009,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7009/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1009,
              type: "anime",
              name: "Steins;Gate Mock 9 Related",
              url: "https://myanimelist.net/anime/1009/Steins;Gate_Mock_9_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 9"
        ],
        endings: [
          "Ending Theme 9"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/9"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 10,
      url: "https://myanimelist.net/anime/10/Vinland_Saga_Mock_10",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-19-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-19-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-19-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-20-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-20-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-20-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer010",
        url: "https://www.youtube.com/watch?v=mockTrailer010",
        embed_url: "https://www.youtube.com/embed/mockTrailer010"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 10"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 10"
        }
      ],
      title: "Vinland Saga Mock 10",
      title_english: "Vinland Saga Mock 10",
      title_japanese: "ヴィンランド・サガ Mock 10",
      title_synonyms: [
        "Vinland Saga Alternative 10"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2000-10-10T00:00:00+00:00",
        to: "2000-12-13T00:00:00+00:00",
        prop: {
          from: {
            day: 10,
            month: 10,
            year: 2000
          },
          to: {
            day: 13,
            month: 12,
            year: 2000
          },
          string: "2000-10-10 to 2000-12-13"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.09,
      scored_by: 83210,
      rank: 10,
      popularity: 110,
      members: 200000,
      favorites: 3430,
      synopsis: "Vinland Saga Mock 10 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 10 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2000,
      broadcast: {
        day: "Mondays",
        time: "23:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1010,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1010/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2010,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2010/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3010,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3010/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4100,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4100/Fantasy"
        },
        {
          mal_id: 4101,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4101/Adventure"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5010,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5010/None"
        }
      ],
      themes: [
        {
          mal_id: 6100,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6100/Team_Sports"
        },
        {
          mal_id: 6101,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6101/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7010,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7010/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1010,
              type: "anime",
              name: "Vinland Saga Mock 10 Related",
              url: "https://myanimelist.net/anime/1010/Vinland_Saga_Mock_10_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 10"
        ],
        endings: [
          "Ending Theme 10"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/10"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 11,
      url: "https://myanimelist.net/anime/11/Cowboy_Bebop_Mock_11",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-21-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-21-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-21-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-22-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-22-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-22-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer011",
        url: "https://www.youtube.com/watch?v=mockTrailer011",
        embed_url: "https://www.youtube.com/embed/mockTrailer011"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 11"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 11"
        }
      ],
      title: "Cowboy Bebop Mock 11",
      title_english: "Cowboy Bebop Mock 11",
      title_japanese: "カウボーイビバップ Mock 11",
      title_synonyms: [
        "Cowboy Bebop Alternative 11"
      ],
      type: "TV",
      source: "Original",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2001-11-11T00:00:00+00:00",
        to: "2001-01-14T00:00:00+00:00",
        prop: {
          from: {
            day: 11,
            month: 11,
            year: 2001
          },
          to: {
            day: 14,
            month: 1,
            year: 2001
          },
          string: "2001-11-11 to 2001-01-14"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.96,
      scored_by: 90531,
      rank: 11,
      popularity: 111,
      members: 215000,
      favorites: 3673,
      synopsis: "Cowboy Bebop Mock 11 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 11 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2001,
      broadcast: {
        day: "Wednesdays",
        time: "19:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1011,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1011/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2011,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2011/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3011,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3011/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4110,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4110/Adventure"
        },
        {
          mal_id: 4111,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4111/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5011,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5011/None"
        }
      ],
      themes: [
        {
          mal_id: 6110,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6110/Military"
        },
        {
          mal_id: 6111,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6111/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7011,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7011/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1011,
              type: "anime",
              name: "Cowboy Bebop Mock 11 Related",
              url: "https://myanimelist.net/anime/1011/Cowboy_Bebop_Mock_11_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 11"
        ],
        endings: [
          "Ending Theme 11"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/11"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 12,
      url: "https://myanimelist.net/anime/12/Naruto_Mock_12",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-23-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-23-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-23-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-24-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-24-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-24-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer012",
        url: "https://www.youtube.com/watch?v=mockTrailer012",
        embed_url: "https://www.youtube.com/embed/mockTrailer012"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 12"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 12"
        }
      ],
      title: "Naruto Mock 12",
      title_english: "Naruto Mock 12",
      title_japanese: "ナルト Mock 12",
      title_synonyms: [
        "Naruto Alternative 12"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2002-12-12T00:00:00+00:00",
        to: "2002-02-15T00:00:00+00:00",
        prop: {
          from: {
            day: 12,
            month: 12,
            year: 2002
          },
          to: {
            day: 15,
            month: 2,
            year: 2002
          },
          string: "2002-12-12 to 2002-02-15"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.14,
      scored_by: 97852,
      rank: 12,
      popularity: 112,
      members: 230000,
      favorites: 3916,
      synopsis: "Naruto Mock 12 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 12 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2002,
      broadcast: {
        day: "Fridays",
        time: "08:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1012,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1012/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2012,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2012/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3012,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3012/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4120,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4120/Adventure"
        },
        {
          mal_id: 4121,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4121/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5012,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5012/None"
        }
      ],
      themes: [
        {
          mal_id: 6120,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6120/Survival"
        },
        {
          mal_id: 6121,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6121/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7012,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7012/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1012,
              type: "anime",
              name: "Naruto Mock 12 Related",
              url: "https://myanimelist.net/anime/1012/Naruto_Mock_12_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 12"
        ],
        endings: [
          "Ending Theme 12"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/12"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 13,
      url: "https://myanimelist.net/anime/13/Fullmetal_Alchemist:_Brotherhood_Mock_13",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-25-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-25-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-25-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-26-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-26-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-26-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer013",
        url: "https://www.youtube.com/watch?v=mockTrailer013",
        embed_url: "https://www.youtube.com/embed/mockTrailer013"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 13"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 13"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 13",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 13",
      title_japanese: "鋼の錬金術師 Mock 13",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 13"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2003-01-13T00:00:00+00:00",
        to: "2003-03-16T00:00:00+00:00",
        prop: {
          from: {
            day: 13,
            month: 1,
            year: 2003
          },
          to: {
            day: 16,
            month: 3,
            year: 2003
          },
          string: "2003-01-13 to 2003-03-16"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.85,
      scored_by: 105173,
      rank: 13,
      popularity: 113,
      members: 245000,
      favorites: 4159,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 13 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 13 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2003,
      broadcast: {
        day: "Thursdays",
        time: "05:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1013,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1013/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2013,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2013/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3013,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3013/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4130,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4130/Adventure"
        },
        {
          mal_id: 4131,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4131/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5013,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5013/None"
        }
      ],
      themes: [
        {
          mal_id: 6130,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6130/Super_Power"
        },
        {
          mal_id: 6131,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6131/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7013,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7013/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1013,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 13 Related",
              url: "https://myanimelist.net/anime/1013/Fullmetal_Alchemist:_Brotherhood_Mock_13_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 13"
        ],
        endings: [
          "Ending Theme 13"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/13"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 14,
      url: "https://myanimelist.net/anime/14/Attack_on_Titan_Mock_14",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-27-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-27-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-27-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-28-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-28-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-28-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer014",
        url: "https://www.youtube.com/watch?v=mockTrailer014",
        embed_url: "https://www.youtube.com/embed/mockTrailer014"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 14"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 14"
        }
      ],
      title: "Attack on Titan Mock 14",
      title_english: "Attack on Titan Mock 14",
      title_japanese: "進撃の巨人 Mock 14",
      title_synonyms: [
        "Attack on Titan Alternative 14"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2004-02-14T00:00:00+00:00",
        to: "2004-04-17T00:00:00+00:00",
        prop: {
          from: {
            day: 14,
            month: 2,
            year: 2004
          },
          to: {
            day: 17,
            month: 4,
            year: 2004
          },
          string: "2004-02-14 to 2004-04-17"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.66,
      scored_by: 112494,
      rank: 14,
      popularity: 114,
      members: 260000,
      favorites: 4402,
      synopsis: "Attack on Titan Mock 14 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 14 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2004,
      broadcast: {
        day: "Saturdays",
        time: "15:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1014,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1014/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2014,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2014/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3014,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3014/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4140,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4140/Action"
        },
        {
          mal_id: 4141,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4141/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5014,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5014/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6140,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6140/Historical"
        },
        {
          mal_id: 6141,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6141/School"
        }
      ],
      demographics: [
        {
          mal_id: 7014,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7014/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1014,
              type: "anime",
              name: "Attack on Titan Mock 14 Related",
              url: "https://myanimelist.net/anime/1014/Attack_on_Titan_Mock_14_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 14"
        ],
        endings: [
          "Ending Theme 14"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/14"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 15,
      url: "https://myanimelist.net/anime/15/Death_Note_Mock_15",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-29-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-29-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-29-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-30-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-30-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-30-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer015",
        url: "https://www.youtube.com/watch?v=mockTrailer015",
        embed_url: "https://www.youtube.com/embed/mockTrailer015"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 15"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 15"
        }
      ],
      title: "Death Note Mock 15",
      title_english: "Death Note Mock 15",
      title_japanese: "デスノート Mock 15",
      title_synonyms: [
        "Death Note Alternative 15"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2005-03-15T00:00:00+00:00",
        to: "2005-05-18T00:00:00+00:00",
        prop: {
          from: {
            day: 15,
            month: 3,
            year: 2005
          },
          to: {
            day: 18,
            month: 5,
            year: 2005
          },
          string: "2005-03-15 to 2005-05-18"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.01,
      scored_by: 119815,
      rank: 15,
      popularity: 115,
      members: 275000,
      favorites: 4645,
      synopsis: "Death Note Mock 15 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 15 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2005,
      broadcast: {
        day: "Mondays",
        time: "15:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1015,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1015/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2015,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2015/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3015,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3015/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4150,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4150/Action"
        },
        {
          mal_id: 4151,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4151/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5015,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5015/None"
        }
      ],
      themes: [
        {
          mal_id: 6150,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6150/Military"
        },
        {
          mal_id: 6151,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6151/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7015,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7015/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1015,
              type: "anime",
              name: "Death Note Mock 15 Related",
              url: "https://myanimelist.net/anime/1015/Death_Note_Mock_15_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 15"
        ],
        endings: [
          "Ending Theme 15"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/15"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 16,
      url: "https://myanimelist.net/anime/16/One_Piece_Mock_16",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-31-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-31-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-31-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-32-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-32-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-32-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer016",
        url: "https://www.youtube.com/watch?v=mockTrailer016",
        embed_url: "https://www.youtube.com/embed/mockTrailer016"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 16"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 16"
        }
      ],
      title: "One Piece Mock 16",
      title_english: "One Piece Mock 16",
      title_japanese: "ワンピース Mock 16",
      title_synonyms: [
        "One Piece Alternative 16"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2006-04-16T00:00:00+00:00",
        to: "2006-06-19T00:00:00+00:00",
        prop: {
          from: {
            day: 16,
            month: 4,
            year: 2006
          },
          to: {
            day: 19,
            month: 6,
            year: 2006
          },
          string: "2006-04-16 to 2006-06-19"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.74,
      scored_by: 127136,
      rank: 16,
      popularity: 116,
      members: 290000,
      favorites: 4888,
      synopsis: "One Piece Mock 16 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 16 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2006,
      broadcast: {
        day: "Mondays",
        time: "14:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1016,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1016/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2016,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2016/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3016,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3016/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4160,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4160/Action"
        },
        {
          mal_id: 4161,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4161/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5016,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5016/None"
        }
      ],
      themes: [
        {
          mal_id: 6160,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6160/Team_Sports"
        },
        {
          mal_id: 6161,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6161/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7016,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7016/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1016,
              type: "anime",
              name: "One Piece Mock 16 Related",
              url: "https://myanimelist.net/anime/1016/One_Piece_Mock_16_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 16"
        ],
        endings: [
          "Ending Theme 16"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/16"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 17,
      url: "https://myanimelist.net/anime/17/Demon_Slayer_Mock_17",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-33-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-33-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-33-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-34-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-34-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-34-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer017",
        url: "https://www.youtube.com/watch?v=mockTrailer017",
        embed_url: "https://www.youtube.com/embed/mockTrailer017"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 17"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 17"
        }
      ],
      title: "Demon Slayer Mock 17",
      title_english: "Demon Slayer Mock 17",
      title_japanese: "鬼滅の刃 Mock 17",
      title_synonyms: [
        "Demon Slayer Alternative 17"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2007-05-17T00:00:00+00:00",
        to: "2007-07-20T00:00:00+00:00",
        prop: {
          from: {
            day: 17,
            month: 5,
            year: 2007
          },
          to: {
            day: 20,
            month: 7,
            year: 2007
          },
          string: "2007-05-17 to 2007-07-20"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.3,
      scored_by: 134457,
      rank: 17,
      popularity: 117,
      members: 305000,
      favorites: 5131,
      synopsis: "Demon Slayer Mock 17 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 17 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2007,
      broadcast: {
        day: "Thursdays",
        time: "13:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1017,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1017/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2017,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2017/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3017,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3017/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4170,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4170/Slice_of_Life"
        },
        {
          mal_id: 4171,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4171/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5017,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5017/None"
        }
      ],
      themes: [
        {
          mal_id: 6170,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6170/Historical"
        },
        {
          mal_id: 6171,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6171/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7017,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7017/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1017,
              type: "anime",
              name: "Demon Slayer Mock 17 Related",
              url: "https://myanimelist.net/anime/1017/Demon_Slayer_Mock_17_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 17"
        ],
        endings: [
          "Ending Theme 17"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/17"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 18,
      url: "https://myanimelist.net/anime/18/Jujutsu_Kaisen_Mock_18",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-35-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-35-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-35-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-36-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-36-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-36-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer018",
        url: "https://www.youtube.com/watch?v=mockTrailer018",
        embed_url: "https://www.youtube.com/embed/mockTrailer018"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 18"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 18"
        }
      ],
      title: "Jujutsu Kaisen Mock 18",
      title_english: "Jujutsu Kaisen Mock 18",
      title_japanese: "呪術廻戦 Mock 18",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 18"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2008-06-18T00:00:00+00:00",
        to: "2008-08-21T00:00:00+00:00",
        prop: {
          from: {
            day: 18,
            month: 6,
            year: 2008
          },
          to: {
            day: 21,
            month: 8,
            year: 2008
          },
          string: "2008-06-18 to 2008-08-21"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.2,
      scored_by: 141778,
      rank: 18,
      popularity: 118,
      members: 320000,
      favorites: 5374,
      synopsis: "Jujutsu Kaisen Mock 18 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 18 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2008,
      broadcast: {
        day: "Saturdays",
        time: "10:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1018,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1018/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2018,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2018/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3018,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3018/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4180,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4180/Mystery"
        },
        {
          mal_id: 4181,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4181/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5018,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5018/None"
        }
      ],
      themes: [
        {
          mal_id: 6180,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6180/Team_Sports"
        },
        {
          mal_id: 6181,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6181/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7018,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7018/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1018,
              type: "anime",
              name: "Jujutsu Kaisen Mock 18 Related",
              url: "https://myanimelist.net/anime/1018/Jujutsu_Kaisen_Mock_18_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 18"
        ],
        endings: [
          "Ending Theme 18"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/18"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 19,
      url: "https://myanimelist.net/anime/19/Steins;Gate_Mock_19",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-37-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-37-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-37-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-38-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-38-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-38-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer019",
        url: "https://www.youtube.com/watch?v=mockTrailer019",
        embed_url: "https://www.youtube.com/embed/mockTrailer019"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 19"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 19"
        }
      ],
      title: "Steins;Gate Mock 19",
      title_english: "Steins;Gate Mock 19",
      title_japanese: "シュタインズ・ゲート Mock 19",
      title_synonyms: [
        "Steins;Gate Alternative 19"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2009-07-19T00:00:00+00:00",
        to: "2009-09-22T00:00:00+00:00",
        prop: {
          from: {
            day: 19,
            month: 7,
            year: 2009
          },
          to: {
            day: 22,
            month: 9,
            year: 2009
          },
          string: "2009-07-19 to 2009-09-22"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.2,
      scored_by: 149099,
      rank: 19,
      popularity: 119,
      members: 335000,
      favorites: 5617,
      synopsis: "Steins;Gate Mock 19 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 19 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2009,
      broadcast: {
        day: "Thursdays",
        time: "07:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1019,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1019/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2019,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2019/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3019,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3019/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4190,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4190/Supernatural"
        },
        {
          mal_id: 4191,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4191/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5019,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5019/None"
        }
      ],
      themes: [
        {
          mal_id: 6190,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6190/Team_Sports"
        },
        {
          mal_id: 6191,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6191/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7019,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7019/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1019,
              type: "anime",
              name: "Steins;Gate Mock 19 Related",
              url: "https://myanimelist.net/anime/1019/Steins;Gate_Mock_19_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 19"
        ],
        endings: [
          "Ending Theme 19"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/19"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 20,
      url: "https://myanimelist.net/anime/20/Vinland_Saga_Mock_20",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-39-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-39-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-39-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-40-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-40-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-40-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer020",
        url: "https://www.youtube.com/watch?v=mockTrailer020",
        embed_url: "https://www.youtube.com/embed/mockTrailer020"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 20"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 20"
        }
      ],
      title: "Vinland Saga Mock 20",
      title_english: "Vinland Saga Mock 20",
      title_japanese: "ヴィンランド・サガ Mock 20",
      title_synonyms: [
        "Vinland Saga Alternative 20"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2010-08-20T00:00:00+00:00",
        to: "2010-10-23T00:00:00+00:00",
        prop: {
          from: {
            day: 20,
            month: 8,
            year: 2010
          },
          to: {
            day: 23,
            month: 10,
            year: 2010
          },
          string: "2010-08-20 to 2010-10-23"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.94,
      scored_by: 156420,
      rank: 20,
      popularity: 120,
      members: 350000,
      favorites: 5860,
      synopsis: "Vinland Saga Mock 20 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 20 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2010,
      broadcast: {
        day: "Tuesdays",
        time: "06:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1020,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1020/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2020,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2020/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3020,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3020/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4200,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4200/Comedy"
        },
        {
          mal_id: 4201,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4201/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5020,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5020/None"
        }
      ],
      themes: [
        {
          mal_id: 6200,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6200/Space"
        },
        {
          mal_id: 6201,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6201/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7020,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7020/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1020,
              type: "anime",
              name: "Vinland Saga Mock 20 Related",
              url: "https://myanimelist.net/anime/1020/Vinland_Saga_Mock_20_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 20"
        ],
        endings: [
          "Ending Theme 20"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/20"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 21,
      url: "https://myanimelist.net/anime/21/Cowboy_Bebop_Mock_21",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-41-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-41-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-41-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-42-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-42-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-42-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer021",
        url: "https://www.youtube.com/watch?v=mockTrailer021",
        embed_url: "https://www.youtube.com/embed/mockTrailer021"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 21"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 21"
        }
      ],
      title: "Cowboy Bebop Mock 21",
      title_english: "Cowboy Bebop Mock 21",
      title_japanese: "カウボーイビバップ Mock 21",
      title_synonyms: [
        "Cowboy Bebop Alternative 21"
      ],
      type: "TV",
      source: "Original",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-09-21T00:00:00+00:00",
        to: "2011-11-24T00:00:00+00:00",
        prop: {
          from: {
            day: 21,
            month: 9,
            year: 2011
          },
          to: {
            day: 24,
            month: 11,
            year: 2011
          },
          string: "2011-09-21 to 2011-11-24"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.7,
      scored_by: 163741,
      rank: 21,
      popularity: 121,
      members: 365000,
      favorites: 6103,
      synopsis: "Cowboy Bebop Mock 21 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 21 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2011,
      broadcast: {
        day: "Saturdays",
        time: "18:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1021,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1021/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2021,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2021/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3021,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3021/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4210,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4210/Adventure"
        },
        {
          mal_id: 4211,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4211/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5021,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5021/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6210,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6210/Time_Travel"
        },
        {
          mal_id: 6211,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6211/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7021,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7021/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1021,
              type: "anime",
              name: "Cowboy Bebop Mock 21 Related",
              url: "https://myanimelist.net/anime/1021/Cowboy_Bebop_Mock_21_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 21"
        ],
        endings: [
          "Ending Theme 21"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/21"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 22,
      url: "https://myanimelist.net/anime/22/Naruto_Mock_22",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-43-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-43-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-43-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-44-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-44-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-44-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer022",
        url: "https://www.youtube.com/watch?v=mockTrailer022",
        embed_url: "https://www.youtube.com/embed/mockTrailer022"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 22"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 22"
        }
      ],
      title: "Naruto Mock 22",
      title_english: "Naruto Mock 22",
      title_japanese: "ナルト Mock 22",
      title_synonyms: [
        "Naruto Alternative 22"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2012-10-22T00:00:00+00:00",
        to: "2012-12-25T00:00:00+00:00",
        prop: {
          from: {
            day: 22,
            month: 10,
            year: 2012
          },
          to: {
            day: 25,
            month: 12,
            year: 2012
          },
          string: "2012-10-22 to 2012-12-25"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 9.05,
      scored_by: 171062,
      rank: 22,
      popularity: 122,
      members: 380000,
      favorites: 6346,
      synopsis: "Naruto Mock 22 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 22 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2012,
      broadcast: {
        day: "Tuesdays",
        time: "20:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1022,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1022/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2022,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2022/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3022,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3022/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4220,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4220/Sci-Fi"
        },
        {
          mal_id: 4221,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4221/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5022,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5022/None"
        }
      ],
      themes: [
        {
          mal_id: 6220,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6220/Space"
        },
        {
          mal_id: 6221,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6221/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7022,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7022/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1022,
              type: "anime",
              name: "Naruto Mock 22 Related",
              url: "https://myanimelist.net/anime/1022/Naruto_Mock_22_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 22"
        ],
        endings: [
          "Ending Theme 22"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/22"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 23,
      url: "https://myanimelist.net/anime/23/Fullmetal_Alchemist:_Brotherhood_Mock_23",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-45-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-45-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-45-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-46-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-46-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-46-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer023",
        url: "https://www.youtube.com/watch?v=mockTrailer023",
        embed_url: "https://www.youtube.com/embed/mockTrailer023"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 23"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 23"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 23",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 23",
      title_japanese: "鋼の錬金術師 Mock 23",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 23"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2013-11-23T00:00:00+00:00",
        to: "2013-01-26T00:00:00+00:00",
        prop: {
          from: {
            day: 23,
            month: 11,
            year: 2013
          },
          to: {
            day: 26,
            month: 1,
            year: 2013
          },
          string: "2013-11-23 to 2013-01-26"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 9.28,
      scored_by: 178383,
      rank: 23,
      popularity: 123,
      members: 395000,
      favorites: 6589,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 23 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 23 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2013,
      broadcast: {
        day: "Wednesdays",
        time: "16:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1023,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1023/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2023,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2023/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3023,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3023/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4230,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4230/Mystery"
        },
        {
          mal_id: 4231,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4231/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5023,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5023/None"
        }
      ],
      themes: [
        {
          mal_id: 6230,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6230/School"
        },
        {
          mal_id: 6231,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6231/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7023,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7023/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1023,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 23 Related",
              url: "https://myanimelist.net/anime/1023/Fullmetal_Alchemist:_Brotherhood_Mock_23_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 23"
        ],
        endings: [
          "Ending Theme 23"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/23"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 24,
      url: "https://myanimelist.net/anime/24/Attack_on_Titan_Mock_24",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-47-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-47-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-47-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-48-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-48-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-48-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer024",
        url: "https://www.youtube.com/watch?v=mockTrailer024",
        embed_url: "https://www.youtube.com/embed/mockTrailer024"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 24"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 24"
        }
      ],
      title: "Attack on Titan Mock 24",
      title_english: "Attack on Titan Mock 24",
      title_japanese: "進撃の巨人 Mock 24",
      title_synonyms: [
        "Attack on Titan Alternative 24"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2014-12-24T00:00:00+00:00",
        to: "2014-02-27T00:00:00+00:00",
        prop: {
          from: {
            day: 24,
            month: 12,
            year: 2014
          },
          to: {
            day: 27,
            month: 2,
            year: 2014
          },
          string: "2014-12-24 to 2014-02-27"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 9.26,
      scored_by: 185704,
      rank: 24,
      popularity: 124,
      members: 410000,
      favorites: 6832,
      synopsis: "Attack on Titan Mock 24 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 24 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2014,
      broadcast: {
        day: "Thursdays",
        time: "14:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1024,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1024/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2024,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2024/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3024,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3024/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4240,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4240/Supernatural"
        },
        {
          mal_id: 4241,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4241/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5024,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5024/None"
        }
      ],
      themes: [
        {
          mal_id: 6240,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6240/Space"
        },
        {
          mal_id: 6241,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6241/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7024,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7024/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1024,
              type: "anime",
              name: "Attack on Titan Mock 24 Related",
              url: "https://myanimelist.net/anime/1024/Attack_on_Titan_Mock_24_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 24"
        ],
        endings: [
          "Ending Theme 24"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/24"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 25,
      url: "https://myanimelist.net/anime/25/Death_Note_Mock_25",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-49-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-49-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-49-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-50-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-50-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-50-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer025",
        url: "https://www.youtube.com/watch?v=mockTrailer025",
        embed_url: "https://www.youtube.com/embed/mockTrailer025"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 25"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 25"
        }
      ],
      title: "Death Note Mock 25",
      title_english: "Death Note Mock 25",
      title_japanese: "デスノート Mock 25",
      title_synonyms: [
        "Death Note Alternative 25"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2015-01-25T00:00:00+00:00",
        to: "2015-03-28T00:00:00+00:00",
        prop: {
          from: {
            day: 25,
            month: 1,
            year: 2015
          },
          to: {
            day: 28,
            month: 3,
            year: 2015
          },
          string: "2015-01-25 to 2015-03-28"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.57,
      scored_by: 193025,
      rank: 25,
      popularity: 125,
      members: 425000,
      favorites: 7075,
      synopsis: "Death Note Mock 25 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 25 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2015,
      broadcast: {
        day: "Tuesdays",
        time: "03:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1025,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1025/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2025,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2025/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3025,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3025/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4250,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4250/Action"
        },
        {
          mal_id: 4251,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4251/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5025,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5025/None"
        }
      ],
      themes: [
        {
          mal_id: 6250,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6250/Martial_Arts"
        },
        {
          mal_id: 6251,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6251/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7025,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7025/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1025,
              type: "anime",
              name: "Death Note Mock 25 Related",
              url: "https://myanimelist.net/anime/1025/Death_Note_Mock_25_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 25"
        ],
        endings: [
          "Ending Theme 25"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/25"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 26,
      url: "https://myanimelist.net/anime/26/One_Piece_Mock_26",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-51-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-51-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-51-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-52-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-52-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-52-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer026",
        url: "https://www.youtube.com/watch?v=mockTrailer026",
        embed_url: "https://www.youtube.com/embed/mockTrailer026"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 26"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 26"
        }
      ],
      title: "One Piece Mock 26",
      title_english: "One Piece Mock 26",
      title_japanese: "ワンピース Mock 26",
      title_synonyms: [
        "One Piece Alternative 26"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2016-02-26T00:00:00+00:00",
        to: "2016-04-28T00:00:00+00:00",
        prop: {
          from: {
            day: 26,
            month: 2,
            year: 2016
          },
          to: {
            day: 28,
            month: 4,
            year: 2016
          },
          string: "2016-02-26 to 2016-04-28"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.21,
      scored_by: 200346,
      rank: 26,
      popularity: 126,
      members: 440000,
      favorites: 7318,
      synopsis: "One Piece Mock 26 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 26 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2016,
      broadcast: {
        day: "Fridays",
        time: "07:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1026,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1026/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2026,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2026/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3026,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3026/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4260,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4260/Comedy"
        },
        {
          mal_id: 4261,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4261/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5026,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5026/None"
        }
      ],
      themes: [
        {
          mal_id: 6260,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6260/Martial_Arts"
        },
        {
          mal_id: 6261,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6261/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7026,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7026/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1026,
              type: "anime",
              name: "One Piece Mock 26 Related",
              url: "https://myanimelist.net/anime/1026/One_Piece_Mock_26_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 26"
        ],
        endings: [
          "Ending Theme 26"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/26"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 27,
      url: "https://myanimelist.net/anime/27/Demon_Slayer_Mock_27",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-53-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-53-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-53-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-54-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-54-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-54-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer027",
        url: "https://www.youtube.com/watch?v=mockTrailer027",
        embed_url: "https://www.youtube.com/embed/mockTrailer027"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 27"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 27"
        }
      ],
      title: "Demon Slayer Mock 27",
      title_english: "Demon Slayer Mock 27",
      title_japanese: "鬼滅の刃 Mock 27",
      title_synonyms: [
        "Demon Slayer Alternative 27"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2017-03-27T00:00:00+00:00",
        to: "2017-05-28T00:00:00+00:00",
        prop: {
          from: {
            day: 27,
            month: 3,
            year: 2017
          },
          to: {
            day: 28,
            month: 5,
            year: 2017
          },
          string: "2017-03-27 to 2017-05-28"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.45,
      scored_by: 207667,
      rank: 27,
      popularity: 127,
      members: 455000,
      favorites: 7561,
      synopsis: "Demon Slayer Mock 27 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 27 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2017,
      broadcast: {
        day: "Wednesdays",
        time: "23:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1027,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1027/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2027,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2027/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3027,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3027/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4270,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4270/Drama"
        },
        {
          mal_id: 4271,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4271/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5027,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5027/None"
        }
      ],
      themes: [
        {
          mal_id: 6270,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6270/Team_Sports"
        },
        {
          mal_id: 6271,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6271/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7027,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7027/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1027,
              type: "anime",
              name: "Demon Slayer Mock 27 Related",
              url: "https://myanimelist.net/anime/1027/Demon_Slayer_Mock_27_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 27"
        ],
        endings: [
          "Ending Theme 27"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/27"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 28,
      url: "https://myanimelist.net/anime/28/Jujutsu_Kaisen_Mock_28",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-55-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-55-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-55-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-56-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-56-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-56-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer028",
        url: "https://www.youtube.com/watch?v=mockTrailer028",
        embed_url: "https://www.youtube.com/embed/mockTrailer028"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 28"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 28"
        }
      ],
      title: "Jujutsu Kaisen Mock 28",
      title_english: "Jujutsu Kaisen Mock 28",
      title_japanese: "呪術廻戦 Mock 28",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 28"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2018-04-01T00:00:00+00:00",
        to: "2018-06-04T00:00:00+00:00",
        prop: {
          from: {
            day: 1,
            month: 4,
            year: 2018
          },
          to: {
            day: 4,
            month: 6,
            year: 2018
          },
          string: "2018-04-01 to 2018-06-04"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.59,
      scored_by: 214988,
      rank: 28,
      popularity: 128,
      members: 470000,
      favorites: 7804,
      synopsis: "Jujutsu Kaisen Mock 28 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 28 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2018,
      broadcast: {
        day: "Mondays",
        time: "03:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1028,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1028/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2028,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2028/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3028,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3028/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4280,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4280/Mystery"
        },
        {
          mal_id: 4281,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4281/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5028,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5028/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6280,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6280/Space"
        },
        {
          mal_id: 6281,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6281/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7028,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7028/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1028,
              type: "anime",
              name: "Jujutsu Kaisen Mock 28 Related",
              url: "https://myanimelist.net/anime/1028/Jujutsu_Kaisen_Mock_28_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 28"
        ],
        endings: [
          "Ending Theme 28"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/28"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 29,
      url: "https://myanimelist.net/anime/29/Steins;Gate_Mock_29",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-57-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-57-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-57-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-58-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-58-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-58-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer029",
        url: "https://www.youtube.com/watch?v=mockTrailer029",
        embed_url: "https://www.youtube.com/embed/mockTrailer029"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 29"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 29"
        }
      ],
      title: "Steins;Gate Mock 29",
      title_english: "Steins;Gate Mock 29",
      title_japanese: "シュタインズ・ゲート Mock 29",
      title_synonyms: [
        "Steins;Gate Alternative 29"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2019-05-02T00:00:00+00:00",
        to: "2019-07-05T00:00:00+00:00",
        prop: {
          from: {
            day: 2,
            month: 5,
            year: 2019
          },
          to: {
            day: 5,
            month: 7,
            year: 2019
          },
          string: "2019-05-02 to 2019-07-05"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.09,
      scored_by: 222309,
      rank: 29,
      popularity: 129,
      members: 485000,
      favorites: 8047,
      synopsis: "Steins;Gate Mock 29 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 29 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2019,
      broadcast: {
        day: "Tuesdays",
        time: "21:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1029,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1029/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2029,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2029/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3029,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3029/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4290,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4290/Sci-Fi"
        },
        {
          mal_id: 4291,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4291/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5029,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5029/None"
        }
      ],
      themes: [
        {
          mal_id: 6290,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6290/Psychological"
        },
        {
          mal_id: 6291,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6291/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7029,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7029/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1029,
              type: "anime",
              name: "Steins;Gate Mock 29 Related",
              url: "https://myanimelist.net/anime/1029/Steins;Gate_Mock_29_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 29"
        ],
        endings: [
          "Ending Theme 29"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/29"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 30,
      url: "https://myanimelist.net/anime/30/Vinland_Saga_Mock_30",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-59-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-59-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-59-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-60-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-60-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-60-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer030",
        url: "https://www.youtube.com/watch?v=mockTrailer030",
        embed_url: "https://www.youtube.com/embed/mockTrailer030"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 30"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 30"
        }
      ],
      title: "Vinland Saga Mock 30",
      title_english: "Vinland Saga Mock 30",
      title_japanese: "ヴィンランド・サガ Mock 30",
      title_synonyms: [
        "Vinland Saga Alternative 30"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2020-06-03T00:00:00+00:00",
        to: "2020-08-06T00:00:00+00:00",
        prop: {
          from: {
            day: 3,
            month: 6,
            year: 2020
          },
          to: {
            day: 6,
            month: 8,
            year: 2020
          },
          string: "2020-06-03 to 2020-08-06"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.73,
      scored_by: 229630,
      rank: 30,
      popularity: 130,
      members: 500000,
      favorites: 8290,
      synopsis: "Vinland Saga Mock 30 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 30 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2020,
      broadcast: {
        day: "Mondays",
        time: "10:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1030,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1030/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2030,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2030/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3030,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3030/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4300,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4300/Fantasy"
        },
        {
          mal_id: 4301,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4301/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5030,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5030/None"
        }
      ],
      themes: [
        {
          mal_id: 6300,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6300/Time_Travel"
        },
        {
          mal_id: 6301,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6301/School"
        }
      ],
      demographics: [
        {
          mal_id: 7030,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7030/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1030,
              type: "anime",
              name: "Vinland Saga Mock 30 Related",
              url: "https://myanimelist.net/anime/1030/Vinland_Saga_Mock_30_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 30"
        ],
        endings: [
          "Ending Theme 30"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/30"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 31,
      url: "https://myanimelist.net/anime/31/Cowboy_Bebop_Mock_31",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-61-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-61-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-61-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-62-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-62-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-62-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer031",
        url: "https://www.youtube.com/watch?v=mockTrailer031",
        embed_url: "https://www.youtube.com/embed/mockTrailer031"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 31"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 31"
        }
      ],
      title: "Cowboy Bebop Mock 31",
      title_english: "Cowboy Bebop Mock 31",
      title_japanese: "カウボーイビバップ Mock 31",
      title_synonyms: [
        "Cowboy Bebop Alternative 31"
      ],
      type: "TV",
      source: "Original",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2021-07-04T00:00:00+00:00",
        to: "2021-09-07T00:00:00+00:00",
        prop: {
          from: {
            day: 4,
            month: 7,
            year: 2021
          },
          to: {
            day: 7,
            month: 9,
            year: 2021
          },
          string: "2021-07-04 to 2021-09-07"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 9.21,
      scored_by: 236951,
      rank: 31,
      popularity: 131,
      members: 515000,
      favorites: 8533,
      synopsis: "Cowboy Bebop Mock 31 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 31 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2021,
      broadcast: {
        day: "Thursdays",
        time: "18:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1031,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1031/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2031,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2031/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3031,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3031/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4310,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4310/Fantasy"
        },
        {
          mal_id: 4311,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4311/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5031,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5031/None"
        }
      ],
      themes: [
        {
          mal_id: 6310,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6310/Martial_Arts"
        },
        {
          mal_id: 6311,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6311/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7031,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7031/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1031,
              type: "anime",
              name: "Cowboy Bebop Mock 31 Related",
              url: "https://myanimelist.net/anime/1031/Cowboy_Bebop_Mock_31_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 31"
        ],
        endings: [
          "Ending Theme 31"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/31"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 32,
      url: "https://myanimelist.net/anime/32/Naruto_Mock_32",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-63-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-63-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-63-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-64-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-64-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-64-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer032",
        url: "https://www.youtube.com/watch?v=mockTrailer032",
        embed_url: "https://www.youtube.com/embed/mockTrailer032"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 32"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 32"
        }
      ],
      title: "Naruto Mock 32",
      title_english: "Naruto Mock 32",
      title_japanese: "ナルト Mock 32",
      title_synonyms: [
        "Naruto Alternative 32"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2022-08-05T00:00:00+00:00",
        to: "2022-10-08T00:00:00+00:00",
        prop: {
          from: {
            day: 5,
            month: 8,
            year: 2022
          },
          to: {
            day: 8,
            month: 10,
            year: 2022
          },
          string: "2022-08-05 to 2022-10-08"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 9.14,
      scored_by: 244272,
      rank: 32,
      popularity: 132,
      members: 530000,
      favorites: 8776,
      synopsis: "Naruto Mock 32 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 32 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2022,
      broadcast: {
        day: "Fridays",
        time: "18:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1032,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1032/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2032,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2032/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3032,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3032/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4320,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4320/Action"
        },
        {
          mal_id: 4321,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4321/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5032,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5032/None"
        }
      ],
      themes: [
        {
          mal_id: 6320,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6320/Space"
        },
        {
          mal_id: 6321,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6321/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7032,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7032/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1032,
              type: "anime",
              name: "Naruto Mock 32 Related",
              url: "https://myanimelist.net/anime/1032/Naruto_Mock_32_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 32"
        ],
        endings: [
          "Ending Theme 32"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/32"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 33,
      url: "https://myanimelist.net/anime/33/Fullmetal_Alchemist:_Brotherhood_Mock_33",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-65-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-65-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-65-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-66-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-66-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-66-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer033",
        url: "https://www.youtube.com/watch?v=mockTrailer033",
        embed_url: "https://www.youtube.com/embed/mockTrailer033"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 33"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 33"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 33",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 33",
      title_japanese: "鋼の錬金術師 Mock 33",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 33"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2023-09-06T00:00:00+00:00",
        to: "2023-11-09T00:00:00+00:00",
        prop: {
          from: {
            day: 6,
            month: 9,
            year: 2023
          },
          to: {
            day: 9,
            month: 11,
            year: 2023
          },
          string: "2023-09-06 to 2023-11-09"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.29,
      scored_by: 251593,
      rank: 33,
      popularity: 133,
      members: 545000,
      favorites: 9019,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 33 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 33 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2023,
      broadcast: {
        day: "Saturdays",
        time: "09:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1033,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1033/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2033,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2033/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3033,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3033/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4330,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4330/Sci-Fi"
        },
        {
          mal_id: 4331,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4331/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5033,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5033/None"
        }
      ],
      themes: [
        {
          mal_id: 6330,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6330/Historical"
        },
        {
          mal_id: 6331,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6331/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7033,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7033/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1033,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 33 Related",
              url: "https://myanimelist.net/anime/1033/Fullmetal_Alchemist:_Brotherhood_Mock_33_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 33"
        ],
        endings: [
          "Ending Theme 33"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/33"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 34,
      url: "https://myanimelist.net/anime/34/Attack_on_Titan_Mock_34",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-67-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-67-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-67-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-68-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-68-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-68-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer034",
        url: "https://www.youtube.com/watch?v=mockTrailer034",
        embed_url: "https://www.youtube.com/embed/mockTrailer034"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 34"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 34"
        }
      ],
      title: "Attack on Titan Mock 34",
      title_english: "Attack on Titan Mock 34",
      title_japanese: "進撃の巨人 Mock 34",
      title_synonyms: [
        "Attack on Titan Alternative 34"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2024-10-07T00:00:00+00:00",
        to: "2024-12-10T00:00:00+00:00",
        prop: {
          from: {
            day: 7,
            month: 10,
            year: 2024
          },
          to: {
            day: 10,
            month: 12,
            year: 2024
          },
          string: "2024-10-07 to 2024-12-10"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.47,
      scored_by: 258914,
      rank: 34,
      popularity: 134,
      members: 560000,
      favorites: 9262,
      synopsis: "Attack on Titan Mock 34 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 34 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2024,
      broadcast: {
        day: "Wednesdays",
        time: "10:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1034,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1034/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2034,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2034/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3034,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3034/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4340,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4340/Action"
        },
        {
          mal_id: 4341,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4341/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5034,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5034/None"
        }
      ],
      themes: [
        {
          mal_id: 6340,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6340/Martial_Arts"
        },
        {
          mal_id: 6341,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6341/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7034,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7034/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1034,
              type: "anime",
              name: "Attack on Titan Mock 34 Related",
              url: "https://myanimelist.net/anime/1034/Attack_on_Titan_Mock_34_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 34"
        ],
        endings: [
          "Ending Theme 34"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/34"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 35,
      url: "https://myanimelist.net/anime/35/Death_Note_Mock_35",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-69-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-69-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-69-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-70-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-70-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-70-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer035",
        url: "https://www.youtube.com/watch?v=mockTrailer035",
        embed_url: "https://www.youtube.com/embed/mockTrailer035"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 35"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 35"
        }
      ],
      title: "Death Note Mock 35",
      title_english: "Death Note Mock 35",
      title_japanese: "デスノート Mock 35",
      title_synonyms: [
        "Death Note Alternative 35"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "1990-11-08T00:00:00+00:00",
        to: "1990-01-11T00:00:00+00:00",
        prop: {
          from: {
            day: 8,
            month: 11,
            year: 1990
          },
          to: {
            day: 11,
            month: 1,
            year: 1990
          },
          string: "1990-11-08 to 1990-01-11"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.15,
      scored_by: 266235,
      rank: 35,
      popularity: 135,
      members: 575000,
      favorites: 9505,
      synopsis: "Death Note Mock 35 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 35 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1990,
      broadcast: {
        day: "Tuesdays",
        time: "08:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1035,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1035/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2035,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2035/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3035,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3035/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4350,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4350/Slice_of_Life"
        },
        {
          mal_id: 4351,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4351/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5035,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5035/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6350,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6350/School"
        },
        {
          mal_id: 6351,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6351/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7035,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7035/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1035,
              type: "anime",
              name: "Death Note Mock 35 Related",
              url: "https://myanimelist.net/anime/1035/Death_Note_Mock_35_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 35"
        ],
        endings: [
          "Ending Theme 35"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/35"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 36,
      url: "https://myanimelist.net/anime/36/One_Piece_Mock_36",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-71-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-71-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-71-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-72-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-72-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-72-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer036",
        url: "https://www.youtube.com/watch?v=mockTrailer036",
        embed_url: "https://www.youtube.com/embed/mockTrailer036"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 36"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 36"
        }
      ],
      title: "One Piece Mock 36",
      title_english: "One Piece Mock 36",
      title_japanese: "ワンピース Mock 36",
      title_synonyms: [
        "One Piece Alternative 36"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1991-12-09T00:00:00+00:00",
        to: "1991-02-12T00:00:00+00:00",
        prop: {
          from: {
            day: 9,
            month: 12,
            year: 1991
          },
          to: {
            day: 12,
            month: 2,
            year: 1991
          },
          string: "1991-12-09 to 1991-02-12"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.22,
      scored_by: 273556,
      rank: 36,
      popularity: 136,
      members: 590000,
      favorites: 9748,
      synopsis: "One Piece Mock 36 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 36 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1991,
      broadcast: {
        day: "Saturdays",
        time: "12:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1036,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1036/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2036,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2036/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3036,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3036/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4360,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4360/Fantasy"
        },
        {
          mal_id: 4361,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4361/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5036,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5036/None"
        }
      ],
      themes: [
        {
          mal_id: 6360,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6360/School"
        },
        {
          mal_id: 6361,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6361/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7036,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7036/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1036,
              type: "anime",
              name: "One Piece Mock 36 Related",
              url: "https://myanimelist.net/anime/1036/One_Piece_Mock_36_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 36"
        ],
        endings: [
          "Ending Theme 36"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/36"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 37,
      url: "https://myanimelist.net/anime/37/Demon_Slayer_Mock_37",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-73-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-73-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-73-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-74-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-74-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-74-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer037",
        url: "https://www.youtube.com/watch?v=mockTrailer037",
        embed_url: "https://www.youtube.com/embed/mockTrailer037"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 37"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 37"
        }
      ],
      title: "Demon Slayer Mock 37",
      title_english: "Demon Slayer Mock 37",
      title_japanese: "鬼滅の刃 Mock 37",
      title_synonyms: [
        "Demon Slayer Alternative 37"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1992-01-10T00:00:00+00:00",
        to: "1992-03-13T00:00:00+00:00",
        prop: {
          from: {
            day: 10,
            month: 1,
            year: 1992
          },
          to: {
            day: 13,
            month: 3,
            year: 1992
          },
          string: "1992-01-10 to 1992-03-13"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 7.39,
      scored_by: 280877,
      rank: 37,
      popularity: 137,
      members: 605000,
      favorites: 9991,
      synopsis: "Demon Slayer Mock 37 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 37 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1992,
      broadcast: {
        day: "Saturdays",
        time: "20:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1037,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1037/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2037,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2037/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3037,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3037/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4370,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4370/Fantasy"
        },
        {
          mal_id: 4371,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4371/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5037,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5037/None"
        }
      ],
      themes: [
        {
          mal_id: 6370,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6370/Super_Power"
        },
        {
          mal_id: 6371,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6371/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7037,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7037/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1037,
              type: "anime",
              name: "Demon Slayer Mock 37 Related",
              url: "https://myanimelist.net/anime/1037/Demon_Slayer_Mock_37_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 37"
        ],
        endings: [
          "Ending Theme 37"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/37"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 38,
      url: "https://myanimelist.net/anime/38/Jujutsu_Kaisen_Mock_38",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-75-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-75-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-75-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-76-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-76-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-76-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer038",
        url: "https://www.youtube.com/watch?v=mockTrailer038",
        embed_url: "https://www.youtube.com/embed/mockTrailer038"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 38"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 38"
        }
      ],
      title: "Jujutsu Kaisen Mock 38",
      title_english: "Jujutsu Kaisen Mock 38",
      title_japanese: "呪術廻戦 Mock 38",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 38"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1993-02-11T00:00:00+00:00",
        to: "1993-04-14T00:00:00+00:00",
        prop: {
          from: {
            day: 11,
            month: 2,
            year: 1993
          },
          to: {
            day: 14,
            month: 4,
            year: 1993
          },
          string: "1993-02-11 to 1993-04-14"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.92,
      scored_by: 288198,
      rank: 38,
      popularity: 138,
      members: 620000,
      favorites: 10234,
      synopsis: "Jujutsu Kaisen Mock 38 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 38 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1993,
      broadcast: {
        day: "Thursdays",
        time: "11:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1038,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1038/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2038,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2038/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3038,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3038/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4380,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4380/Mystery"
        },
        {
          mal_id: 4381,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4381/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5038,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5038/None"
        }
      ],
      themes: [
        {
          mal_id: 6380,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6380/Historical"
        },
        {
          mal_id: 6381,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6381/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7038,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7038/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1038,
              type: "anime",
              name: "Jujutsu Kaisen Mock 38 Related",
              url: "https://myanimelist.net/anime/1038/Jujutsu_Kaisen_Mock_38_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 38"
        ],
        endings: [
          "Ending Theme 38"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/38"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 39,
      url: "https://myanimelist.net/anime/39/Steins;Gate_Mock_39",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-77-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-77-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-77-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-78-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-78-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-78-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer039",
        url: "https://www.youtube.com/watch?v=mockTrailer039",
        embed_url: "https://www.youtube.com/embed/mockTrailer039"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 39"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 39"
        }
      ],
      title: "Steins;Gate Mock 39",
      title_english: "Steins;Gate Mock 39",
      title_japanese: "シュタインズ・ゲート Mock 39",
      title_synonyms: [
        "Steins;Gate Alternative 39"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1994-03-12T00:00:00+00:00",
        to: "1994-05-15T00:00:00+00:00",
        prop: {
          from: {
            day: 12,
            month: 3,
            year: 1994
          },
          to: {
            day: 15,
            month: 5,
            year: 1994
          },
          string: "1994-03-12 to 1994-05-15"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.66,
      scored_by: 295519,
      rank: 39,
      popularity: 139,
      members: 635000,
      favorites: 10477,
      synopsis: "Steins;Gate Mock 39 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 39 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1994,
      broadcast: {
        day: "Fridays",
        time: "16:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1039,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1039/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2039,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2039/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3039,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3039/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4390,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4390/Comedy"
        },
        {
          mal_id: 4391,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4391/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5039,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5039/None"
        }
      ],
      themes: [
        {
          mal_id: 6390,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6390/School"
        },
        {
          mal_id: 6391,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6391/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7039,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7039/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1039,
              type: "anime",
              name: "Steins;Gate Mock 39 Related",
              url: "https://myanimelist.net/anime/1039/Steins;Gate_Mock_39_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 39"
        ],
        endings: [
          "Ending Theme 39"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/39"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 40,
      url: "https://myanimelist.net/anime/40/Vinland_Saga_Mock_40",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-79-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-79-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-79-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-80-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-80-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-80-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer040",
        url: "https://www.youtube.com/watch?v=mockTrailer040",
        embed_url: "https://www.youtube.com/embed/mockTrailer040"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 40"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 40"
        }
      ],
      title: "Vinland Saga Mock 40",
      title_english: "Vinland Saga Mock 40",
      title_japanese: "ヴィンランド・サガ Mock 40",
      title_synonyms: [
        "Vinland Saga Alternative 40"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "1995-04-13T00:00:00+00:00",
        to: "1995-06-16T00:00:00+00:00",
        prop: {
          from: {
            day: 13,
            month: 4,
            year: 1995
          },
          to: {
            day: 16,
            month: 6,
            year: 1995
          },
          string: "1995-04-13 to 1995-06-16"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.15,
      scored_by: 302840,
      rank: 40,
      popularity: 140,
      members: 650000,
      favorites: 10720,
      synopsis: "Vinland Saga Mock 40 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 40 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 1995,
      broadcast: {
        day: "Tuesdays",
        time: "21:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1040,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1040/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2040,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2040/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3040,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3040/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4400,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4400/Comedy"
        },
        {
          mal_id: 4401,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4401/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5040,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5040/None"
        }
      ],
      themes: [
        {
          mal_id: 6400,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6400/Super_Power"
        },
        {
          mal_id: 6401,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6401/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7040,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7040/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1040,
              type: "anime",
              name: "Vinland Saga Mock 40 Related",
              url: "https://myanimelist.net/anime/1040/Vinland_Saga_Mock_40_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 40"
        ],
        endings: [
          "Ending Theme 40"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/40"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 41,
      url: "https://myanimelist.net/anime/41/Cowboy_Bebop_Mock_41",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-81-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-81-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-81-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-82-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-82-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-82-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer041",
        url: "https://www.youtube.com/watch?v=mockTrailer041",
        embed_url: "https://www.youtube.com/embed/mockTrailer041"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 41"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 41"
        }
      ],
      title: "Cowboy Bebop Mock 41",
      title_english: "Cowboy Bebop Mock 41",
      title_japanese: "カウボーイビバップ Mock 41",
      title_synonyms: [
        "Cowboy Bebop Alternative 41"
      ],
      type: "TV",
      source: "Original",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1996-05-14T00:00:00+00:00",
        to: "1996-07-17T00:00:00+00:00",
        prop: {
          from: {
            day: 14,
            month: 5,
            year: 1996
          },
          to: {
            day: 17,
            month: 7,
            year: 1996
          },
          string: "1996-05-14 to 1996-07-17"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 7.5,
      scored_by: 310161,
      rank: 41,
      popularity: 141,
      members: 665000,
      favorites: 10963,
      synopsis: "Cowboy Bebop Mock 41 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 41 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1996,
      broadcast: {
        day: "Sundays",
        time: "17:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1041,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1041/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2041,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2041/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3041,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3041/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4410,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4410/Action"
        },
        {
          mal_id: 4411,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4411/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5041,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5041/None"
        }
      ],
      themes: [
        {
          mal_id: 6410,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6410/Historical"
        },
        {
          mal_id: 6411,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6411/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7041,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7041/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1041,
              type: "anime",
              name: "Cowboy Bebop Mock 41 Related",
              url: "https://myanimelist.net/anime/1041/Cowboy_Bebop_Mock_41_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 41"
        ],
        endings: [
          "Ending Theme 41"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/41"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 42,
      url: "https://myanimelist.net/anime/42/Naruto_Mock_42",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-83-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-83-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-83-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-84-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-84-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-84-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer042",
        url: "https://www.youtube.com/watch?v=mockTrailer042",
        embed_url: "https://www.youtube.com/embed/mockTrailer042"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 42"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 42"
        }
      ],
      title: "Naruto Mock 42",
      title_english: "Naruto Mock 42",
      title_japanese: "ナルト Mock 42",
      title_synonyms: [
        "Naruto Alternative 42"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1997-06-15T00:00:00+00:00",
        to: "1997-08-18T00:00:00+00:00",
        prop: {
          from: {
            day: 15,
            month: 6,
            year: 1997
          },
          to: {
            day: 18,
            month: 8,
            year: 1997
          },
          string: "1997-06-15 to 1997-08-18"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.45,
      scored_by: 317482,
      rank: 42,
      popularity: 142,
      members: 680000,
      favorites: 11206,
      synopsis: "Naruto Mock 42 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 42 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1997,
      broadcast: {
        day: "Sundays",
        time: "20:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1042,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1042/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2042,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2042/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3042,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3042/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4420,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4420/Action"
        },
        {
          mal_id: 4421,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4421/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5042,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5042/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6420,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6420/Martial_Arts"
        },
        {
          mal_id: 6421,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6421/School"
        }
      ],
      demographics: [
        {
          mal_id: 7042,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7042/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1042,
              type: "anime",
              name: "Naruto Mock 42 Related",
              url: "https://myanimelist.net/anime/1042/Naruto_Mock_42_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 42"
        ],
        endings: [
          "Ending Theme 42"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/42"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 43,
      url: "https://myanimelist.net/anime/43/Fullmetal_Alchemist:_Brotherhood_Mock_43",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-85-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-85-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-85-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-86-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-86-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-86-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer043",
        url: "https://www.youtube.com/watch?v=mockTrailer043",
        embed_url: "https://www.youtube.com/embed/mockTrailer043"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 43"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 43"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 43",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 43",
      title_japanese: "鋼の錬金術師 Mock 43",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 43"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1998-07-16T00:00:00+00:00",
        to: "1998-09-19T00:00:00+00:00",
        prop: {
          from: {
            day: 16,
            month: 7,
            year: 1998
          },
          to: {
            day: 19,
            month: 9,
            year: 1998
          },
          string: "1998-07-16 to 1998-09-19"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.9,
      scored_by: 324803,
      rank: 43,
      popularity: 143,
      members: 695000,
      favorites: 11449,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 43 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 43 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1998,
      broadcast: {
        day: "Tuesdays",
        time: "22:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1043,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1043/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2043,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2043/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3043,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3043/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4430,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4430/Drama"
        },
        {
          mal_id: 4431,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4431/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5043,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5043/None"
        }
      ],
      themes: [
        {
          mal_id: 6430,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6430/Super_Power"
        },
        {
          mal_id: 6431,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6431/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7043,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7043/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1043,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 43 Related",
              url: "https://myanimelist.net/anime/1043/Fullmetal_Alchemist:_Brotherhood_Mock_43_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 43"
        ],
        endings: [
          "Ending Theme 43"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/43"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 44,
      url: "https://myanimelist.net/anime/44/Attack_on_Titan_Mock_44",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-87-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-87-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-87-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-88-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-88-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-88-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer044",
        url: "https://www.youtube.com/watch?v=mockTrailer044",
        embed_url: "https://www.youtube.com/embed/mockTrailer044"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 44"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 44"
        }
      ],
      title: "Attack on Titan Mock 44",
      title_english: "Attack on Titan Mock 44",
      title_japanese: "進撃の巨人 Mock 44",
      title_synonyms: [
        "Attack on Titan Alternative 44"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1999-08-17T00:00:00+00:00",
        to: "1999-10-20T00:00:00+00:00",
        prop: {
          from: {
            day: 17,
            month: 8,
            year: 1999
          },
          to: {
            day: 20,
            month: 10,
            year: 1999
          },
          string: "1999-08-17 to 1999-10-20"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.36,
      scored_by: 332124,
      rank: 44,
      popularity: 144,
      members: 710000,
      favorites: 11692,
      synopsis: "Attack on Titan Mock 44 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 44 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1999,
      broadcast: {
        day: "Wednesdays",
        time: "18:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1044,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1044/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2044,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2044/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3044,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3044/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4440,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4440/Sci-Fi"
        },
        {
          mal_id: 4441,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4441/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5044,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5044/None"
        }
      ],
      themes: [
        {
          mal_id: 6440,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6440/Martial_Arts"
        },
        {
          mal_id: 6441,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6441/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7044,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7044/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1044,
              type: "anime",
              name: "Attack on Titan Mock 44 Related",
              url: "https://myanimelist.net/anime/1044/Attack_on_Titan_Mock_44_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 44"
        ],
        endings: [
          "Ending Theme 44"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/44"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 45,
      url: "https://myanimelist.net/anime/45/Death_Note_Mock_45",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-89-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-89-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-89-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-90-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-90-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-90-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer045",
        url: "https://www.youtube.com/watch?v=mockTrailer045",
        embed_url: "https://www.youtube.com/embed/mockTrailer045"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 45"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 45"
        }
      ],
      title: "Death Note Mock 45",
      title_english: "Death Note Mock 45",
      title_japanese: "デスノート Mock 45",
      title_synonyms: [
        "Death Note Alternative 45"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2000-09-18T00:00:00+00:00",
        to: "2000-11-21T00:00:00+00:00",
        prop: {
          from: {
            day: 18,
            month: 9,
            year: 2000
          },
          to: {
            day: 21,
            month: 11,
            year: 2000
          },
          string: "2000-09-18 to 2000-11-21"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 9.04,
      scored_by: 339445,
      rank: 45,
      popularity: 145,
      members: 725000,
      favorites: 11935,
      synopsis: "Death Note Mock 45 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 45 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2000,
      broadcast: {
        day: "Sundays",
        time: "10:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1045,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1045/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2045,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2045/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3045,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3045/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4450,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4450/Action"
        },
        {
          mal_id: 4451,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4451/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5045,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5045/None"
        }
      ],
      themes: [
        {
          mal_id: 6450,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6450/Military"
        },
        {
          mal_id: 6451,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6451/School"
        }
      ],
      demographics: [
        {
          mal_id: 7045,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7045/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1045,
              type: "anime",
              name: "Death Note Mock 45 Related",
              url: "https://myanimelist.net/anime/1045/Death_Note_Mock_45_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 45"
        ],
        endings: [
          "Ending Theme 45"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/45"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 46,
      url: "https://myanimelist.net/anime/46/One_Piece_Mock_46",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-91-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-91-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-91-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-92-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-92-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-92-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer046",
        url: "https://www.youtube.com/watch?v=mockTrailer046",
        embed_url: "https://www.youtube.com/embed/mockTrailer046"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 46"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 46"
        }
      ],
      title: "One Piece Mock 46",
      title_english: "One Piece Mock 46",
      title_japanese: "ワンピース Mock 46",
      title_synonyms: [
        "One Piece Alternative 46"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2001-10-19T00:00:00+00:00",
        to: "2001-12-22T00:00:00+00:00",
        prop: {
          from: {
            day: 19,
            month: 10,
            year: 2001
          },
          to: {
            day: 22,
            month: 12,
            year: 2001
          },
          string: "2001-10-19 to 2001-12-22"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.68,
      scored_by: 346766,
      rank: 46,
      popularity: 146,
      members: 740000,
      favorites: 12178,
      synopsis: "One Piece Mock 46 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 46 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2001,
      broadcast: {
        day: "Mondays",
        time: "06:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1046,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1046/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2046,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2046/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3046,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3046/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4460,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4460/Drama"
        },
        {
          mal_id: 4461,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4461/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5046,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5046/None"
        }
      ],
      themes: [
        {
          mal_id: 6460,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6460/Psychological"
        },
        {
          mal_id: 6461,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6461/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7046,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7046/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1046,
              type: "anime",
              name: "One Piece Mock 46 Related",
              url: "https://myanimelist.net/anime/1046/One_Piece_Mock_46_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 46"
        ],
        endings: [
          "Ending Theme 46"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/46"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 47,
      url: "https://myanimelist.net/anime/47/Demon_Slayer_Mock_47",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-93-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-93-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-93-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-94-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-94-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-94-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer047",
        url: "https://www.youtube.com/watch?v=mockTrailer047",
        embed_url: "https://www.youtube.com/embed/mockTrailer047"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 47"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 47"
        }
      ],
      title: "Demon Slayer Mock 47",
      title_english: "Demon Slayer Mock 47",
      title_japanese: "鬼滅の刃 Mock 47",
      title_synonyms: [
        "Demon Slayer Alternative 47"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2002-11-20T00:00:00+00:00",
        to: "2002-01-23T00:00:00+00:00",
        prop: {
          from: {
            day: 20,
            month: 11,
            year: 2002
          },
          to: {
            day: 23,
            month: 1,
            year: 2002
          },
          string: "2002-11-20 to 2002-01-23"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.5,
      scored_by: 354087,
      rank: 47,
      popularity: 147,
      members: 755000,
      favorites: 12421,
      synopsis: "Demon Slayer Mock 47 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 47 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2002,
      broadcast: {
        day: "Thursdays",
        time: "12:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1047,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1047/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2047,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2047/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3047,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3047/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4470,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4470/Suspense"
        },
        {
          mal_id: 4471,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4471/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5047,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5047/None"
        }
      ],
      themes: [
        {
          mal_id: 6470,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6470/School"
        },
        {
          mal_id: 6471,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6471/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7047,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7047/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1047,
              type: "anime",
              name: "Demon Slayer Mock 47 Related",
              url: "https://myanimelist.net/anime/1047/Demon_Slayer_Mock_47_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 47"
        ],
        endings: [
          "Ending Theme 47"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/47"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 48,
      url: "https://myanimelist.net/anime/48/Jujutsu_Kaisen_Mock_48",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-95-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-95-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-95-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-96-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-96-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-96-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer048",
        url: "https://www.youtube.com/watch?v=mockTrailer048",
        embed_url: "https://www.youtube.com/embed/mockTrailer048"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 48"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 48"
        }
      ],
      title: "Jujutsu Kaisen Mock 48",
      title_english: "Jujutsu Kaisen Mock 48",
      title_japanese: "呪術廻戦 Mock 48",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 48"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2003-12-21T00:00:00+00:00",
        to: "2003-02-24T00:00:00+00:00",
        prop: {
          from: {
            day: 21,
            month: 12,
            year: 2003
          },
          to: {
            day: 24,
            month: 2,
            year: 2003
          },
          string: "2003-12-21 to 2003-02-24"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.89,
      scored_by: 361408,
      rank: 48,
      popularity: 148,
      members: 770000,
      favorites: 12664,
      synopsis: "Jujutsu Kaisen Mock 48 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 48 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2003,
      broadcast: {
        day: "Saturdays",
        time: "07:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1048,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1048/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2048,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2048/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3048,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3048/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4480,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4480/Adventure"
        },
        {
          mal_id: 4481,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4481/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5048,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5048/None"
        }
      ],
      themes: [
        {
          mal_id: 6480,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6480/Time_Travel"
        },
        {
          mal_id: 6481,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6481/School"
        }
      ],
      demographics: [
        {
          mal_id: 7048,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7048/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1048,
              type: "anime",
              name: "Jujutsu Kaisen Mock 48 Related",
              url: "https://myanimelist.net/anime/1048/Jujutsu_Kaisen_Mock_48_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 48"
        ],
        endings: [
          "Ending Theme 48"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/48"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 49,
      url: "https://myanimelist.net/anime/49/Steins;Gate_Mock_49",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-97-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-97-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-97-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-98-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-98-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-98-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer049",
        url: "https://www.youtube.com/watch?v=mockTrailer049",
        embed_url: "https://www.youtube.com/embed/mockTrailer049"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 49"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 49"
        }
      ],
      title: "Steins;Gate Mock 49",
      title_english: "Steins;Gate Mock 49",
      title_japanese: "シュタインズ・ゲート Mock 49",
      title_synonyms: [
        "Steins;Gate Alternative 49"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2004-01-22T00:00:00+00:00",
        to: "2004-03-25T00:00:00+00:00",
        prop: {
          from: {
            day: 22,
            month: 1,
            year: 2004
          },
          to: {
            day: 25,
            month: 3,
            year: 2004
          },
          string: "2004-01-22 to 2004-03-25"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.71,
      scored_by: 368729,
      rank: 49,
      popularity: 149,
      members: 785000,
      favorites: 12907,
      synopsis: "Steins;Gate Mock 49 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 49 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2004,
      broadcast: {
        day: "Sundays",
        time: "04:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1049,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1049/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2049,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2049/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3049,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3049/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4490,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4490/Comedy"
        },
        {
          mal_id: 4491,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4491/Fantasy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5049,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5049/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6490,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6490/Super_Power"
        },
        {
          mal_id: 6491,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6491/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7049,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7049/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1049,
              type: "anime",
              name: "Steins;Gate Mock 49 Related",
              url: "https://myanimelist.net/anime/1049/Steins;Gate_Mock_49_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 49"
        ],
        endings: [
          "Ending Theme 49"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/49"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 50,
      url: "https://myanimelist.net/anime/50/Vinland_Saga_Mock_50",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-99-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-99-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-99-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-100-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-100-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-100-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer050",
        url: "https://www.youtube.com/watch?v=mockTrailer050",
        embed_url: "https://www.youtube.com/embed/mockTrailer050"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 50"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 50"
        }
      ],
      title: "Vinland Saga Mock 50",
      title_english: "Vinland Saga Mock 50",
      title_japanese: "ヴィンランド・サガ Mock 50",
      title_synonyms: [
        "Vinland Saga Alternative 50"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2005-02-23T00:00:00+00:00",
        to: "2005-04-26T00:00:00+00:00",
        prop: {
          from: {
            day: 23,
            month: 2,
            year: 2005
          },
          to: {
            day: 26,
            month: 4,
            year: 2005
          },
          string: "2005-02-23 to 2005-04-26"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 9.17,
      scored_by: 376050,
      rank: 50,
      popularity: 150,
      members: 800000,
      favorites: 13150,
      synopsis: "Vinland Saga Mock 50 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 50 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2005,
      broadcast: {
        day: "Tuesdays",
        time: "21:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1050,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1050/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2050,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2050/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3050,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3050/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4500,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4500/Drama"
        },
        {
          mal_id: 4501,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4501/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5050,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5050/None"
        }
      ],
      themes: [
        {
          mal_id: 6500,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6500/Historical"
        },
        {
          mal_id: 6501,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6501/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7050,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7050/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1050,
              type: "anime",
              name: "Vinland Saga Mock 50 Related",
              url: "https://myanimelist.net/anime/1050/Vinland_Saga_Mock_50_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 50"
        ],
        endings: [
          "Ending Theme 50"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/50"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 51,
      url: "https://myanimelist.net/anime/51/Cowboy_Bebop_Mock_51",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-101-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-101-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-101-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-102-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-102-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-102-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer051",
        url: "https://www.youtube.com/watch?v=mockTrailer051",
        embed_url: "https://www.youtube.com/embed/mockTrailer051"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 51"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 51"
        }
      ],
      title: "Cowboy Bebop Mock 51",
      title_english: "Cowboy Bebop Mock 51",
      title_japanese: "カウボーイビバップ Mock 51",
      title_synonyms: [
        "Cowboy Bebop Alternative 51"
      ],
      type: "TV",
      source: "Original",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2006-03-24T00:00:00+00:00",
        to: "2006-05-27T00:00:00+00:00",
        prop: {
          from: {
            day: 24,
            month: 3,
            year: 2006
          },
          to: {
            day: 27,
            month: 5,
            year: 2006
          },
          string: "2006-03-24 to 2006-05-27"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.02,
      scored_by: 383371,
      rank: 51,
      popularity: 151,
      members: 815000,
      favorites: 13393,
      synopsis: "Cowboy Bebop Mock 51 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 51 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2006,
      broadcast: {
        day: "Thursdays",
        time: "00:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1051,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1051/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2051,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2051/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3051,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3051/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4510,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4510/Drama"
        },
        {
          mal_id: 4511,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4511/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5051,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5051/None"
        }
      ],
      themes: [
        {
          mal_id: 6510,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6510/School"
        },
        {
          mal_id: 6511,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6511/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7051,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7051/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1051,
              type: "anime",
              name: "Cowboy Bebop Mock 51 Related",
              url: "https://myanimelist.net/anime/1051/Cowboy_Bebop_Mock_51_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 51"
        ],
        endings: [
          "Ending Theme 51"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/51"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 52,
      url: "https://myanimelist.net/anime/52/Naruto_Mock_52",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-103-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-103-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-103-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-104-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-104-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-104-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer052",
        url: "https://www.youtube.com/watch?v=mockTrailer052",
        embed_url: "https://www.youtube.com/embed/mockTrailer052"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 52"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 52"
        }
      ],
      title: "Naruto Mock 52",
      title_english: "Naruto Mock 52",
      title_japanese: "ナルト Mock 52",
      title_synonyms: [
        "Naruto Alternative 52"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2007-04-25T00:00:00+00:00",
        to: "2007-06-28T00:00:00+00:00",
        prop: {
          from: {
            day: 25,
            month: 4,
            year: 2007
          },
          to: {
            day: 28,
            month: 6,
            year: 2007
          },
          string: "2007-04-25 to 2007-06-28"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.87,
      scored_by: 390692,
      rank: 52,
      popularity: 152,
      members: 830000,
      favorites: 13636,
      synopsis: "Naruto Mock 52 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 52 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2007,
      broadcast: {
        day: "Wednesdays",
        time: "09:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1052,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1052/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2052,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2052/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3052,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3052/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4520,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4520/Mystery"
        },
        {
          mal_id: 4521,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4521/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5052,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5052/None"
        }
      ],
      themes: [
        {
          mal_id: 6520,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6520/Space"
        },
        {
          mal_id: 6521,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6521/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7052,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7052/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1052,
              type: "anime",
              name: "Naruto Mock 52 Related",
              url: "https://myanimelist.net/anime/1052/Naruto_Mock_52_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 52"
        ],
        endings: [
          "Ending Theme 52"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/52"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 53,
      url: "https://myanimelist.net/anime/53/Fullmetal_Alchemist:_Brotherhood_Mock_53",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-105-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-105-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-105-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-106-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-106-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-106-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer053",
        url: "https://www.youtube.com/watch?v=mockTrailer053",
        embed_url: "https://www.youtube.com/embed/mockTrailer053"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 53"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 53"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 53",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 53",
      title_japanese: "鋼の錬金術師 Mock 53",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 53"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2008-05-26T00:00:00+00:00",
        to: "2008-07-28T00:00:00+00:00",
        prop: {
          from: {
            day: 26,
            month: 5,
            year: 2008
          },
          to: {
            day: 28,
            month: 7,
            year: 2008
          },
          string: "2008-05-26 to 2008-07-28"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.54,
      scored_by: 398013,
      rank: 53,
      popularity: 153,
      members: 845000,
      favorites: 13879,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 53 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 53 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2008,
      broadcast: {
        day: "Wednesdays",
        time: "04:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1053,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1053/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2053,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2053/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3053,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3053/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4530,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4530/Sci-Fi"
        },
        {
          mal_id: 4531,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4531/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5053,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5053/None"
        }
      ],
      themes: [
        {
          mal_id: 6530,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6530/Historical"
        },
        {
          mal_id: 6531,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6531/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7053,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7053/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1053,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 53 Related",
              url: "https://myanimelist.net/anime/1053/Fullmetal_Alchemist:_Brotherhood_Mock_53_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 53"
        ],
        endings: [
          "Ending Theme 53"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/53"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 54,
      url: "https://myanimelist.net/anime/54/Attack_on_Titan_Mock_54",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-107-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-107-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-107-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-108-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-108-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-108-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer054",
        url: "https://www.youtube.com/watch?v=mockTrailer054",
        embed_url: "https://www.youtube.com/embed/mockTrailer054"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 54"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 54"
        }
      ],
      title: "Attack on Titan Mock 54",
      title_english: "Attack on Titan Mock 54",
      title_japanese: "進撃の巨人 Mock 54",
      title_synonyms: [
        "Attack on Titan Alternative 54"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2009-06-27T00:00:00+00:00",
        to: "2009-08-28T00:00:00+00:00",
        prop: {
          from: {
            day: 27,
            month: 6,
            year: 2009
          },
          to: {
            day: 28,
            month: 8,
            year: 2009
          },
          string: "2009-06-27 to 2009-08-28"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.48,
      scored_by: 405334,
      rank: 54,
      popularity: 154,
      members: 860000,
      favorites: 14122,
      synopsis: "Attack on Titan Mock 54 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 54 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2009,
      broadcast: {
        day: "Fridays",
        time: "05:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1054,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1054/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2054,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2054/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3054,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3054/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4540,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4540/Action"
        },
        {
          mal_id: 4541,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4541/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5054,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5054/None"
        }
      ],
      themes: [
        {
          mal_id: 6540,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6540/Team_Sports"
        },
        {
          mal_id: 6541,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6541/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7054,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7054/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1054,
              type: "anime",
              name: "Attack on Titan Mock 54 Related",
              url: "https://myanimelist.net/anime/1054/Attack_on_Titan_Mock_54_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 54"
        ],
        endings: [
          "Ending Theme 54"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/54"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 55,
      url: "https://myanimelist.net/anime/55/Death_Note_Mock_55",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-109-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-109-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-109-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-110-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-110-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-110-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer055",
        url: "https://www.youtube.com/watch?v=mockTrailer055",
        embed_url: "https://www.youtube.com/embed/mockTrailer055"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 55"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 55"
        }
      ],
      title: "Death Note Mock 55",
      title_english: "Death Note Mock 55",
      title_japanese: "デスノート Mock 55",
      title_synonyms: [
        "Death Note Alternative 55"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2010-07-01T00:00:00+00:00",
        to: "2010-09-04T00:00:00+00:00",
        prop: {
          from: {
            day: 1,
            month: 7,
            year: 2010
          },
          to: {
            day: 4,
            month: 9,
            year: 2010
          },
          string: "2010-07-01 to 2010-09-04"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.79,
      scored_by: 412655,
      rank: 55,
      popularity: 155,
      members: 875000,
      favorites: 14365,
      synopsis: "Death Note Mock 55 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 55 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2010,
      broadcast: {
        day: "Saturdays",
        time: "12:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1055,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1055/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2055,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2055/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3055,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3055/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4550,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4550/Comedy"
        },
        {
          mal_id: 4551,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4551/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5055,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5055/None"
        }
      ],
      themes: [
        {
          mal_id: 6550,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6550/Survival"
        },
        {
          mal_id: 6551,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6551/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7055,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7055/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1055,
              type: "anime",
              name: "Death Note Mock 55 Related",
              url: "https://myanimelist.net/anime/1055/Death_Note_Mock_55_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 55"
        ],
        endings: [
          "Ending Theme 55"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/55"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 56,
      url: "https://myanimelist.net/anime/56/One_Piece_Mock_56",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-111-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-111-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-111-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-112-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-112-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-112-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer056",
        url: "https://www.youtube.com/watch?v=mockTrailer056",
        embed_url: "https://www.youtube.com/embed/mockTrailer056"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 56"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 56"
        }
      ],
      title: "One Piece Mock 56",
      title_english: "One Piece Mock 56",
      title_japanese: "ワンピース Mock 56",
      title_synonyms: [
        "One Piece Alternative 56"
      ],
      type: "TV",
      source: "Manga",
      episodes: 26,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-08-02T00:00:00+00:00",
        to: "2011-10-05T00:00:00+00:00",
        prop: {
          from: {
            day: 2,
            month: 8,
            year: 2011
          },
          to: {
            day: 5,
            month: 10,
            year: 2011
          },
          string: "2011-08-02 to 2011-10-05"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.06,
      scored_by: 419976,
      rank: 56,
      popularity: 156,
      members: 890000,
      favorites: 14608,
      synopsis: "One Piece Mock 56 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 56 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2011,
      broadcast: {
        day: "Tuesdays",
        time: "18:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1056,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1056/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2056,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2056/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3056,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3056/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4560,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4560/Mystery"
        },
        {
          mal_id: 4561,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4561/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5056,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5056/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6560,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6560/Historical"
        },
        {
          mal_id: 6561,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6561/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7056,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7056/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1056,
              type: "anime",
              name: "One Piece Mock 56 Related",
              url: "https://myanimelist.net/anime/1056/One_Piece_Mock_56_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 56"
        ],
        endings: [
          "Ending Theme 56"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/56"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 57,
      url: "https://myanimelist.net/anime/57/Demon_Slayer_Mock_57",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-113-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-113-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-113-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-114-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-114-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-114-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer057",
        url: "https://www.youtube.com/watch?v=mockTrailer057",
        embed_url: "https://www.youtube.com/embed/mockTrailer057"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 57"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 57"
        }
      ],
      title: "Demon Slayer Mock 57",
      title_english: "Demon Slayer Mock 57",
      title_japanese: "鬼滅の刃 Mock 57",
      title_synonyms: [
        "Demon Slayer Alternative 57"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2012-09-03T00:00:00+00:00",
        to: "2012-11-06T00:00:00+00:00",
        prop: {
          from: {
            day: 3,
            month: 9,
            year: 2012
          },
          to: {
            day: 6,
            month: 11,
            year: 2012
          },
          string: "2012-09-03 to 2012-11-06"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.67,
      scored_by: 427297,
      rank: 57,
      popularity: 157,
      members: 905000,
      favorites: 14851,
      synopsis: "Demon Slayer Mock 57 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 57 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2012,
      broadcast: {
        day: "Fridays",
        time: "16:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1057,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1057/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2057,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2057/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3057,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3057/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4570,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4570/Supernatural"
        },
        {
          mal_id: 4571,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4571/Adventure"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5057,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5057/None"
        }
      ],
      themes: [
        {
          mal_id: 6570,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6570/Super_Power"
        },
        {
          mal_id: 6571,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6571/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7057,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7057/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1057,
              type: "anime",
              name: "Demon Slayer Mock 57 Related",
              url: "https://myanimelist.net/anime/1057/Demon_Slayer_Mock_57_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 57"
        ],
        endings: [
          "Ending Theme 57"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/57"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 58,
      url: "https://myanimelist.net/anime/58/Jujutsu_Kaisen_Mock_58",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-115-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-115-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-115-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-116-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-116-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-116-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer058",
        url: "https://www.youtube.com/watch?v=mockTrailer058",
        embed_url: "https://www.youtube.com/embed/mockTrailer058"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 58"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 58"
        }
      ],
      title: "Jujutsu Kaisen Mock 58",
      title_english: "Jujutsu Kaisen Mock 58",
      title_japanese: "呪術廻戦 Mock 58",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 58"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2013-10-04T00:00:00+00:00",
        to: "2013-12-07T00:00:00+00:00",
        prop: {
          from: {
            day: 4,
            month: 10,
            year: 2013
          },
          to: {
            day: 7,
            month: 12,
            year: 2013
          },
          string: "2013-10-04 to 2013-12-07"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.95,
      scored_by: 434618,
      rank: 58,
      popularity: 158,
      members: 920000,
      favorites: 15094,
      synopsis: "Jujutsu Kaisen Mock 58 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 58 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2013,
      broadcast: {
        day: "Saturdays",
        time: "09:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1058,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1058/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2058,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2058/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3058,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3058/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4580,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4580/Comedy"
        },
        {
          mal_id: 4581,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4581/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5058,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5058/None"
        }
      ],
      themes: [
        {
          mal_id: 6580,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6580/Team_Sports"
        },
        {
          mal_id: 6581,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6581/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7058,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7058/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1058,
              type: "anime",
              name: "Jujutsu Kaisen Mock 58 Related",
              url: "https://myanimelist.net/anime/1058/Jujutsu_Kaisen_Mock_58_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 58"
        ],
        endings: [
          "Ending Theme 58"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/58"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 59,
      url: "https://myanimelist.net/anime/59/Steins;Gate_Mock_59",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-117-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-117-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-117-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-118-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-118-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-118-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer059",
        url: "https://www.youtube.com/watch?v=mockTrailer059",
        embed_url: "https://www.youtube.com/embed/mockTrailer059"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 59"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 59"
        }
      ],
      title: "Steins;Gate Mock 59",
      title_english: "Steins;Gate Mock 59",
      title_japanese: "シュタインズ・ゲート Mock 59",
      title_synonyms: [
        "Steins;Gate Alternative 59"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 50,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2014-11-05T00:00:00+00:00",
        to: "2014-01-08T00:00:00+00:00",
        prop: {
          from: {
            day: 5,
            month: 11,
            year: 2014
          },
          to: {
            day: 8,
            month: 1,
            year: 2014
          },
          string: "2014-11-05 to 2014-01-08"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.26,
      scored_by: 441939,
      rank: 59,
      popularity: 159,
      members: 935000,
      favorites: 15337,
      synopsis: "Steins;Gate Mock 59 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 59 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2014,
      broadcast: {
        day: "Wednesdays",
        time: "04:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1059,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1059/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2059,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2059/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3059,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3059/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4590,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4590/Slice_of_Life"
        },
        {
          mal_id: 4591,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4591/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5059,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5059/None"
        }
      ],
      themes: [
        {
          mal_id: 6590,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6590/Time_Travel"
        },
        {
          mal_id: 6591,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6591/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7059,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7059/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1059,
              type: "anime",
              name: "Steins;Gate Mock 59 Related",
              url: "https://myanimelist.net/anime/1059/Steins;Gate_Mock_59_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 59"
        ],
        endings: [
          "Ending Theme 59"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/59"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 60,
      url: "https://myanimelist.net/anime/60/Vinland_Saga_Mock_60",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-119-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-119-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-119-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-120-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-120-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-120-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer060",
        url: "https://www.youtube.com/watch?v=mockTrailer060",
        embed_url: "https://www.youtube.com/embed/mockTrailer060"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 60"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 60"
        }
      ],
      title: "Vinland Saga Mock 60",
      title_english: "Vinland Saga Mock 60",
      title_japanese: "ヴィンランド・サガ Mock 60",
      title_synonyms: [
        "Vinland Saga Alternative 60"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2015-12-06T00:00:00+00:00",
        to: "2015-02-09T00:00:00+00:00",
        prop: {
          from: {
            day: 6,
            month: 12,
            year: 2015
          },
          to: {
            day: 9,
            month: 2,
            year: 2015
          },
          string: "2015-12-06 to 2015-02-09"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.81,
      scored_by: 449260,
      rank: 60,
      popularity: 160,
      members: 950000,
      favorites: 15580,
      synopsis: "Vinland Saga Mock 60 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 60 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2015,
      broadcast: {
        day: "Thursdays",
        time: "05:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1060,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1060/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2060,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2060/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3060,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3060/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4600,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4600/Adventure"
        },
        {
          mal_id: 4601,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4601/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5060,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5060/None"
        }
      ],
      themes: [
        {
          mal_id: 6600,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6600/School"
        },
        {
          mal_id: 6601,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6601/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7060,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7060/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1060,
              type: "anime",
              name: "Vinland Saga Mock 60 Related",
              url: "https://myanimelist.net/anime/1060/Vinland_Saga_Mock_60_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 60"
        ],
        endings: [
          "Ending Theme 60"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/60"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 61,
      url: "https://myanimelist.net/anime/61/Cowboy_Bebop_Mock_61",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-121-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-121-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-121-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-122-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-122-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-122-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer061",
        url: "https://www.youtube.com/watch?v=mockTrailer061",
        embed_url: "https://www.youtube.com/embed/mockTrailer061"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 61"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 61"
        }
      ],
      title: "Cowboy Bebop Mock 61",
      title_english: "Cowboy Bebop Mock 61",
      title_japanese: "カウボーイビバップ Mock 61",
      title_synonyms: [
        "Cowboy Bebop Alternative 61"
      ],
      type: "TV",
      source: "Original",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2016-01-07T00:00:00+00:00",
        to: "2016-03-10T00:00:00+00:00",
        prop: {
          from: {
            day: 7,
            month: 1,
            year: 2016
          },
          to: {
            day: 10,
            month: 3,
            year: 2016
          },
          string: "2016-01-07 to 2016-03-10"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.44,
      scored_by: 456581,
      rank: 61,
      popularity: 161,
      members: 965000,
      favorites: 15823,
      synopsis: "Cowboy Bebop Mock 61 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 61 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2016,
      broadcast: {
        day: "Mondays",
        time: "18:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1061,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1061/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2061,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2061/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3061,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3061/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4610,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4610/Drama"
        },
        {
          mal_id: 4611,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4611/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5061,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5061/None"
        }
      ],
      themes: [
        {
          mal_id: 6610,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6610/Military"
        },
        {
          mal_id: 6611,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6611/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7061,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7061/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1061,
              type: "anime",
              name: "Cowboy Bebop Mock 61 Related",
              url: "https://myanimelist.net/anime/1061/Cowboy_Bebop_Mock_61_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 61"
        ],
        endings: [
          "Ending Theme 61"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/61"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 62,
      url: "https://myanimelist.net/anime/62/Naruto_Mock_62",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-123-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-123-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-123-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-124-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-124-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-124-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer062",
        url: "https://www.youtube.com/watch?v=mockTrailer062",
        embed_url: "https://www.youtube.com/embed/mockTrailer062"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 62"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 62"
        }
      ],
      title: "Naruto Mock 62",
      title_english: "Naruto Mock 62",
      title_japanese: "ナルト Mock 62",
      title_synonyms: [
        "Naruto Alternative 62"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2017-02-08T00:00:00+00:00",
        to: "2017-04-11T00:00:00+00:00",
        prop: {
          from: {
            day: 8,
            month: 2,
            year: 2017
          },
          to: {
            day: 11,
            month: 4,
            year: 2017
          },
          string: "2017-02-08 to 2017-04-11"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 6.6,
      scored_by: 463902,
      rank: 62,
      popularity: 162,
      members: 980000,
      favorites: 16066,
      synopsis: "Naruto Mock 62 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 62 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2017,
      broadcast: {
        day: "Wednesdays",
        time: "01:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1062,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1062/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2062,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2062/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3062,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3062/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4620,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4620/Drama"
        },
        {
          mal_id: 4621,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4621/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5062,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5062/None"
        }
      ],
      themes: [
        {
          mal_id: 6620,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6620/Team_Sports"
        },
        {
          mal_id: 6621,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6621/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7062,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7062/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1062,
              type: "anime",
              name: "Naruto Mock 62 Related",
              url: "https://myanimelist.net/anime/1062/Naruto_Mock_62_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 62"
        ],
        endings: [
          "Ending Theme 62"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/62"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 63,
      url: "https://myanimelist.net/anime/63/Fullmetal_Alchemist:_Brotherhood_Mock_63",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-125-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-125-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-125-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-126-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-126-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-126-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer063",
        url: "https://www.youtube.com/watch?v=mockTrailer063",
        embed_url: "https://www.youtube.com/embed/mockTrailer063"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 63"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 63"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 63",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 63",
      title_japanese: "鋼の錬金術師 Mock 63",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 63"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2018-03-09T00:00:00+00:00",
        to: "2018-05-12T00:00:00+00:00",
        prop: {
          from: {
            day: 9,
            month: 3,
            year: 2018
          },
          to: {
            day: 12,
            month: 5,
            year: 2018
          },
          string: "2018-03-09 to 2018-05-12"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.83,
      scored_by: 471223,
      rank: 63,
      popularity: 163,
      members: 995000,
      favorites: 16309,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 63 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 63 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2018,
      broadcast: {
        day: "Saturdays",
        time: "01:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1063,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1063/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2063,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2063/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3063,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3063/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4630,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4630/Fantasy"
        },
        {
          mal_id: 4631,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4631/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5063,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5063/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6630,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6630/Martial_Arts"
        },
        {
          mal_id: 6631,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6631/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7063,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7063/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1063,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 63 Related",
              url: "https://myanimelist.net/anime/1063/Fullmetal_Alchemist:_Brotherhood_Mock_63_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 63"
        ],
        endings: [
          "Ending Theme 63"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/63"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 64,
      url: "https://myanimelist.net/anime/64/Attack_on_Titan_Mock_64",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-127-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-127-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-127-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-128-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-128-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-128-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer064",
        url: "https://www.youtube.com/watch?v=mockTrailer064",
        embed_url: "https://www.youtube.com/embed/mockTrailer064"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 64"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 64"
        }
      ],
      title: "Attack on Titan Mock 64",
      title_english: "Attack on Titan Mock 64",
      title_japanese: "進撃の巨人 Mock 64",
      title_synonyms: [
        "Attack on Titan Alternative 64"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2019-04-10T00:00:00+00:00",
        to: "2019-06-13T00:00:00+00:00",
        prop: {
          from: {
            day: 10,
            month: 4,
            year: 2019
          },
          to: {
            day: 13,
            month: 6,
            year: 2019
          },
          string: "2019-04-10 to 2019-06-13"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.76,
      scored_by: 478544,
      rank: 64,
      popularity: 164,
      members: 1010000,
      favorites: 16552,
      synopsis: "Attack on Titan Mock 64 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 64 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2019,
      broadcast: {
        day: "Tuesdays",
        time: "17:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1064,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1064/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2064,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2064/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3064,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3064/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4640,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4640/Adventure"
        },
        {
          mal_id: 4641,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4641/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5064,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5064/None"
        }
      ],
      themes: [
        {
          mal_id: 6640,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6640/Martial_Arts"
        },
        {
          mal_id: 6641,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6641/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7064,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7064/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1064,
              type: "anime",
              name: "Attack on Titan Mock 64 Related",
              url: "https://myanimelist.net/anime/1064/Attack_on_Titan_Mock_64_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 64"
        ],
        endings: [
          "Ending Theme 64"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/64"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 65,
      url: "https://myanimelist.net/anime/65/Death_Note_Mock_65",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-129-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-129-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-129-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-130-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-130-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-130-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer065",
        url: "https://www.youtube.com/watch?v=mockTrailer065",
        embed_url: "https://www.youtube.com/embed/mockTrailer065"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 65"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 65"
        }
      ],
      title: "Death Note Mock 65",
      title_english: "Death Note Mock 65",
      title_japanese: "デスノート Mock 65",
      title_synonyms: [
        "Death Note Alternative 65"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2020-05-11T00:00:00+00:00",
        to: "2020-07-14T00:00:00+00:00",
        prop: {
          from: {
            day: 11,
            month: 5,
            year: 2020
          },
          to: {
            day: 14,
            month: 7,
            year: 2020
          },
          string: "2020-05-11 to 2020-07-14"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.47,
      scored_by: 485865,
      rank: 65,
      popularity: 165,
      members: 1025000,
      favorites: 16795,
      synopsis: "Death Note Mock 65 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 65 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2020,
      broadcast: {
        day: "Tuesdays",
        time: "11:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1065,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1065/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2065,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2065/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3065,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3065/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4650,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4650/Fantasy"
        },
        {
          mal_id: 4651,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4651/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5065,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5065/None"
        }
      ],
      themes: [
        {
          mal_id: 6650,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6650/Military"
        },
        {
          mal_id: 6651,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6651/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7065,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7065/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1065,
              type: "anime",
              name: "Death Note Mock 65 Related",
              url: "https://myanimelist.net/anime/1065/Death_Note_Mock_65_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 65"
        ],
        endings: [
          "Ending Theme 65"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/65"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 66,
      url: "https://myanimelist.net/anime/66/One_Piece_Mock_66",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-131-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-131-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-131-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-132-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-132-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-132-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer066",
        url: "https://www.youtube.com/watch?v=mockTrailer066",
        embed_url: "https://www.youtube.com/embed/mockTrailer066"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 66"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 66"
        }
      ],
      title: "One Piece Mock 66",
      title_english: "One Piece Mock 66",
      title_japanese: "ワンピース Mock 66",
      title_synonyms: [
        "One Piece Alternative 66"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2021-06-12T00:00:00+00:00",
        to: "2021-08-15T00:00:00+00:00",
        prop: {
          from: {
            day: 12,
            month: 6,
            year: 2021
          },
          to: {
            day: 15,
            month: 8,
            year: 2021
          },
          string: "2021-06-12 to 2021-08-15"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.87,
      scored_by: 493186,
      rank: 66,
      popularity: 166,
      members: 1040000,
      favorites: 17038,
      synopsis: "One Piece Mock 66 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 66 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2021,
      broadcast: {
        day: "Fridays",
        time: "23:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1066,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1066/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2066,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2066/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3066,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3066/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4660,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4660/Fantasy"
        },
        {
          mal_id: 4661,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4661/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5066,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5066/None"
        }
      ],
      themes: [
        {
          mal_id: 6660,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6660/Survival"
        },
        {
          mal_id: 6661,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6661/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7066,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7066/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1066,
              type: "anime",
              name: "One Piece Mock 66 Related",
              url: "https://myanimelist.net/anime/1066/One_Piece_Mock_66_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 66"
        ],
        endings: [
          "Ending Theme 66"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/66"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 67,
      url: "https://myanimelist.net/anime/67/Demon_Slayer_Mock_67",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-133-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-133-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-133-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-134-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-134-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-134-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer067",
        url: "https://www.youtube.com/watch?v=mockTrailer067",
        embed_url: "https://www.youtube.com/embed/mockTrailer067"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 67"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 67"
        }
      ],
      title: "Demon Slayer Mock 67",
      title_english: "Demon Slayer Mock 67",
      title_japanese: "鬼滅の刃 Mock 67",
      title_synonyms: [
        "Demon Slayer Alternative 67"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2022-07-13T00:00:00+00:00",
        to: "2022-09-16T00:00:00+00:00",
        prop: {
          from: {
            day: 13,
            month: 7,
            year: 2022
          },
          to: {
            day: 16,
            month: 9,
            year: 2022
          },
          string: "2022-07-13 to 2022-09-16"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.5,
      scored_by: 500507,
      rank: 67,
      popularity: 167,
      members: 1055000,
      favorites: 17281,
      synopsis: "Demon Slayer Mock 67 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 67 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2022,
      broadcast: {
        day: "Tuesdays",
        time: "04:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1067,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1067/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2067,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2067/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3067,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3067/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4670,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4670/Slice_of_Life"
        },
        {
          mal_id: 4671,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4671/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5067,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5067/None"
        }
      ],
      themes: [
        {
          mal_id: 6670,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6670/Psychological"
        },
        {
          mal_id: 6671,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6671/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7067,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7067/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1067,
              type: "anime",
              name: "Demon Slayer Mock 67 Related",
              url: "https://myanimelist.net/anime/1067/Demon_Slayer_Mock_67_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 67"
        ],
        endings: [
          "Ending Theme 67"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/67"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 68,
      url: "https://myanimelist.net/anime/68/Jujutsu_Kaisen_Mock_68",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-135-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-135-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-135-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-136-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-136-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-136-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer068",
        url: "https://www.youtube.com/watch?v=mockTrailer068",
        embed_url: "https://www.youtube.com/embed/mockTrailer068"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 68"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 68"
        }
      ],
      title: "Jujutsu Kaisen Mock 68",
      title_english: "Jujutsu Kaisen Mock 68",
      title_japanese: "呪術廻戦 Mock 68",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 68"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2023-08-14T00:00:00+00:00",
        to: "2023-10-17T00:00:00+00:00",
        prop: {
          from: {
            day: 14,
            month: 8,
            year: 2023
          },
          to: {
            day: 17,
            month: 10,
            year: 2023
          },
          string: "2023-08-14 to 2023-10-17"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.38,
      scored_by: 507828,
      rank: 68,
      popularity: 168,
      members: 1070000,
      favorites: 17524,
      synopsis: "Jujutsu Kaisen Mock 68 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 68 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2023,
      broadcast: {
        day: "Mondays",
        time: "23:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1068,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1068/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2068,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2068/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3068,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3068/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4680,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4680/Sci-Fi"
        },
        {
          mal_id: 4681,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4681/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5068,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5068/None"
        }
      ],
      themes: [
        {
          mal_id: 6680,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6680/Team_Sports"
        },
        {
          mal_id: 6681,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6681/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7068,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7068/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1068,
              type: "anime",
              name: "Jujutsu Kaisen Mock 68 Related",
              url: "https://myanimelist.net/anime/1068/Jujutsu_Kaisen_Mock_68_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 68"
        ],
        endings: [
          "Ending Theme 68"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/68"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 69,
      url: "https://myanimelist.net/anime/69/Steins;Gate_Mock_69",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-137-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-137-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-137-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-138-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-138-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-138-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer069",
        url: "https://www.youtube.com/watch?v=mockTrailer069",
        embed_url: "https://www.youtube.com/embed/mockTrailer069"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 69"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 69"
        }
      ],
      title: "Steins;Gate Mock 69",
      title_english: "Steins;Gate Mock 69",
      title_japanese: "シュタインズ・ゲート Mock 69",
      title_synonyms: [
        "Steins;Gate Alternative 69"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2024-09-15T00:00:00+00:00",
        to: "2024-11-18T00:00:00+00:00",
        prop: {
          from: {
            day: 15,
            month: 9,
            year: 2024
          },
          to: {
            day: 18,
            month: 11,
            year: 2024
          },
          string: "2024-09-15 to 2024-11-18"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.47,
      scored_by: 515149,
      rank: 69,
      popularity: 169,
      members: 1085000,
      favorites: 17767,
      synopsis: "Steins;Gate Mock 69 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 69 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2024,
      broadcast: {
        day: "Sundays",
        time: "09:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1069,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1069/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2069,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2069/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3069,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3069/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4690,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4690/Sci-Fi"
        },
        {
          mal_id: 4691,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4691/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5069,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5069/None"
        }
      ],
      themes: [
        {
          mal_id: 6690,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6690/Time_Travel"
        },
        {
          mal_id: 6691,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6691/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7069,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7069/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1069,
              type: "anime",
              name: "Steins;Gate Mock 69 Related",
              url: "https://myanimelist.net/anime/1069/Steins;Gate_Mock_69_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 69"
        ],
        endings: [
          "Ending Theme 69"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/69"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 70,
      url: "https://myanimelist.net/anime/70/Vinland_Saga_Mock_70",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-139-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-139-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-139-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-140-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-140-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-140-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer070",
        url: "https://www.youtube.com/watch?v=mockTrailer070",
        embed_url: "https://www.youtube.com/embed/mockTrailer070"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 70"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 70"
        }
      ],
      title: "Vinland Saga Mock 70",
      title_english: "Vinland Saga Mock 70",
      title_japanese: "ヴィンランド・サガ Mock 70",
      title_synonyms: [
        "Vinland Saga Alternative 70"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "1990-10-16T00:00:00+00:00",
        to: "1990-12-19T00:00:00+00:00",
        prop: {
          from: {
            day: 16,
            month: 10,
            year: 1990
          },
          to: {
            day: 19,
            month: 12,
            year: 1990
          },
          string: "1990-10-16 to 1990-12-19"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 6.15,
      scored_by: 522470,
      rank: 70,
      popularity: 170,
      members: 1100000,
      favorites: 18010,
      synopsis: "Vinland Saga Mock 70 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 70 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 1990,
      broadcast: {
        day: "Fridays",
        time: "21:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1070,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1070/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2070,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2070/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3070,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3070/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4700,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4700/Mystery"
        },
        {
          mal_id: 4701,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4701/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5070,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5070/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6700,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6700/Military"
        },
        {
          mal_id: 6701,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6701/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7070,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7070/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1070,
              type: "anime",
              name: "Vinland Saga Mock 70 Related",
              url: "https://myanimelist.net/anime/1070/Vinland_Saga_Mock_70_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 70"
        ],
        endings: [
          "Ending Theme 70"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/70"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 71,
      url: "https://myanimelist.net/anime/71/Cowboy_Bebop_Mock_71",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-141-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-141-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-141-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-142-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-142-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-142-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer071",
        url: "https://www.youtube.com/watch?v=mockTrailer071",
        embed_url: "https://www.youtube.com/embed/mockTrailer071"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 71"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 71"
        }
      ],
      title: "Cowboy Bebop Mock 71",
      title_english: "Cowboy Bebop Mock 71",
      title_japanese: "カウボーイビバップ Mock 71",
      title_synonyms: [
        "Cowboy Bebop Alternative 71"
      ],
      type: "TV",
      source: "Original",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1991-11-17T00:00:00+00:00",
        to: "1991-01-20T00:00:00+00:00",
        prop: {
          from: {
            day: 17,
            month: 11,
            year: 1991
          },
          to: {
            day: 20,
            month: 1,
            year: 1991
          },
          string: "1991-11-17 to 1991-01-20"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 6.44,
      scored_by: 529791,
      rank: 71,
      popularity: 171,
      members: 1115000,
      favorites: 18253,
      synopsis: "Cowboy Bebop Mock 71 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 71 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1991,
      broadcast: {
        day: "Thursdays",
        time: "05:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1071,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1071/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2071,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2071/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3071,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3071/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4710,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4710/Fantasy"
        },
        {
          mal_id: 4711,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4711/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5071,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5071/None"
        }
      ],
      themes: [
        {
          mal_id: 6710,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6710/Military"
        },
        {
          mal_id: 6711,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6711/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7071,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7071/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1071,
              type: "anime",
              name: "Cowboy Bebop Mock 71 Related",
              url: "https://myanimelist.net/anime/1071/Cowboy_Bebop_Mock_71_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 71"
        ],
        endings: [
          "Ending Theme 71"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/71"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 72,
      url: "https://myanimelist.net/anime/72/Naruto_Mock_72",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-143-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-143-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-143-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-144-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-144-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-144-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer072",
        url: "https://www.youtube.com/watch?v=mockTrailer072",
        embed_url: "https://www.youtube.com/embed/mockTrailer072"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 72"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 72"
        }
      ],
      title: "Naruto Mock 72",
      title_english: "Naruto Mock 72",
      title_japanese: "ナルト Mock 72",
      title_synonyms: [
        "Naruto Alternative 72"
      ],
      type: "TV",
      source: "Manga",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1992-12-18T00:00:00+00:00",
        to: "1992-02-21T00:00:00+00:00",
        prop: {
          from: {
            day: 18,
            month: 12,
            year: 1992
          },
          to: {
            day: 21,
            month: 2,
            year: 1992
          },
          string: "1992-12-18 to 1992-02-21"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.19,
      scored_by: 537112,
      rank: 72,
      popularity: 172,
      members: 1130000,
      favorites: 18496,
      synopsis: "Naruto Mock 72 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 72 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1992,
      broadcast: {
        day: "Mondays",
        time: "18:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1072,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1072/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2072,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2072/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3072,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3072/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4720,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4720/Action"
        },
        {
          mal_id: 4721,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4721/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5072,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5072/None"
        }
      ],
      themes: [
        {
          mal_id: 6720,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6720/Time_Travel"
        },
        {
          mal_id: 6721,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6721/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7072,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7072/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1072,
              type: "anime",
              name: "Naruto Mock 72 Related",
              url: "https://myanimelist.net/anime/1072/Naruto_Mock_72_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 72"
        ],
        endings: [
          "Ending Theme 72"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/72"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 73,
      url: "https://myanimelist.net/anime/73/Fullmetal_Alchemist:_Brotherhood_Mock_73",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-145-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-145-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-145-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-146-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-146-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-146-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer073",
        url: "https://www.youtube.com/watch?v=mockTrailer073",
        embed_url: "https://www.youtube.com/embed/mockTrailer073"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 73"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 73"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 73",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 73",
      title_japanese: "鋼の錬金術師 Mock 73",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 73"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1993-01-19T00:00:00+00:00",
        to: "1993-03-22T00:00:00+00:00",
        prop: {
          from: {
            day: 19,
            month: 1,
            year: 1993
          },
          to: {
            day: 22,
            month: 3,
            year: 1993
          },
          string: "1993-01-19 to 1993-03-22"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 9.05,
      scored_by: 544433,
      rank: 73,
      popularity: 173,
      members: 1145000,
      favorites: 18739,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 73 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 73 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1993,
      broadcast: {
        day: "Tuesdays",
        time: "01:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1073,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1073/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2073,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2073/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3073,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3073/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4730,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4730/Sci-Fi"
        },
        {
          mal_id: 4731,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4731/Adventure"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5073,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5073/None"
        }
      ],
      themes: [
        {
          mal_id: 6730,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6730/Time_Travel"
        },
        {
          mal_id: 6731,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6731/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7073,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7073/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1073,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 73 Related",
              url: "https://myanimelist.net/anime/1073/Fullmetal_Alchemist:_Brotherhood_Mock_73_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 73"
        ],
        endings: [
          "Ending Theme 73"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/73"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 74,
      url: "https://myanimelist.net/anime/74/Attack_on_Titan_Mock_74",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-147-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-147-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-147-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-148-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-148-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-148-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer074",
        url: "https://www.youtube.com/watch?v=mockTrailer074",
        embed_url: "https://www.youtube.com/embed/mockTrailer074"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 74"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 74"
        }
      ],
      title: "Attack on Titan Mock 74",
      title_english: "Attack on Titan Mock 74",
      title_japanese: "進撃の巨人 Mock 74",
      title_synonyms: [
        "Attack on Titan Alternative 74"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1994-02-20T00:00:00+00:00",
        to: "1994-04-23T00:00:00+00:00",
        prop: {
          from: {
            day: 20,
            month: 2,
            year: 1994
          },
          to: {
            day: 23,
            month: 4,
            year: 1994
          },
          string: "1994-02-20 to 1994-04-23"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.75,
      scored_by: 551754,
      rank: 74,
      popularity: 174,
      members: 1160000,
      favorites: 18982,
      synopsis: "Attack on Titan Mock 74 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 74 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1994,
      broadcast: {
        day: "Fridays",
        time: "23:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1074,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1074/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2074,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2074/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3074,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3074/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4740,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4740/Slice_of_Life"
        },
        {
          mal_id: 4741,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4741/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5074,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5074/None"
        }
      ],
      themes: [
        {
          mal_id: 6740,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6740/Martial_Arts"
        },
        {
          mal_id: 6741,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6741/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7074,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7074/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1074,
              type: "anime",
              name: "Attack on Titan Mock 74 Related",
              url: "https://myanimelist.net/anime/1074/Attack_on_Titan_Mock_74_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 74"
        ],
        endings: [
          "Ending Theme 74"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/74"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 75,
      url: "https://myanimelist.net/anime/75/Death_Note_Mock_75",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-149-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-149-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-149-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-150-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-150-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-150-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer075",
        url: "https://www.youtube.com/watch?v=mockTrailer075",
        embed_url: "https://www.youtube.com/embed/mockTrailer075"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 75"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 75"
        }
      ],
      title: "Death Note Mock 75",
      title_english: "Death Note Mock 75",
      title_japanese: "デスノート Mock 75",
      title_synonyms: [
        "Death Note Alternative 75"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "1995-03-21T00:00:00+00:00",
        to: "1995-05-24T00:00:00+00:00",
        prop: {
          from: {
            day: 21,
            month: 3,
            year: 1995
          },
          to: {
            day: 24,
            month: 5,
            year: 1995
          },
          string: "1995-03-21 to 1995-05-24"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.81,
      scored_by: 559075,
      rank: 75,
      popularity: 175,
      members: 1175000,
      favorites: 19225,
      synopsis: "Death Note Mock 75 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 75 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1995,
      broadcast: {
        day: "Fridays",
        time: "23:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1075,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1075/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2075,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2075/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3075,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3075/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4750,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4750/Supernatural"
        },
        {
          mal_id: 4751,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4751/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5075,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5075/None"
        }
      ],
      themes: [
        {
          mal_id: 6750,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6750/Space"
        },
        {
          mal_id: 6751,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6751/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7075,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7075/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1075,
              type: "anime",
              name: "Death Note Mock 75 Related",
              url: "https://myanimelist.net/anime/1075/Death_Note_Mock_75_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 75"
        ],
        endings: [
          "Ending Theme 75"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/75"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 76,
      url: "https://myanimelist.net/anime/76/One_Piece_Mock_76",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-151-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-151-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-151-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-152-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-152-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-152-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer076",
        url: "https://www.youtube.com/watch?v=mockTrailer076",
        embed_url: "https://www.youtube.com/embed/mockTrailer076"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 76"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 76"
        }
      ],
      title: "One Piece Mock 76",
      title_english: "One Piece Mock 76",
      title_japanese: "ワンピース Mock 76",
      title_synonyms: [
        "One Piece Alternative 76"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1996-04-22T00:00:00+00:00",
        to: "1996-06-25T00:00:00+00:00",
        prop: {
          from: {
            day: 22,
            month: 4,
            year: 1996
          },
          to: {
            day: 25,
            month: 6,
            year: 1996
          },
          string: "1996-04-22 to 1996-06-25"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 8.09,
      scored_by: 566396,
      rank: 76,
      popularity: 176,
      members: 1190000,
      favorites: 19468,
      synopsis: "One Piece Mock 76 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 76 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1996,
      broadcast: {
        day: "Wednesdays",
        time: "06:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1076,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1076/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2076,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2076/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3076,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3076/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4760,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4760/Action"
        },
        {
          mal_id: 4761,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4761/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5076,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5076/None"
        }
      ],
      themes: [
        {
          mal_id: 6760,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6760/Time_Travel"
        },
        {
          mal_id: 6761,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6761/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7076,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7076/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1076,
              type: "anime",
              name: "One Piece Mock 76 Related",
              url: "https://myanimelist.net/anime/1076/One_Piece_Mock_76_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 76"
        ],
        endings: [
          "Ending Theme 76"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/76"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 77,
      url: "https://myanimelist.net/anime/77/Demon_Slayer_Mock_77",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-153-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-153-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-153-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-154-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-154-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-154-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer077",
        url: "https://www.youtube.com/watch?v=mockTrailer077",
        embed_url: "https://www.youtube.com/embed/mockTrailer077"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 77"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 77"
        }
      ],
      title: "Demon Slayer Mock 77",
      title_english: "Demon Slayer Mock 77",
      title_japanese: "鬼滅の刃 Mock 77",
      title_synonyms: [
        "Demon Slayer Alternative 77"
      ],
      type: "TV",
      source: "Manga",
      episodes: 25,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1997-05-23T00:00:00+00:00",
        to: "1997-07-26T00:00:00+00:00",
        prop: {
          from: {
            day: 23,
            month: 5,
            year: 1997
          },
          to: {
            day: 26,
            month: 7,
            year: 1997
          },
          string: "1997-05-23 to 1997-07-26"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.37,
      scored_by: 573717,
      rank: 77,
      popularity: 177,
      members: 1205000,
      favorites: 19711,
      synopsis: "Demon Slayer Mock 77 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 77 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1997,
      broadcast: {
        day: "Thursdays",
        time: "05:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1077,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1077/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2077,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2077/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3077,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3077/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4770,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4770/Action"
        },
        {
          mal_id: 4771,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4771/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5077,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5077/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6770,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6770/Space"
        },
        {
          mal_id: 6771,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6771/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7077,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7077/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1077,
              type: "anime",
              name: "Demon Slayer Mock 77 Related",
              url: "https://myanimelist.net/anime/1077/Demon_Slayer_Mock_77_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 77"
        ],
        endings: [
          "Ending Theme 77"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/77"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 78,
      url: "https://myanimelist.net/anime/78/Jujutsu_Kaisen_Mock_78",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-155-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-155-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-155-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-156-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-156-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-156-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer078",
        url: "https://www.youtube.com/watch?v=mockTrailer078",
        embed_url: "https://www.youtube.com/embed/mockTrailer078"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 78"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 78"
        }
      ],
      title: "Jujutsu Kaisen Mock 78",
      title_english: "Jujutsu Kaisen Mock 78",
      title_japanese: "呪術廻戦 Mock 78",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 78"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1998-06-24T00:00:00+00:00",
        to: "1998-08-27T00:00:00+00:00",
        prop: {
          from: {
            day: 24,
            month: 6,
            year: 1998
          },
          to: {
            day: 27,
            month: 8,
            year: 1998
          },
          string: "1998-06-24 to 1998-08-27"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.56,
      scored_by: 581038,
      rank: 78,
      popularity: 178,
      members: 1220000,
      favorites: 19954,
      synopsis: "Jujutsu Kaisen Mock 78 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 78 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 1998,
      broadcast: {
        day: "Mondays",
        time: "21:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1078,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1078/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2078,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2078/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3078,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3078/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4780,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4780/Comedy"
        },
        {
          mal_id: 4781,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4781/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5078,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5078/None"
        }
      ],
      themes: [
        {
          mal_id: 6780,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6780/Historical"
        },
        {
          mal_id: 6781,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6781/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7078,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7078/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1078,
              type: "anime",
              name: "Jujutsu Kaisen Mock 78 Related",
              url: "https://myanimelist.net/anime/1078/Jujutsu_Kaisen_Mock_78_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 78"
        ],
        endings: [
          "Ending Theme 78"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/78"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 79,
      url: "https://myanimelist.net/anime/79/Steins;Gate_Mock_79",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-157-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-157-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-157-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-158-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-158-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-158-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer079",
        url: "https://www.youtube.com/watch?v=mockTrailer079",
        embed_url: "https://www.youtube.com/embed/mockTrailer079"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 79"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 79"
        }
      ],
      title: "Steins;Gate Mock 79",
      title_english: "Steins;Gate Mock 79",
      title_japanese: "シュタインズ・ゲート Mock 79",
      title_synonyms: [
        "Steins;Gate Alternative 79"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "1999-07-25T00:00:00+00:00",
        to: "1999-09-28T00:00:00+00:00",
        prop: {
          from: {
            day: 25,
            month: 7,
            year: 1999
          },
          to: {
            day: 28,
            month: 9,
            year: 1999
          },
          string: "1999-07-25 to 1999-09-28"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.7,
      scored_by: 588359,
      rank: 79,
      popularity: 179,
      members: 1235000,
      favorites: 20197,
      synopsis: "Steins;Gate Mock 79 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 79 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 1999,
      broadcast: {
        day: "Saturdays",
        time: "12:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1079,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1079/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2079,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2079/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3079,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3079/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4790,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4790/Mystery"
        },
        {
          mal_id: 4791,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4791/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5079,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5079/None"
        }
      ],
      themes: [
        {
          mal_id: 6790,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6790/Martial_Arts"
        },
        {
          mal_id: 6791,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6791/School"
        }
      ],
      demographics: [
        {
          mal_id: 7079,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7079/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1079,
              type: "anime",
              name: "Steins;Gate Mock 79 Related",
              url: "https://myanimelist.net/anime/1079/Steins;Gate_Mock_79_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 79"
        ],
        endings: [
          "Ending Theme 79"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/79"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 80,
      url: "https://myanimelist.net/anime/80/Vinland_Saga_Mock_80",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-159-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-159-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-159-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-160-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-160-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-160-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer080",
        url: "https://www.youtube.com/watch?v=mockTrailer080",
        embed_url: "https://www.youtube.com/embed/mockTrailer080"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 80"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 80"
        }
      ],
      title: "Vinland Saga Mock 80",
      title_english: "Vinland Saga Mock 80",
      title_japanese: "ヴィンランド・サガ Mock 80",
      title_synonyms: [
        "Vinland Saga Alternative 80"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2000-08-26T00:00:00+00:00",
        to: "2000-10-28T00:00:00+00:00",
        prop: {
          from: {
            day: 26,
            month: 8,
            year: 2000
          },
          to: {
            day: 28,
            month: 10,
            year: 2000
          },
          string: "2000-08-26 to 2000-10-28"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.94,
      scored_by: 595680,
      rank: 80,
      popularity: 180,
      members: 1250000,
      favorites: 20440,
      synopsis: "Vinland Saga Mock 80 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 80 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2000,
      broadcast: {
        day: "Thursdays",
        time: "05:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1080,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1080/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2080,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2080/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3080,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3080/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4800,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4800/Suspense"
        },
        {
          mal_id: 4801,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4801/Action"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5080,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5080/None"
        }
      ],
      themes: [
        {
          mal_id: 6800,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6800/Survival"
        },
        {
          mal_id: 6801,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6801/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7080,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7080/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1080,
              type: "anime",
              name: "Vinland Saga Mock 80 Related",
              url: "https://myanimelist.net/anime/1080/Vinland_Saga_Mock_80_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 80"
        ],
        endings: [
          "Ending Theme 80"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/80"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 81,
      url: "https://myanimelist.net/anime/81/Cowboy_Bebop_Mock_81",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-161-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-161-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-161-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-162-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-162-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-162-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer081",
        url: "https://www.youtube.com/watch?v=mockTrailer081",
        embed_url: "https://www.youtube.com/embed/mockTrailer081"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 81"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 81"
        }
      ],
      title: "Cowboy Bebop Mock 81",
      title_english: "Cowboy Bebop Mock 81",
      title_japanese: "カウボーイビバップ Mock 81",
      title_synonyms: [
        "Cowboy Bebop Alternative 81"
      ],
      type: "TV",
      source: "Original",
      episodes: 100,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2001-09-27T00:00:00+00:00",
        to: "2001-11-28T00:00:00+00:00",
        prop: {
          from: {
            day: 27,
            month: 9,
            year: 2001
          },
          to: {
            day: 28,
            month: 11,
            year: 2001
          },
          string: "2001-09-27 to 2001-11-28"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.95,
      scored_by: 603001,
      rank: 81,
      popularity: 181,
      members: 1265000,
      favorites: 20683,
      synopsis: "Cowboy Bebop Mock 81 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 81 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2001,
      broadcast: {
        day: "Wednesdays",
        time: "11:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1081,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1081/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2081,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2081/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3081,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3081/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4810,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4810/Action"
        },
        {
          mal_id: 4811,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4811/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5081,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5081/None"
        }
      ],
      themes: [
        {
          mal_id: 6810,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6810/Martial_Arts"
        },
        {
          mal_id: 6811,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6811/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7081,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7081/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1081,
              type: "anime",
              name: "Cowboy Bebop Mock 81 Related",
              url: "https://myanimelist.net/anime/1081/Cowboy_Bebop_Mock_81_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 81"
        ],
        endings: [
          "Ending Theme 81"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/81"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 82,
      url: "https://myanimelist.net/anime/82/Naruto_Mock_82",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-163-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-163-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-163-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-164-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-164-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-164-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer082",
        url: "https://www.youtube.com/watch?v=mockTrailer082",
        embed_url: "https://www.youtube.com/embed/mockTrailer082"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 82"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 82"
        }
      ],
      title: "Naruto Mock 82",
      title_english: "Naruto Mock 82",
      title_japanese: "ナルト Mock 82",
      title_synonyms: [
        "Naruto Alternative 82"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2002-10-01T00:00:00+00:00",
        to: "2002-12-04T00:00:00+00:00",
        prop: {
          from: {
            day: 1,
            month: 10,
            year: 2002
          },
          to: {
            day: 4,
            month: 12,
            year: 2002
          },
          string: "2002-10-01 to 2002-12-04"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 7.91,
      scored_by: 610322,
      rank: 82,
      popularity: 182,
      members: 1280000,
      favorites: 20926,
      synopsis: "Naruto Mock 82 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 82 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2002,
      broadcast: {
        day: "Tuesdays",
        time: "07:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1082,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1082/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2082,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2082/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3082,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3082/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4820,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4820/Drama"
        },
        {
          mal_id: 4821,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4821/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5082,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5082/None"
        }
      ],
      themes: [
        {
          mal_id: 6820,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6820/Historical"
        },
        {
          mal_id: 6821,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6821/School"
        }
      ],
      demographics: [
        {
          mal_id: 7082,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7082/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1082,
              type: "anime",
              name: "Naruto Mock 82 Related",
              url: "https://myanimelist.net/anime/1082/Naruto_Mock_82_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 82"
        ],
        endings: [
          "Ending Theme 82"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/82"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 83,
      url: "https://myanimelist.net/anime/83/Fullmetal_Alchemist:_Brotherhood_Mock_83",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-165-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-165-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-165-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-166-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-166-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-166-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer083",
        url: "https://www.youtube.com/watch?v=mockTrailer083",
        embed_url: "https://www.youtube.com/embed/mockTrailer083"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 83"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 83"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 83",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 83",
      title_japanese: "鋼の錬金術師 Mock 83",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 83"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2003-11-02T00:00:00+00:00",
        to: "2003-01-05T00:00:00+00:00",
        prop: {
          from: {
            day: 2,
            month: 11,
            year: 2003
          },
          to: {
            day: 5,
            month: 1,
            year: 2003
          },
          string: "2003-11-02 to 2003-01-05"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.23,
      scored_by: 617643,
      rank: 83,
      popularity: 183,
      members: 1295000,
      favorites: 21169,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 83 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 83 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2003,
      broadcast: {
        day: "Saturdays",
        time: "00:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1083,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1083/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2083,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2083/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3083,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3083/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4830,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4830/Suspense"
        },
        {
          mal_id: 4831,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4831/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5083,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5083/None"
        }
      ],
      themes: [
        {
          mal_id: 6830,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6830/School"
        },
        {
          mal_id: 6831,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6831/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7083,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7083/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1083,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 83 Related",
              url: "https://myanimelist.net/anime/1083/Fullmetal_Alchemist:_Brotherhood_Mock_83_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 83"
        ],
        endings: [
          "Ending Theme 83"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/83"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 84,
      url: "https://myanimelist.net/anime/84/Attack_on_Titan_Mock_84",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-167-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-167-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-167-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-168-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-168-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-168-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer084",
        url: "https://www.youtube.com/watch?v=mockTrailer084",
        embed_url: "https://www.youtube.com/embed/mockTrailer084"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 84"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 84"
        }
      ],
      title: "Attack on Titan Mock 84",
      title_english: "Attack on Titan Mock 84",
      title_japanese: "進撃の巨人 Mock 84",
      title_synonyms: [
        "Attack on Titan Alternative 84"
      ],
      type: "TV",
      source: "Manga",
      episodes: 24,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2004-12-03T00:00:00+00:00",
        to: "2004-02-06T00:00:00+00:00",
        prop: {
          from: {
            day: 3,
            month: 12,
            year: 2004
          },
          to: {
            day: 6,
            month: 2,
            year: 2004
          },
          string: "2004-12-03 to 2004-02-06"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.76,
      scored_by: 624964,
      rank: 84,
      popularity: 184,
      members: 1310000,
      favorites: 21412,
      synopsis: "Attack on Titan Mock 84 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 84 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2004,
      broadcast: {
        day: "Thursdays",
        time: "01:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1084,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1084/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2084,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2084/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3084,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3084/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4840,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4840/Slice_of_Life"
        },
        {
          mal_id: 4841,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4841/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5084,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5084/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6840,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6840/Space"
        },
        {
          mal_id: 6841,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6841/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7084,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7084/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1084,
              type: "anime",
              name: "Attack on Titan Mock 84 Related",
              url: "https://myanimelist.net/anime/1084/Attack_on_Titan_Mock_84_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 84"
        ],
        endings: [
          "Ending Theme 84"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/84"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 85,
      url: "https://myanimelist.net/anime/85/Death_Note_Mock_85",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-169-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-169-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-169-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-170-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-170-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-170-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer085",
        url: "https://www.youtube.com/watch?v=mockTrailer085",
        embed_url: "https://www.youtube.com/embed/mockTrailer085"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 85"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 85"
        }
      ],
      title: "Death Note Mock 85",
      title_english: "Death Note Mock 85",
      title_japanese: "デスノート Mock 85",
      title_synonyms: [
        "Death Note Alternative 85"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2005-01-04T00:00:00+00:00",
        to: "2005-03-07T00:00:00+00:00",
        prop: {
          from: {
            day: 4,
            month: 1,
            year: 2005
          },
          to: {
            day: 7,
            month: 3,
            year: 2005
          },
          string: "2005-01-04 to 2005-03-07"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.92,
      scored_by: 632285,
      rank: 85,
      popularity: 185,
      members: 1325000,
      favorites: 21655,
      synopsis: "Death Note Mock 85 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 85 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2005,
      broadcast: {
        day: "Fridays",
        time: "15:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1085,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1085/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2085,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2085/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3085,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3085/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4850,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4850/Suspense"
        },
        {
          mal_id: 4851,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4851/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5085,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5085/None"
        }
      ],
      themes: [
        {
          mal_id: 6850,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6850/Time_Travel"
        },
        {
          mal_id: 6851,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6851/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7085,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7085/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1085,
              type: "anime",
              name: "Death Note Mock 85 Related",
              url: "https://myanimelist.net/anime/1085/Death_Note_Mock_85_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 85"
        ],
        endings: [
          "Ending Theme 85"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/85"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 86,
      url: "https://myanimelist.net/anime/86/One_Piece_Mock_86",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-171-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-171-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-171-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-172-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-172-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-172-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer086",
        url: "https://www.youtube.com/watch?v=mockTrailer086",
        embed_url: "https://www.youtube.com/embed/mockTrailer086"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 86"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 86"
        }
      ],
      title: "One Piece Mock 86",
      title_english: "One Piece Mock 86",
      title_japanese: "ワンピース Mock 86",
      title_synonyms: [
        "One Piece Alternative 86"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2006-02-05T00:00:00+00:00",
        to: "2006-04-08T00:00:00+00:00",
        prop: {
          from: {
            day: 5,
            month: 2,
            year: 2006
          },
          to: {
            day: 8,
            month: 4,
            year: 2006
          },
          string: "2006-02-05 to 2006-04-08"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 9.11,
      scored_by: 639606,
      rank: 86,
      popularity: 186,
      members: 1340000,
      favorites: 21898,
      synopsis: "One Piece Mock 86 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 86 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2006,
      broadcast: {
        day: "Wednesdays",
        time: "15:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1086,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1086/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2086,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2086/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3086,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3086/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4860,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4860/Fantasy"
        },
        {
          mal_id: 4861,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4861/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5086,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5086/None"
        }
      ],
      themes: [
        {
          mal_id: 6860,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6860/School"
        },
        {
          mal_id: 6861,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6861/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7086,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7086/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1086,
              type: "anime",
              name: "One Piece Mock 86 Related",
              url: "https://myanimelist.net/anime/1086/One_Piece_Mock_86_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 86"
        ],
        endings: [
          "Ending Theme 86"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/86"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 87,
      url: "https://myanimelist.net/anime/87/Demon_Slayer_Mock_87",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-173-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-173-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-173-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-174-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-174-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-174-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer087",
        url: "https://www.youtube.com/watch?v=mockTrailer087",
        embed_url: "https://www.youtube.com/embed/mockTrailer087"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 87"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 87"
        }
      ],
      title: "Demon Slayer Mock 87",
      title_english: "Demon Slayer Mock 87",
      title_japanese: "鬼滅の刃 Mock 87",
      title_synonyms: [
        "Demon Slayer Alternative 87"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2007-03-06T00:00:00+00:00",
        to: "2007-05-09T00:00:00+00:00",
        prop: {
          from: {
            day: 6,
            month: 3,
            year: 2007
          },
          to: {
            day: 9,
            month: 5,
            year: 2007
          },
          string: "2007-03-06 to 2007-05-09"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 7.31,
      scored_by: 646927,
      rank: 87,
      popularity: 187,
      members: 1355000,
      favorites: 22141,
      synopsis: "Demon Slayer Mock 87 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 87 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2007,
      broadcast: {
        day: "Sundays",
        time: "19:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1087,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1087/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2087,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2087/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3087,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3087/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4870,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4870/Action"
        },
        {
          mal_id: 4871,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4871/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5087,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5087/None"
        }
      ],
      themes: [
        {
          mal_id: 6870,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6870/Military"
        },
        {
          mal_id: 6871,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6871/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7087,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7087/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1087,
              type: "anime",
              name: "Demon Slayer Mock 87 Related",
              url: "https://myanimelist.net/anime/1087/Demon_Slayer_Mock_87_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 87"
        ],
        endings: [
          "Ending Theme 87"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/87"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 88,
      url: "https://myanimelist.net/anime/88/Jujutsu_Kaisen_Mock_88",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-175-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-175-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-175-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-176-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-176-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-176-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer088",
        url: "https://www.youtube.com/watch?v=mockTrailer088",
        embed_url: "https://www.youtube.com/embed/mockTrailer088"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 88"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 88"
        }
      ],
      title: "Jujutsu Kaisen Mock 88",
      title_english: "Jujutsu Kaisen Mock 88",
      title_japanese: "呪術廻戦 Mock 88",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 88"
      ],
      type: "TV",
      source: "Manga",
      episodes: 37,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2008-04-07T00:00:00+00:00",
        to: "2008-06-10T00:00:00+00:00",
        prop: {
          from: {
            day: 7,
            month: 4,
            year: 2008
          },
          to: {
            day: 10,
            month: 6,
            year: 2008
          },
          string: "2008-04-07 to 2008-06-10"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.39,
      scored_by: 654248,
      rank: 88,
      popularity: 188,
      members: 1370000,
      favorites: 22384,
      synopsis: "Jujutsu Kaisen Mock 88 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 88 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2008,
      broadcast: {
        day: "Fridays",
        time: "16:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1088,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1088/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2088,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2088/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3088,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3088/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4880,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4880/Adventure"
        },
        {
          mal_id: 4881,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4881/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5088,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5088/None"
        }
      ],
      themes: [
        {
          mal_id: 6880,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6880/Team_Sports"
        },
        {
          mal_id: 6881,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6881/Historical"
        }
      ],
      demographics: [
        {
          mal_id: 7088,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7088/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1088,
              type: "anime",
              name: "Jujutsu Kaisen Mock 88 Related",
              url: "https://myanimelist.net/anime/1088/Jujutsu_Kaisen_Mock_88_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 88"
        ],
        endings: [
          "Ending Theme 88"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/88"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 89,
      url: "https://myanimelist.net/anime/89/Steins;Gate_Mock_89",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-177-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-177-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-177-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-178-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-178-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-178-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer089",
        url: "https://www.youtube.com/watch?v=mockTrailer089",
        embed_url: "https://www.youtube.com/embed/mockTrailer089"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 89"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 89"
        }
      ],
      title: "Steins;Gate Mock 89",
      title_english: "Steins;Gate Mock 89",
      title_japanese: "シュタインズ・ゲート Mock 89",
      title_synonyms: [
        "Steins;Gate Alternative 89"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2009-05-08T00:00:00+00:00",
        to: "2009-07-11T00:00:00+00:00",
        prop: {
          from: {
            day: 8,
            month: 5,
            year: 2009
          },
          to: {
            day: 11,
            month: 7,
            year: 2009
          },
          string: "2009-05-08 to 2009-07-11"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.25,
      scored_by: 661569,
      rank: 89,
      popularity: 189,
      members: 1385000,
      favorites: 22627,
      synopsis: "Steins;Gate Mock 89 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 89 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2009,
      broadcast: {
        day: "Saturdays",
        time: "16:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1089,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1089/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2089,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2089/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3089,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3089/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4890,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4890/Suspense"
        },
        {
          mal_id: 4891,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4891/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5089,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5089/None"
        }
      ],
      themes: [
        {
          mal_id: 6890,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6890/Martial_Arts"
        },
        {
          mal_id: 6891,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6891/Team_Sports"
        }
      ],
      demographics: [
        {
          mal_id: 7089,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7089/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1089,
              type: "anime",
              name: "Steins;Gate Mock 89 Related",
              url: "https://myanimelist.net/anime/1089/Steins;Gate_Mock_89_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 89"
        ],
        endings: [
          "Ending Theme 89"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/89"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 90,
      url: "https://myanimelist.net/anime/90/Vinland_Saga_Mock_90",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-179-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-179-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-179-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-180-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-180-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-180-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer090",
        url: "https://www.youtube.com/watch?v=mockTrailer090",
        embed_url: "https://www.youtube.com/embed/mockTrailer090"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 90"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 90"
        }
      ],
      title: "Vinland Saga Mock 90",
      title_english: "Vinland Saga Mock 90",
      title_japanese: "ヴィンランド・サガ Mock 90",
      title_synonyms: [
        "Vinland Saga Alternative 90"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2010-06-09T00:00:00+00:00",
        to: "2010-08-12T00:00:00+00:00",
        prop: {
          from: {
            day: 9,
            month: 6,
            year: 2010
          },
          to: {
            day: 12,
            month: 8,
            year: 2010
          },
          string: "2010-06-09 to 2010-08-12"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 9.09,
      scored_by: 668890,
      rank: 90,
      popularity: 190,
      members: 1400000,
      favorites: 22870,
      synopsis: "Vinland Saga Mock 90 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 90 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2010,
      broadcast: {
        day: "Thursdays",
        time: "16:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1090,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1090/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2090,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2090/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3090,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3090/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 4900,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4900/Suspense"
        },
        {
          mal_id: 4901,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4901/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5090,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5090/None"
        }
      ],
      themes: [
        {
          mal_id: 6900,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6900/Psychological"
        },
        {
          mal_id: 6901,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6901/Time_Travel"
        }
      ],
      demographics: [
        {
          mal_id: 7090,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7090/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1090,
              type: "anime",
              name: "Vinland Saga Mock 90 Related",
              url: "https://myanimelist.net/anime/1090/Vinland_Saga_Mock_90_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 90"
        ],
        endings: [
          "Ending Theme 90"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/90"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 91,
      url: "https://myanimelist.net/anime/91/Cowboy_Bebop_Mock_91",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-181-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-181-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-181-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-182-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-182-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-182-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer091",
        url: "https://www.youtube.com/watch?v=mockTrailer091",
        embed_url: "https://www.youtube.com/embed/mockTrailer091"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Cowboy Bebop Mock 91"
        },
        {
          type: "Japanese",
          title: "カウボーイビバップ Mock 91"
        }
      ],
      title: "Cowboy Bebop Mock 91",
      title_english: "Cowboy Bebop Mock 91",
      title_japanese: "カウボーイビバップ Mock 91",
      title_synonyms: [
        "Cowboy Bebop Alternative 91"
      ],
      type: "TV",
      source: "Original",
      episodes: 64,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2011-07-10T00:00:00+00:00",
        to: "2011-09-13T00:00:00+00:00",
        prop: {
          from: {
            day: 10,
            month: 7,
            year: 2011
          },
          to: {
            day: 13,
            month: 9,
            year: 2011
          },
          string: "2011-07-10 to 2011-09-13"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.8,
      scored_by: 676211,
      rank: 91,
      popularity: 191,
      members: 1415000,
      favorites: 23113,
      synopsis: "Cowboy Bebop Mock 91 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Cowboy Bebop Mock 91 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2011,
      broadcast: {
        day: "Mondays",
        time: "14:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1091,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1091/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2091,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2091/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3091,
          type: "anime",
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/3091/Madhouse"
        }
      ],
      genres: [
        {
          mal_id: 4910,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4910/Suspense"
        },
        {
          mal_id: 4911,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4911/Mystery"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5091,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5091/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6910,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6910/Team_Sports"
        },
        {
          mal_id: 6911,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6911/Military"
        }
      ],
      demographics: [
        {
          mal_id: 7091,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7091/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1091,
              type: "anime",
              name: "Cowboy Bebop Mock 91 Related",
              url: "https://myanimelist.net/anime/1091/Cowboy_Bebop_Mock_91_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 91"
        ],
        endings: [
          "Ending Theme 91"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/91"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 92,
      url: "https://myanimelist.net/anime/92/Naruto_Mock_92",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-183-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-183-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-183-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-184-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-184-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-184-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer092",
        url: "https://www.youtube.com/watch?v=mockTrailer092",
        embed_url: "https://www.youtube.com/embed/mockTrailer092"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Naruto Mock 92"
        },
        {
          type: "Japanese",
          title: "ナルト Mock 92"
        }
      ],
      title: "Naruto Mock 92",
      title_english: "Naruto Mock 92",
      title_japanese: "ナルト Mock 92",
      title_synonyms: [
        "Naruto Alternative 92"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2012-08-11T00:00:00+00:00",
        to: "2012-10-14T00:00:00+00:00",
        prop: {
          from: {
            day: 11,
            month: 8,
            year: 2012
          },
          to: {
            day: 14,
            month: 10,
            year: 2012
          },
          string: "2012-08-11 to 2012-10-14"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 9.12,
      scored_by: 683532,
      rank: 92,
      popularity: 192,
      members: 1430000,
      favorites: 23356,
      synopsis: "Naruto Mock 92 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Naruto Mock 92 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2012,
      broadcast: {
        day: "Mondays",
        time: "18:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1092,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1092/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2092,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2092/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3092,
          type: "anime",
          name: "Bones",
          url: "https://myanimelist.net/anime/producer/3092/Bones"
        }
      ],
      genres: [
        {
          mal_id: 4920,
          type: "anime",
          name: "Fantasy",
          url: "https://myanimelist.net/anime/producer/4920/Fantasy"
        },
        {
          mal_id: 4921,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/producer/4921/Sci-Fi"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5092,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5092/None"
        }
      ],
      themes: [
        {
          mal_id: 6920,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6920/School"
        },
        {
          mal_id: 6921,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6921/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7092,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7092/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1092,
              type: "anime",
              name: "Naruto Mock 92 Related",
              url: "https://myanimelist.net/anime/1092/Naruto_Mock_92_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 92"
        ],
        endings: [
          "Ending Theme 92"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/92"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 93,
      url: "https://myanimelist.net/anime/93/Fullmetal_Alchemist:_Brotherhood_Mock_93",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-185-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-185-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-185-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-186-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-186-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-186-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer093",
        url: "https://www.youtube.com/watch?v=mockTrailer093",
        embed_url: "https://www.youtube.com/embed/mockTrailer093"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Fullmetal Alchemist: Brotherhood Mock 93"
        },
        {
          type: "Japanese",
          title: "鋼の錬金術師 Mock 93"
        }
      ],
      title: "Fullmetal Alchemist: Brotherhood Mock 93",
      title_english: "Fullmetal Alchemist: Brotherhood Mock 93",
      title_japanese: "鋼の錬金術師 Mock 93",
      title_synonyms: [
        "Fullmetal Alchemist: Brotherhood Alternative 93"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2013-09-12T00:00:00+00:00",
        to: "2013-11-15T00:00:00+00:00",
        prop: {
          from: {
            day: 12,
            month: 9,
            year: 2013
          },
          to: {
            day: 15,
            month: 11,
            year: 2013
          },
          string: "2013-09-12 to 2013-11-15"
        }
      },
      duration: "24 min per ep",
      rating: "G - All Ages",
      score: 6.83,
      scored_by: 690853,
      rank: 93,
      popularity: 193,
      members: 1445000,
      favorites: 23599,
      synopsis: "Fullmetal Alchemist: Brotherhood Mock 93 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Fullmetal Alchemist: Brotherhood Mock 93 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2013,
      broadcast: {
        day: "Saturdays",
        time: "03:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1093,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1093/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2093,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2093/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3093,
          type: "anime",
          name: "MAPPA",
          url: "https://myanimelist.net/anime/producer/3093/MAPPA"
        }
      ],
      genres: [
        {
          mal_id: 4930,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4930/Drama"
        },
        {
          mal_id: 4931,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4931/Supernatural"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5093,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5093/None"
        }
      ],
      themes: [
        {
          mal_id: 6930,
          type: "anime",
          name: "Historical",
          url: "https://myanimelist.net/anime/producer/6930/Historical"
        },
        {
          mal_id: 6931,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/6931/Survival"
        }
      ],
      demographics: [
        {
          mal_id: 7093,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7093/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1093,
              type: "anime",
              name: "Fullmetal Alchemist: Brotherhood Mock 93 Related",
              url: "https://myanimelist.net/anime/1093/Fullmetal_Alchemist:_Brotherhood_Mock_93_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 93"
        ],
        endings: [
          "Ending Theme 93"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/93"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 94,
      url: "https://myanimelist.net/anime/94/Attack_on_Titan_Mock_94",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-187-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-187-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-187-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-188-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-188-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-188-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer094",
        url: "https://www.youtube.com/watch?v=mockTrailer094",
        embed_url: "https://www.youtube.com/embed/mockTrailer094"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Attack on Titan Mock 94"
        },
        {
          type: "Japanese",
          title: "進撃の巨人 Mock 94"
        }
      ],
      title: "Attack on Titan Mock 94",
      title_english: "Attack on Titan Mock 94",
      title_japanese: "進撃の巨人 Mock 94",
      title_synonyms: [
        "Attack on Titan Alternative 94"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2014-10-13T00:00:00+00:00",
        to: "2014-12-16T00:00:00+00:00",
        prop: {
          from: {
            day: 13,
            month: 10,
            year: 2014
          },
          to: {
            day: 16,
            month: 12,
            year: 2014
          },
          string: "2014-10-13 to 2014-12-16"
        }
      },
      duration: "24 min per ep",
      rating: "PG - Children",
      score: 8.43,
      scored_by: 698174,
      rank: 94,
      popularity: 194,
      members: 1460000,
      favorites: 23842,
      synopsis: "Attack on Titan Mock 94 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Attack on Titan Mock 94 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2014,
      broadcast: {
        day: "Wednesdays",
        time: "00:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1094,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/1094/Bandai_Visual"
        }
      ],
      licensors: [
        {
          mal_id: 2094,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2094/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3094,
          type: "anime",
          name: "Wit Studio",
          url: "https://myanimelist.net/anime/producer/3094/Wit_Studio"
        }
      ],
      genres: [
        {
          mal_id: 4940,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4940/Adventure"
        },
        {
          mal_id: 4941,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/4941/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5094,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5094/None"
        }
      ],
      themes: [
        {
          mal_id: 6940,
          type: "anime",
          name: "Team Sports",
          url: "https://myanimelist.net/anime/producer/6940/Team_Sports"
        },
        {
          mal_id: 6941,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6941/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7094,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7094/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1094,
              type: "anime",
              name: "Attack on Titan Mock 94 Related",
              url: "https://myanimelist.net/anime/1094/Attack_on_Titan_Mock_94_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 94"
        ],
        endings: [
          "Ending Theme 94"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/94"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 95,
      url: "https://myanimelist.net/anime/95/Death_Note_Mock_95",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-189-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-189-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-189-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-190-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-190-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-190-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer095",
        url: "https://www.youtube.com/watch?v=mockTrailer095",
        embed_url: "https://www.youtube.com/embed/mockTrailer095"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Death Note Mock 95"
        },
        {
          type: "Japanese",
          title: "デスノート Mock 95"
        }
      ],
      title: "Death Note Mock 95",
      title_english: "Death Note Mock 95",
      title_japanese: "デスノート Mock 95",
      title_synonyms: [
        "Death Note Alternative 95"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2015-11-14T00:00:00+00:00",
        to: "2015-01-17T00:00:00+00:00",
        prop: {
          from: {
            day: 14,
            month: 11,
            year: 2015
          },
          to: {
            day: 17,
            month: 1,
            year: 2015
          },
          string: "2015-11-14 to 2015-01-17"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.59,
      scored_by: 705495,
      rank: 95,
      popularity: 195,
      members: 1475000,
      favorites: 24085,
      synopsis: "Death Note Mock 95 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Death Note Mock 95 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2015,
      broadcast: {
        day: "Saturdays",
        time: "17:00",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1095,
          type: "anime",
          name: "Kodansha",
          url: "https://myanimelist.net/anime/producer/1095/Kodansha"
        }
      ],
      licensors: [
        {
          mal_id: 2095,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2095/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3095,
          type: "anime",
          name: "Pierrot",
          url: "https://myanimelist.net/anime/producer/3095/Pierrot"
        }
      ],
      genres: [
        {
          mal_id: 4950,
          type: "anime",
          name: "Mystery",
          url: "https://myanimelist.net/anime/producer/4950/Mystery"
        },
        {
          mal_id: 4951,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/4951/Adventure"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5095,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5095/None"
        }
      ],
      themes: [
        {
          mal_id: 6950,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6950/Space"
        },
        {
          mal_id: 6951,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6951/Psychological"
        }
      ],
      demographics: [
        {
          mal_id: 7095,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7095/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1095,
              type: "anime",
              name: "Death Note Mock 95 Related",
              url: "https://myanimelist.net/anime/1095/Death_Note_Mock_95_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 95"
        ],
        endings: [
          "Ending Theme 95"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/95"
        }
      ],
      streaming: [
        {
          name: "Crunchyroll",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 96,
      url: "https://myanimelist.net/anime/96/One_Piece_Mock_96",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-191-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-191-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-191-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-192-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-192-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-192-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer096",
        url: "https://www.youtube.com/watch?v=mockTrailer096",
        embed_url: "https://www.youtube.com/embed/mockTrailer096"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "One Piece Mock 96"
        },
        {
          type: "Japanese",
          title: "ワンピース Mock 96"
        }
      ],
      title: "One Piece Mock 96",
      title_english: "One Piece Mock 96",
      title_japanese: "ワンピース Mock 96",
      title_synonyms: [
        "One Piece Alternative 96"
      ],
      type: "TV",
      source: "Manga",
      episodes: 12,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2016-12-15T00:00:00+00:00",
        to: "2016-02-18T00:00:00+00:00",
        prop: {
          from: {
            day: 15,
            month: 12,
            year: 2016
          },
          to: {
            day: 18,
            month: 2,
            year: 2016
          },
          string: "2016-12-15 to 2016-02-18"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.87,
      scored_by: 712816,
      rank: 96,
      popularity: 196,
      members: 1490000,
      favorites: 24328,
      synopsis: "One Piece Mock 96 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "One Piece Mock 96 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2016,
      broadcast: {
        day: "Fridays",
        time: "19:45",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1096,
          type: "anime",
          name: "Shueisha",
          url: "https://myanimelist.net/anime/producer/1096/Shueisha"
        }
      ],
      licensors: [
        {
          mal_id: 2096,
          type: "anime",
          name: "Crunchyroll",
          url: "https://myanimelist.net/anime/producer/2096/Crunchyroll"
        }
      ],
      studios: [
        {
          mal_id: 3096,
          type: "anime",
          name: "Toei Animation",
          url: "https://myanimelist.net/anime/producer/3096/Toei_Animation"
        }
      ],
      genres: [
        {
          mal_id: 4960,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4960/Supernatural"
        },
        {
          mal_id: 4961,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4961/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5096,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5096/None"
        }
      ],
      themes: [
        {
          mal_id: 6960,
          type: "anime",
          name: "Time Travel",
          url: "https://myanimelist.net/anime/producer/6960/Time_Travel"
        },
        {
          mal_id: 6961,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/producer/6961/Space"
        }
      ],
      demographics: [
        {
          mal_id: 7096,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7096/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1096,
              type: "anime",
              name: "One Piece Mock 96 Related",
              url: "https://myanimelist.net/anime/1096/One_Piece_Mock_96_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 96"
        ],
        endings: [
          "Ending Theme 96"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/96"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 97,
      url: "https://myanimelist.net/anime/97/Demon_Slayer_Mock_97",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-193-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-193-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-193-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-194-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-194-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-194-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer097",
        url: "https://www.youtube.com/watch?v=mockTrailer097",
        embed_url: "https://www.youtube.com/embed/mockTrailer097"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Demon Slayer Mock 97"
        },
        {
          type: "Japanese",
          title: "鬼滅の刃 Mock 97"
        }
      ],
      title: "Demon Slayer Mock 97",
      title_english: "Demon Slayer Mock 97",
      title_japanese: "鬼滅の刃 Mock 97",
      title_synonyms: [
        "Demon Slayer Alternative 97"
      ],
      type: "TV",
      source: "Manga",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2017-01-16T00:00:00+00:00",
        to: "2017-03-19T00:00:00+00:00",
        prop: {
          from: {
            day: 16,
            month: 1,
            year: 2017
          },
          to: {
            day: 19,
            month: 3,
            year: 2017
          },
          string: "2017-01-16 to 2017-03-19"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 9.25,
      scored_by: 720137,
      rank: 97,
      popularity: 197,
      members: 1505000,
      favorites: 24571,
      synopsis: "Demon Slayer Mock 97 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Demon Slayer Mock 97 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2017,
      broadcast: {
        day: "Fridays",
        time: "12:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1097,
          type: "anime",
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/1097/Dentsu"
        }
      ],
      licensors: [
        {
          mal_id: 2097,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/2097/Funimation"
        }
      ],
      studios: [
        {
          mal_id: 3097,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/3097/Sunrise"
        }
      ],
      genres: [
        {
          mal_id: 4970,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4970/Action"
        },
        {
          mal_id: 4971,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/producer/4971/Drama"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5097,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5097/None"
        }
      ],
      themes: [
        {
          mal_id: 6970,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/6970/Martial_Arts"
        },
        {
          mal_id: 6971,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/producer/6971/School"
        }
      ],
      demographics: [
        {
          mal_id: 7097,
          type: "anime",
          name: "Shounen",
          url: "https://myanimelist.net/anime/producer/7097/Shounen"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1097,
              type: "anime",
              name: "Demon Slayer Mock 97 Related",
              url: "https://myanimelist.net/anime/1097/Demon_Slayer_Mock_97_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 97"
        ],
        endings: [
          "Ending Theme 97"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/97"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 98,
      url: "https://myanimelist.net/anime/98/Jujutsu_Kaisen_Mock_98",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-195-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-195-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-195-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-196-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-196-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-196-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer098",
        url: "https://www.youtube.com/watch?v=mockTrailer098",
        embed_url: "https://www.youtube.com/embed/mockTrailer098"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Jujutsu Kaisen Mock 98"
        },
        {
          type: "Japanese",
          title: "呪術廻戦 Mock 98"
        }
      ],
      title: "Jujutsu Kaisen Mock 98",
      title_english: "Jujutsu Kaisen Mock 98",
      title_japanese: "呪術廻戦 Mock 98",
      title_synonyms: [
        "Jujutsu Kaisen Alternative 98"
      ],
      type: "TV",
      source: "Manga",
      episodes: 50,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2018-02-17T00:00:00+00:00",
        to: "2018-04-20T00:00:00+00:00",
        prop: {
          from: {
            day: 17,
            month: 2,
            year: 2018
          },
          to: {
            day: 20,
            month: 4,
            year: 2018
          },
          string: "2018-02-17 to 2018-04-20"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 7.93,
      scored_by: 727458,
      rank: 98,
      popularity: 198,
      members: 1520000,
      favorites: 24814,
      synopsis: "Jujutsu Kaisen Mock 98 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Jujutsu Kaisen Mock 98 is mock data generated for TypeScript testing.",
      season: "fall",
      year: 2018,
      broadcast: {
        day: "Mondays",
        time: "23:15",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1098,
          type: "anime",
          name: "Mainichi Broadcasting System",
          url: "https://myanimelist.net/anime/producer/1098/Mainichi_Broadcasting_System"
        }
      ],
      licensors: [
        {
          mal_id: 2098,
          type: "anime",
          name: "VIZ Media",
          url: "https://myanimelist.net/anime/producer/2098/VIZ_Media"
        }
      ],
      studios: [
        {
          mal_id: 3098,
          type: "anime",
          name: "ufotable",
          url: "https://myanimelist.net/anime/producer/3098/ufotable"
        }
      ],
      genres: [
        {
          mal_id: 4980,
          type: "anime",
          name: "Supernatural",
          url: "https://myanimelist.net/anime/producer/4980/Supernatural"
        },
        {
          mal_id: 4981,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/producer/4981/Comedy"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5098,
          type: "anime",
          name: "Gore",
          url: "https://myanimelist.net/anime/producer/5098/Gore"
        }
      ],
      themes: [
        {
          mal_id: 6980,
          type: "anime",
          name: "Psychological",
          url: "https://myanimelist.net/anime/producer/6980/Psychological"
        },
        {
          mal_id: 6981,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6981/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7098,
          type: "anime",
          name: "Seinen",
          url: "https://myanimelist.net/anime/producer/7098/Seinen"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1098,
              type: "anime",
              name: "Jujutsu Kaisen Mock 98 Related",
              url: "https://myanimelist.net/anime/1098/Jujutsu_Kaisen_Mock_98_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 98"
        ],
        endings: [
          "Ending Theme 98"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/98"
        }
      ],
      streaming: [
        {
          name: "Prime Video",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 99,
      url: "https://myanimelist.net/anime/99/Steins;Gate_Mock_99",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-197-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-197-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-197-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-198-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-198-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-198-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer099",
        url: "https://www.youtube.com/watch?v=mockTrailer099",
        embed_url: "https://www.youtube.com/embed/mockTrailer099"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Steins;Gate Mock 99"
        },
        {
          type: "Japanese",
          title: "シュタインズ・ゲート Mock 99"
        }
      ],
      title: "Steins;Gate Mock 99",
      title_english: "Steins;Gate Mock 99",
      title_japanese: "シュタインズ・ゲート Mock 99",
      title_synonyms: [
        "Steins;Gate Alternative 99"
      ],
      type: "TV",
      source: "Visual Novel",
      episodes: 50,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2019-03-18T00:00:00+00:00",
        to: "2019-05-21T00:00:00+00:00",
        prop: {
          from: {
            day: 18,
            month: 3,
            year: 2019
          },
          to: {
            day: 21,
            month: 5,
            year: 2019
          },
          string: "2019-03-18 to 2019-05-21"
        }
      },
      duration: "24 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 8.7,
      scored_by: 734779,
      rank: 99,
      popularity: 199,
      members: 1535000,
      favorites: 25057,
      synopsis: "Steins;Gate Mock 99 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Steins;Gate Mock 99 is mock data generated for TypeScript testing.",
      season: "spring",
      year: 2019,
      broadcast: {
        day: "Saturdays",
        time: "15:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1099,
          type: "anime",
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/1099/Aniplex"
        }
      ],
      licensors: [
        {
          mal_id: 2099,
          type: "anime",
          name: "Netflix",
          url: "https://myanimelist.net/anime/producer/2099/Netflix"
        }
      ],
      studios: [
        {
          mal_id: 3099,
          type: "anime",
          name: "CloverWorks",
          url: "https://myanimelist.net/anime/producer/3099/CloverWorks"
        }
      ],
      genres: [
        {
          mal_id: 4990,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/producer/4990/Action"
        },
        {
          mal_id: 4991,
          type: "anime",
          name: "Slice of Life",
          url: "https://myanimelist.net/anime/producer/4991/Slice_of_Life"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5099,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5099/None"
        }
      ],
      themes: [
        {
          mal_id: 6990,
          type: "anime",
          name: "Military",
          url: "https://myanimelist.net/anime/producer/6990/Military"
        },
        {
          mal_id: 6991,
          type: "anime",
          name: "Super Power",
          url: "https://myanimelist.net/anime/producer/6991/Super_Power"
        }
      ],
      demographics: [
        {
          mal_id: 7099,
          type: "anime",
          name: "Shoujo",
          url: "https://myanimelist.net/anime/producer/7099/Shoujo"
        }
      ],
      relations: [
        {
          relation: "Prequel",
          entry: [
            {
              mal_id: 1099,
              type: "anime",
              name: "Steins;Gate Mock 99 Related",
              url: "https://myanimelist.net/anime/1099/Steins;Gate_Mock_99_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 99"
        ],
        endings: [
          "Ending Theme 99"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/99"
        }
      ],
      streaming: [
        {
          name: "Netflix",
          url: "https://example.com/streaming"
        }
      ]
    }
  },
  {
    data: {
      mal_id: 100,
      url: "https://myanimelist.net/anime/100/Vinland_Saga_Mock_100",
      images: {
        jpg: {
          image_url: "https://picsum.photos/seed/anime-199-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-199-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-199-large_image_url/600/900"
        },
        webp: {
          image_url: "https://picsum.photos/seed/anime-200-image_url/300/450",
          small_image_url: "https://picsum.photos/seed/anime-200-small_image_url/150/225",
          large_image_url: "https://picsum.photos/seed/anime-200-large_image_url/600/900"
        }
      },
      trailer: {
        youtube_id: "mockTrailer100",
        url: "https://www.youtube.com/watch?v=mockTrailer100",
        embed_url: "https://www.youtube.com/embed/mockTrailer100"
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Vinland Saga Mock 100"
        },
        {
          type: "Japanese",
          title: "ヴィンランド・サガ Mock 100"
        }
      ],
      title: "Vinland Saga Mock 100",
      title_english: "Vinland Saga Mock 100",
      title_japanese: "ヴィンランド・サガ Mock 100",
      title_synonyms: [
        "Vinland Saga Alternative 100"
      ],
      type: "TV",
      source: "Manga",
      episodes: 64,
      status: "Currently Airing",
      airing: true,
      aired: {
        from: "2020-04-19T00:00:00+00:00",
        to: "2020-06-22T00:00:00+00:00",
        prop: {
          from: {
            day: 19,
            month: 4,
            year: 2020
          },
          to: {
            day: 22,
            month: 6,
            year: 2020
          },
          string: "2020-04-19 to 2020-06-22"
        }
      },
      duration: "24 min per ep",
      rating: "R - 17+ (violence & profanity)",
      score: 8.18,
      scored_by: 742100,
      rank: 100,
      popularity: 200,
      members: 1550000,
      favorites: 25300,
      synopsis: "Vinland Saga Mock 100 follows a group of characters facing personal conflicts, powerful enemies, and unexpected discoveries across a fictional world.",
      background: "Vinland Saga Mock 100 is mock data generated for TypeScript testing.",
      season: "summer",
      year: 2020,
      broadcast: {
        day: "Thursdays",
        time: "09:30",
        timezone: "Asia/Tokyo",
        string: "Weekly broadcast in JST"
      },
      producers: [
        {
          mal_id: 1100,
          type: "anime",
          name: "TV Tokyo",
          url: "https://myanimelist.net/anime/producer/1100/TV_Tokyo"
        }
      ],
      licensors: [
        {
          mal_id: 2100,
          type: "anime",
          name: "Sentai Filmworks",
          url: "https://myanimelist.net/anime/producer/2100/Sentai_Filmworks"
        }
      ],
      studios: [
        {
          mal_id: 3100,
          type: "anime",
          name: "A-1 Pictures",
          url: "https://myanimelist.net/anime/producer/3100/A-1_Pictures"
        }
      ],
      genres: [
        {
          mal_id: 5000,
          type: "anime",
          name: "Adventure",
          url: "https://myanimelist.net/anime/producer/5000/Adventure"
        },
        {
          mal_id: 5001,
          type: "anime",
          name: "Suspense",
          url: "https://myanimelist.net/anime/producer/5001/Suspense"
        }
      ],
      explicit_genres: [
        {
          mal_id: 5100,
          type: "anime",
          name: "None",
          url: "https://myanimelist.net/anime/producer/5100/None"
        }
      ],
      themes: [
        {
          mal_id: 7000,
          type: "anime",
          name: "Survival",
          url: "https://myanimelist.net/anime/producer/7000/Survival"
        },
        {
          mal_id: 7001,
          type: "anime",
          name: "Martial Arts",
          url: "https://myanimelist.net/anime/producer/7001/Martial_Arts"
        }
      ],
      demographics: [
        {
          mal_id: 7100,
          type: "anime",
          name: "Josei",
          url: "https://myanimelist.net/anime/producer/7100/Josei"
        }
      ],
      relations: [
        {
          relation: "Sequel",
          entry: [
            {
              mal_id: 1100,
              type: "anime",
              name: "Vinland Saga Mock 100 Related",
              url: "https://myanimelist.net/anime/1100/Vinland_Saga_Mock_100_Related"
            }
          ]
        }
      ],
      theme: {
        openings: [
          "Opening Theme 100"
        ],
        endings: [
          "Ending Theme 100"
        ]
      },
      external: [
        {
          name: "Official Site",
          url: "https://example.com/anime/100"
        }
      ],
      streaming: [
        {
          name: "Hulu",
          url: "https://example.com/streaming"
        }
      ]
    }
  }
]
