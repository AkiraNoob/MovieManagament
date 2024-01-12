import { QueryFunctionContext } from "@tanstack/react-query";
import { TPaginateRequest } from "~/types/api.types";
import { ExtendsQueryKey } from "~/types/reactQuery.types";

export const generatePaginateQuery = (paginate: TPaginateRequest) =>
  `?SkipCount=${paginate.skipCount}&MaxResultCount=${paginate.maxResultCount}`;

export const generatePaginateFromInfiniteQuery = (
  context: QueryFunctionContext<ExtendsQueryKey, number>,
  pageCountIndexInQueryKey: number,
): TPaginateRequest => {
  const { pageParam = 1, queryKey } = context;

  const maxResultCount = queryKey[pageCountIndexInQueryKey] as number;
  const skipCount = maxResultCount * (pageParam - 1);

  return {
    maxResultCount,
    skipCount,
  };
};
