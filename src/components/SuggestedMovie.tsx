"use client";

import styles from "~/app/(backable)/playlists/playlists.module.scss";
import DefaultMovieCard, {
  DefaultMovieCardSkeleton,
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetSuggestedMovies from "~/hooks/movie/useGetSuggestedMovies";

const SuggestedMovie = () => {
  const { data, isFetching } = useGetSuggestedMovies(1);

  return (
    <>
      <h3
        style={{
          fontSize: "36px",
        }}
        className={styles.movie_watch_page_related_movies_title}
      >
        Suggest movie for you
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

export default SuggestedMovie;
