import { generatePaginateQuery } from "~/helpers/generatePaginateQuery";
import httpRequest from "~/service/httpRequest";
import { TPaginateRequest, TPaginateResponse } from "~/types/api.types";
import { TMovieDTO } from "~/types/data/movie.types";

export const apiPostAddToWatching = (data: {
  movieId: number;
  lastViewMoment: string;
}) =>
  httpRequest.post(
    `/movies-watching?id=${data.movieId}&lastViewMoment=${data.lastViewMoment}`,
    null,
  );

export const apiDeleteWatching = (movieId: number) =>
  httpRequest.delete(`/movies-watching?id=${movieId}`);

export const apiGetWatchingMovies = (paginate: TPaginateRequest) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/movies-watching${generatePaginateQuery(paginate)}`,
  );
