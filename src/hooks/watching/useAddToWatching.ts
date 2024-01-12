import { useMutation } from "@tanstack/react-query";
import { apiPostAddToWatching } from "~/api/movieWatching.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const useAddToWatching = (
  config?: TMutaionConfig<
    string,
    {
      movieId: number;
      lastViewMoment: string;
    }
  >,
) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostAddToWatching,
    onError(error, variables, context) {
      config?.onError && config.onError(error, variables, context);
    },
  });

  return mutationReturn;
};

export default useAddToWatching;
