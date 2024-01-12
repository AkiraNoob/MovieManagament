import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiPostAddToWatchlist } from "~/api/watchlist.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const useAddToWatchlist = (config?: TMutaionConfig<string, number>) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostAddToWatchlist,
    onSuccess(data, variables, context) {
      toast("Add to watchlist successfully");
      config?.onSuccess && config.onSuccess(data, variables, context);
    },
    onError(error, variables, context) {
      if (error.response?.status === 400) {
        toast("You aleady add this to watchlist", { type: "error" });
      }
    },
  });

  return mutationReturn;
};

export default useAddToWatchlist;
