export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type MoviesData = {
  upcoming: Movie[];
  popular: Movie[];
  topRated: Movie[];
  nowPlaying: Movie[];
};
export type Genre = {
  id: number;
  name: string;
};

export interface Language {
  name: string;
  english_name: string;
}

export interface Company {
  id: number;
  name: string;
  logo_path?: string | null;
  origin_country?: string;
}

export interface Country {
  iso_3166_1: string;
  name: string;
}

export interface MovieDetail {
  id?: number;
  title?: string;
  overview?: string;
  tagline?: string;
  genres?: Genre[];
  backdrop_path?: string;
  poster_path?: string;
  vote_average?: number;
  status?: string;
  release_date?: string;
  runtime?: number;
  vote_count?: number;
  spoken_languages?: Language[];
  production_companies?: Company[];
  production_countries?: Country[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface MovieData {
  detail: MovieDetail;
  similar: Movie[];
  recomendations: Movie[];
  video: Video[];
  credit: Cast[];
}
