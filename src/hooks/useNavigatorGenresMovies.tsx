"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useNavigatorGenresMovies = (genreId: number) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/genres/${genreId}`);
  }, [router, genreId]);

  const navigate = () => router.push(`/genres/${genreId}`);

  return { navigate };
};
