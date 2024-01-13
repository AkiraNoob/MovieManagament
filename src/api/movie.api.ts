import { generatePaginateQuery } from "~/helpers/generatePaginateQuery";
import httpRequest from "~/service/httpRequest";
import { TPaginateRequest, TPaginateResponse } from "~/types/api.types";
import { TMovieDTO } from "~/types/data/movie.types";

export const apiGetDetailMovie = (movieId: string) =>
  httpRequest.get<TMovieDTO>(`/api/app/movie/${movieId}`);

export const apiGetMovieByGenres = (
  genresId: string,
  paginate: TPaginateRequest,
) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/api/app/movie/movies-by-genres/${genresId}${generatePaginateQuery(
      paginate,
    )}`,
  );

export const apiGetTopRatedMovies = (paginate: TPaginateRequest) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/api/app/movie/top-rated${generatePaginateQuery(paginate)}`,
  );

export const apiGetRandomMovies = (paginate: TPaginateRequest) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/api/app/movie/random${generatePaginateQuery(paginate)}`,
  );

export const apiPostValidateVidSrcUrl = (vidSrcUrl: string) =>
  httpRequest.post<boolean>(`/api/app/movie/validate-vid-src-url`, {
    vidSrcUrl,
  });

export const apiGetSuggestedMovie =(count: number) => httpRequest.post<TPaginateResponse<TMovieDTO>>(`api/app/recommendation/recommend-movies?n=${count}`, null)

export const apiGetAllMovies = (paginate: TPaginateRequest, search: string) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/api/app/movie${generatePaginateQuery(paginate)}&search=${search}`,
  );

