"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useNavigateToMovieDetail = (movieId: string) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/movie/${movieId}`);
  }, [router, movieId]);

  const navigate = () => router.push(`/movie/${movieId}`);

  return { navigate };
};

export const useNavigateContinueWatchMovie = (movieId: string) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/movie/${movieId}/watch`);
  }, [router, movieId]);

  const navigate = () => router.push(`/movie/${movieId}/watch`);

  return { navigate };
};
