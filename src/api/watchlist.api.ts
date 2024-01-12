import { generatePaginateQuery } from "~/helpers/generatePaginateQuery";
import httpRequest from "~/service/httpRequest";
import { TPaginateRequest, TPaginateResponse } from "~/types/api.types";
import { TMovieDTO } from "~/types/data/movie.types";

export const apiPostAddToWatchlist = (movieId: number) =>
  httpRequest.post<string>(`/api/app/watchlist?movieId=${movieId}`, null);

export const apiDeleteFromWatchlist = (movieId: number) =>
  httpRequest.delete<string>(`/api/app/watchlist?movieId=${movieId}`);

export const apiGetWatchlist = (paginate: TPaginateRequest) =>
  httpRequest.get<TPaginateResponse<TMovieDTO>>(
    `/api/app/watchlist${generatePaginateQuery(paginate)}`,
  );
