import { useMutation } from "@tanstack/react-query";
import { TLoginPayload, TLoginResponse, apiPostLogin } from "~/api/auth.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const useLogin = (config?: TMutaionConfig<TLoginResponse, TLoginPayload>) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostLogin,
  });

  return mutationReturn;
};

export default useLogin;
