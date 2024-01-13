import httpRequest from "~/service/httpRequest";

export type TPostRatingpayload = {
  movieId: number;
  score: number;
  timestamp: string;
};

export const apiPostRating = (data: TPostRatingpayload) =>
  httpRequest.post<string>("/ratings", data);

export const apiPutRating = (data: TPostRatingpayload) =>
  httpRequest.put<string>("/ratings", data);

export type TRatingResponse = {
  id: number;
  rating: number;
  movieId: number;
  userId: number;
  score: number;
  timestamp: string;
};

export const apiGetRating = (movieId: string) => httpRequest.get<TRatingResponse>(`/ratings?movieId=${movieId}`);
