"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useNavigatorGenresMovies = (genres: string) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/genres/${genres}`);
  }, [router, genres]);

  const navigate = () => router.push(`/genres/${genres}`);

  return { navigate };
};
