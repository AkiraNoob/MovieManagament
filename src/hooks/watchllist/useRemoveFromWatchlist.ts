import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiDeleteFromWatchlist } from "~/api/watchlist.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const useRemoveFromWatchlist = (config?: TMutaionConfig<string, number>) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiDeleteFromWatchlist,
    onSuccess(data, variables, context) {
      toast("Remove from watchlist successfully");
      config?.onSuccess && config.onSuccess(data, variables, context);
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
