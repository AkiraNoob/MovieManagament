import { useQuery } from "@tanstack/react-query";
import { TGetGenresResponse, apiGetAllGenres } from "~/api/genres.api";
import { QUERY_KEY } from "~/constant/reactQueryKey";
import { TQueryConfig } from "~/types/reactQuery.types";

const useGetAllGenres = (
  config?: TQueryConfig<TGetGenresResponse, TGetGenresResponse>,
) => {
  const queryReturn = useQuery({
    ...config,
    queryKey: [QUERY_KEY.GENRES],
    queryFn: apiGetAllGenres,
  });
  return queryReturn;
};

export default useGetAllGenres;
