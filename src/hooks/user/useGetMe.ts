import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { apiGetMe } from "~/api/user.api";
import { userContext } from "~/app/userProvider";
import { EAuthCookieKey } from "~/constant/auth";
import { QUERY_KEY } from "~/constant/reactQueryKey";

const useGetMe = () => {
  const { setIsLogin } = useContext(userContext);

  const queryReturn = useQuery({
    queryFn: apiGetMe,
    queryKey: [QUERY_KEY.ME],
    enabled: !!Cookies.get(EAuthCookieKey.Token),
  });

  useEffect(() => {
    if (queryReturn.isSuccess) {
      setIsLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryReturn.isSuccess]);

  return queryReturn;
};

export default useGetMe;
