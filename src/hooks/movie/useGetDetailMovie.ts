import { useQuery } from "@tanstack/react-query";
import { apiGetDetailMovie } from "~/api/movie.api";
import { QUERY_KEY } from "~/constant/reactQueryKey";
import { TMovieDTO } from "~/types/data/movie.types";
import { TQueryConfig } from "~/types/reactQuery.types";

const useGetDetailMovie = (
  movieId: string,
  config?: TQueryConfig<TMovieDTO, TMovieDTO>,
) => {
  const queryReturn = useQuery({
    ...config,
    queryKey: [QUERY_KEY.MOVIES_DETAIL, movieId],
    queryFn: () => apiGetDetailMovie(movieId),
  });

  return queryReturn;
};

export default useGetDetailMovie;
