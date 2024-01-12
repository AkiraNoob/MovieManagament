import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { apiGetRating, apiPostRating, apiPutRating } from "~/api/rating.api";
import { userContext } from "~/app/userProvider";
import { QUERY_KEY } from "~/constant/reactQueryKey";

export const useGetRating = () => {
  const { isLogin } = useContext(userContext);

  return useQuery({
    queryFn: apiGetRating,
    queryKey: [QUERY_KEY.RATING],
    enabled: !!isLogin,
    retry: 1,
  });
};

export const usePostRating = () => {
  return useMutation({
    mutationFn: apiPostRating,
  });
};

export const usePutRating = () => {
  return useMutation({
    mutationFn: apiPutRating,
  });
};
