import { useMutation } from "@tanstack/react-query";
import { apiPostValidateVidSrcUrl } from "~/api/movie.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const usePostValidateVidSrcUrl = (config?: TMutaionConfig<boolean, string>) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostValidateVidSrcUrl,
  });

  return mutationReturn;
};

export default usePostValidateVidSrcUrl;
