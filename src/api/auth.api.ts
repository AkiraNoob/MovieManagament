import { setAuthToCookie } from "~/helpers/auth";
import httpRequest from "~/service/httpRequest";

export type TRegisterPayload = {
  username: string;
  fullname: string;
  email: string;
  password: string;
  avatar: string;
};

export const apiPostRegister = (data: TRegisterPayload) =>
  httpRequest.post<string>("/auth/register", data);

export type TLoginPayload = {
  username: string;
  password: string;
  token: string;
};

export type TLoginResponse = {
  username: string;
  password: null;
  token: string;
};

export const apiPostLogin = (data: TLoginPayload) =>
  httpRequest.post<TLoginResponse>("/auth/login", data).then((res) => {
    setAuthToCookie(res);
    return res;
  });
