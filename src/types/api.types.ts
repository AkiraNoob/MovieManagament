import { AxiosError } from "axios";

export type TPaginateResponse<T> = {
  items: T[];
  totalCount: number;
};

export type TPaginateRequest = {
  skipCount: number;
  maxResultCount: number;
  sortby: string;
};

export type TError = AxiosError<{ error: { message: string } }>;
