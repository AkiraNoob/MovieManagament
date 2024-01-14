"use client";

import Image from "next/image";
import CustomRating from "~/components/rating/Rating";
import MovieDetailInteractionButton from "~/contents/button/MovieDetailInteractionButton";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import useGetDetailMovie from "~/hooks/movie/useGetDetailMovie";
import styles from "./moveiDetail.module.scss";

const MovieDetailInformation = ({ movieId }: { movieId: string }) => {
  const { data } = useGetDetailMovie(movieId, {
    enabled: !!movieId,
  });

  return (
    <>
      <div className={styles.movie_detail_page_main_information}>
        <h1 className={styles.movie_detail_page_main_information_title}>
          {data?.title}
        </h1>
        <CustomRating size={38} value={data?.voteAverage || 0} />

        <p
          style={{
            fontSize: "16px",
          }}
        >
          <i>Total {data?.voteCount} rates</i>
        </p>

        <p className={styles.movie_detail_page_main_information_description}>
          Total times: <span>{parseDurationVideo(data?.runtime || 0)}</span>
        </p>
        <p className={styles.movie_detail_page_main_information_description}>
          Genres: <span>{data?.genres.join(", ")}</span>
        </p>
        <p className={styles.movie_detail_page_main_information_description}>
          Overview: {data?.overview}
        </p>

        <MovieDetailInteractionButton
          id={parseInt(movieId)}
          isInWatchList={data?.isInWatchList || false}
        />
      </div>
      <Image
        src={data?.posterPath || "/placeholder.jpg"}
        alt="movie cover"
        width={452}
        height={568}
        className={styles.movie_detail_page_main_cover}
        quality={100}
      />
    </>
  );
};

export default MovieDetailInformation;
