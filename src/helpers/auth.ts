import Cookies from "js-cookie";
import { TLoginResponse } from "~/api/auth.api";
import { EAuthCookieKey } from "~/constant/auth";

export const setAuthToCookie = (data: TLoginResponse) => {
  Cookies.set(EAuthCookieKey.Token, data.token, {
    expires: 7,
  });
};

export const removeAuthCookie = () => {
  Cookies.remove(EAuthCookieKey.Token);
};
