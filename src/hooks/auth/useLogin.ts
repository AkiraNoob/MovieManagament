import { useMutation } from "@tanstack/react-query";
import { TLoginPayload, TLoginResponse, apiPostLogin } from "~/api/auth.api";
import { TMutaionConfig } from "~/types/reactQuery.types";
import { useRouter } from "next/navigation";

const useLogin = (config?: TMutaionConfig<TLoginResponse, TLoginPayload>) => {
  const router = useRouter();
  const mutationReturn = useMutation({
    ...config,
    mutationFn: apiPostLogin,
  });

  return mutationReturn;
};

export default useLogin;
