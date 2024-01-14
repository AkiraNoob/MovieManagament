"use client";

import styles from "~/app/(backable)/playlists/playlists.module.scss";
import DefaultMovieCard, {
  DefaultMovieCardSkeleton,
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetRandomMovies from "~/hooks/movie/useGetRandomMovies";

const RandomMovieDefault = () => {
  const { data, isFetching } = useGetRandomMovies(20, "random_default");

  return (
    <>
      <h3
        style={{
          fontSize: "36px",
        }}
        className={styles.movie_watch_page_related_movies_title}
      >
        Random movie for you
      </h3>

      <TitleSwiper>
        {data && !isFetching
          ? data.map((item) => (
              <DefaultMovieCard
                key={item.id}
                place={EDefaultMovieCardPlacement.Home}
                {...item}
              />
            ))
          : new Array(20)
              .fill(10)
              .map((_, index) => <DefaultMovieCardSkeleton key={index} />)}
      </TitleSwiper>
    </>
  );
};

export default RandomMovieDefault;
