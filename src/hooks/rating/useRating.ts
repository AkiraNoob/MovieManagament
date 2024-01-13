import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { apiGetRating, apiPostRating, apiPutRating } from "~/api/rating.api";
import { userContext } from "~/app/userProvider";
import { QUERY_KEY } from "~/constant/reactQueryKey";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export const useGetRating = () => {
  const { isLogin } = useContext(userContext);
  const {movieId} = useParams();

  return useQuery({
    queryFn: () => apiGetRating(movieId as string),
    queryKey: [QUERY_KEY.RATING],
    enabled: !!isLogin,
    retry: 1,
  });
};

export const usePostRating = () => {
  const a = useQueryClient()
  return useMutation({
    mutationFn: apiPostRating,
    onSuccess(){
      toast("Rate successfully");
      a.refetchQueries({
        queryKey: [QUERY_KEY.RATING]
      })
    }
  });
};

export const usePutRating = () => {
  const a = useQueryClient()
  return useMutation({
    mutationFn: apiPutRating,
    onSuccess(){
      toast("Rate successfully");
      a.refetchQueries({
        queryKey: [QUERY_KEY.RATING]
      })
    }
  });
};
