"use client";

import BannerMovieCard, {
  BannerMovieCardSkeleton,
} from "~/components/cards/Movie/BannerMovieCard/BannerMovieCard";
import InlineNavigationSwiper from "~/components/swiper/InlineNavigationSwiper/InlineNavigationSwiper";
import useGetRandomMovies from "~/hooks/movie/useGetRandomMovies";

const RandomList = () => {
  const { data, isLoading } = useGetRandomMovies(10);

  return (
    <InlineNavigationSwiper>
      {data && !isLoading
        ? data.map((item) => (
            <BannerMovieCard
              key={item.id}
              posterPath={item.posterPath}
              title={item.title}
              id={item.id}
            />
          ))
        : new Array(6)
            .fill(0)
            .map((_, index) => <BannerMovieCardSkeleton key={index} />)}
    </InlineNavigationSwiper>
  );
};

export default RandomList;
