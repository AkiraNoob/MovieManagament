import { useMutation } from "@tanstack/react-query";
import { TRegisterPayload, apiPostRegister } from "~/api/auth.api";
import { TMutaionConfig } from "~/types/reactQuery.types";

const useRegister = (config?: TMutaionConfig<string, TRegisterPayload>) => {
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostRegister,
  });

  return mutationReturn;
};

export default useRegister;
