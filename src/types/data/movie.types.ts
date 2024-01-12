export type TMovieDTO = {
  id: number;
  budget: number;
  title: string;
  language: string;
  overview: string;
  posterPath: string;
  /** ISO */
  releaseDate: string;
  imdbId: string;
  popularity: number;
  revenue: number;
  runtime: number;
  voteAverage: number;
  voteCount: number;
};