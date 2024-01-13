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

const SuggestedMovie = () => {

  const {data, isFetching} = useGetSuggestedMovies(1);

  return <>

    <h3 style={{
      fontSize: '36px'
    }} className={styles.movie_watch_page_related_movies_title}>
      Related movie
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
    </TitleSwiper></>
}


export default SuggestedMovie
