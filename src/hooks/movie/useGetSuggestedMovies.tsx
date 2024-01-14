import {
  QueryFunctionContext,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { apiGetSuggestedMovie } from "~/api/movie.api";
import { TError, TPaginateResponse } from "~/types/api.types";
import { TMovieDTO } from "~/types/data/movie.types";
import { ExtendsQueryKey } from "~/types/reactQuery.types";

const useGetSuggestedMovies = (
  perPage: number,
  config?: Omit<
    UseInfiniteQueryOptions<
      TPaginateResponse<TMovieDTO>,
      TError,
      TMovieDTO[],
      TPaginateResponse<TMovieDTO>,
      ExtendsQueryKey,
      number
    >,
    "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
  >,
) => {
  const queryReturn = useInfiniteQuery({
    ...config,
    queryKey: ["SUGGESTED_MOVIE", perPage],
    queryFn: (ctx: QueryFunctionContext<ExtendsQueryKey, number>) =>
      apiGetSuggestedMovie(ctx.pageParam * 70),
    getNextPageParam(
      _lastPage: TPaginateResponse<TMovieDTO>,
      _allPages: TPaginateResponse<TMovieDTO>[],
      lastPageParam: number,
    ) {
      return lastPageParam * perPage < _lastPage.totalCount
        ? lastPageParam + 1
        : undefined;
    },
    select(data) {
      const result: TMovieDTO[][] = [];
      data.pages.forEach((item) => result.push(item.items));
      return result.flat();
    },
    initialPageParam: 1,
    enabled: false,
  });

  return queryReturn;
};

export default useGetSuggestedMovies;
