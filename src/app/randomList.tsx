"use client";

import styles from "~/app/(backable)/playlists/playlists.module.scss";
import BannerMovieCard, {
  BannerMovieCardSkeleton,
} from "~/components/cards/Movie/BannerMovieCard/BannerMovieCard";
import InlineNavigationSwiper from "~/components/swiper/InlineNavigationSwiper/InlineNavigationSwiper";
import useGetRandomMovies from "~/hooks/movie/useGetRandomMovies";

const RandomList = () => {
  const { data, isLoading } = useGetRandomMovies(
    10,
    "large",
    {},
    "ReleaseDate",
  );

  return (
    <>
      <h3
        style={{
          fontSize: "36px",
          marginBottom: "-20px",
        }}
        className={styles.movie_watch_page_related_movies_title}
      >
        Latest movies
      </h3>
      <InlineNavigationSwiper>
        {data && !isLoading
          ? data.map((item) => <BannerMovieCard key={item.id} {...item} />)
          : new Array(6)
              .fill(0)
              .map((_, index) => <BannerMovieCardSkeleton key={index} />)}
      </InlineNavigationSwiper>
    </>
  );
};

export default RandomList;
