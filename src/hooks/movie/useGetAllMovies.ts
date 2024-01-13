import {
  QueryFunctionContext,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { apiGetAllMovies, apiGetTopRatedMovies } from "~/api/movie.api";
import { QUERY_KEY } from "~/constant/reactQueryKey";
import { generatePaginateFromInfiniteQuery } from "~/helpers/generatePaginateQuery";
import { TError, TPaginateResponse } from "~/types/api.types";
import { TMovieDTO } from "~/types/data/movie.types";
import { ExtendsQueryKey } from "~/types/reactQuery.types";

const useGetTopRatedMovies = (
  queryKey: string,
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
    queryKey: [QUERY_KEY.GET_ALL, perPage, queryKey],
    queryFn: (ctx: QueryFunctionContext<ExtendsQueryKey, number>) =>
      apiGetAllMovies(generatePaginateFromInfiniteQuery(ctx, 1),queryKey),
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
  });

  return queryReturn;
};

export default useGetTopRatedMovies;