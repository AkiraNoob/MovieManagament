import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiDeleteFromWatchlist } from "~/api/watchlist.api";
import { TMutaionConfig } from "~/types/reactQuery.types";
import { QUERY_KEY } from "~/constant/reactQueryKey";

const useRemoveFromWatchlist = (config?: TMutaionConfig<string, number>) => {
  const a = useQueryClient();
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiDeleteFromWatchlist,
    onSuccess(data, variables, context) {
      toast("Remove from watchlist successfully");
      config?.onSuccess && config.onSuccess(data, variables, context);
      a.refetchQueries({
        queryKey: [QUERY_KEY.WATCH_LIST]
      })
    },
    onError(error, variables, context) {
      if (error.response?.status === 404) {
        toast("You not add this movie to your watchlist yet.", {
          type: "error",
        });
      }
    },
  });

  return mutationReturn;
};

export default useRemoveFromWatchlist;
