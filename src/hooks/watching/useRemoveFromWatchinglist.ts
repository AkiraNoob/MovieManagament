import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiDeleteWatching } from "~/api/movieWatching.api";
import { TMutaionConfig } from "~/types/reactQuery.types";
import { QUERY_KEY } from "~/constant/reactQueryKey";

const useRemoveFromWatchinglist = (config?: TMutaionConfig<string, number>) => {
  const a = useQueryClient();
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiDeleteWatching,
    onSuccess(data, variables, context) {
      toast("Remove from recent list successfully");
      a.refetchQueries({
        queryKey: [QUERY_KEY.RECENT_LIST]
      })
      config?.onSuccess && config.onSuccess(data, variables, context);
    },
    onError(error, variables, context) {
      if (error.response?.status === 404) {
        toast("You not add this movie to your watching list yet.", {
          type: "error",
        });
      }
    },
  });

  return mutationReturn;
};

export default useRemoveFromWatchinglist;
