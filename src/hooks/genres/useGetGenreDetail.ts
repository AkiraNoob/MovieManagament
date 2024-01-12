import { useQuery } from "@tanstack/react-query";
import { apiGetDetailGenre } from "~/api/genres.api";
import { QUERY_KEY } from "~/constant/reactQueryKey";
import { TGenresDto } from "~/types/data/genres.types";
import { TQueryConfig } from "~/types/reactQuery.types";

const useGetGenreDetail = (
  genreId: string,
  config?: TQueryConfig<TGenresDto, TGenresDto>,
) => {
  const queryReturn = useQuery({
    ...config,
    queryKey: [QUERY_KEY.GENRES, genreId],
    queryFn: () => apiGetDetailGenre(genreId),
  });

  return queryReturn;
};

export default useGetGenreDetail;
