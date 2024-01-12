"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { toast } from "react-toastify";
import { TError } from "~/types/api.types";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError(_err, _key, _config) {
              const err = _err as TError;
              return toast(err.response?.data.error.message, {
                type: "error",
              });
            },
          },
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 1 * 60 * 1000,
            gcTime: 5 * 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
