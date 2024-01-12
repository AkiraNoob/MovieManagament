import { AxiosError } from "axios";

export type TPaginateResponse<T> = {
  items: T[];
  totalCount: number;
};

export type TPaginateRequest = {
  skipCount: number;
  maxResultCount: number;
};

export type TError = AxiosError<{ error: { message: string } }>;
