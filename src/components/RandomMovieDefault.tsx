'use client'

import DefaultMovieCard, {
  DefaultMovieCardSkeleton,
  EDefaultMovieCardPlacement
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetSuggestedMovies from "~/hooks/movie/useGetSuggestedMovies";
import NotFound from "~/components/not-found/NotFound";
import styles from "~/app/(backable)/playlists/playlists.module.scss";
import { Button } from "@mui/material";
import useGetRandomMovies from "~/hooks/movie/useGetRandomMovies";

const RandomMovieDefault = () => {

  const {data, isFetching} = useGetRandomMovies(20, "random_default");

  return <>
    <h3 style={{
      fontSize: '36px'
    }} className={styles.movie_watch_page_related_movies_title}>
      Random movie for you
    </h3>

    <TitleSwiper>
      {data && !isFetching ? data.map((item) => (
          <DefaultMovieCard
            key={item.id}
            id={item.id}
            title={item.title}
            genres={item.genres}
            place={EDefaultMovieCardPlacement.Home}
            posterPath={item.posterPath}
            runtime={item.runtime}
            voteAverage={item.voteAverage}
          />
        )) :
        new Array(20)
          .fill(10)
          .map((_, index) => <DefaultMovieCardSkeleton key={index} />)
      }
    </TitleSwiper>
  </>
}


export default RandomMovieDefault
