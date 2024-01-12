import httpRequest from "~/service/httpRequest";
import { TGenresDto } from "~/types/data/genres.types";

export type TGetGenresResponse = TGenresDto[];

export const apiGetAllGenres = () =>
  httpRequest.get<TGetGenresResponse>("/genres/all");

export const apiGetDetailGenre = (genreId: string) =>
  httpRequest.get<TGenresDto>(`/genres/${genreId}`);
