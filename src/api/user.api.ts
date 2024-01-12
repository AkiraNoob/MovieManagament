import httpRequest from "~/service/httpRequest";

export type TGetMeResponse = {
  username: string;
  fullname: string;
  email: string;
  password: null;
  avatar: string;
  id: number;
};
export const apiGetMe = () => httpRequest.get<TGetMeResponse>(`/users/me`);
