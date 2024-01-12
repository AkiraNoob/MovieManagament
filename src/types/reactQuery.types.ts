import { MutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { TError } from "./api.types";

export type ExtendsQueryKey = Array<string | number>;

export type TMutaionConfig<TData, TVariable, TContext = unknown> = Partial<
  MutationOptions<TData, TError, TVariable, TContext>
>;

export type TQueryConfig<TQueryFnData, TData = TQueryFnData> = Partial<
  UseQueryOptions<TQueryFnData, TError, TData, ExtendsQueryKey>
>;
