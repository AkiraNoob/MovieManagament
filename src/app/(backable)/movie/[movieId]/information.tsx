"use client";

import Image from "next/image";
import CustomRating from "~/components/rating/Rating";
import MovieDetailInteractionButton from "~/contents/button/MovieDetailInteractionButton";
import { generateImagePath } from "~/helpers/generateImagePath";
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

        <p className={styles.movie_detail_page_main_information_description}>
          {data?.overview}
        </p>
        <MovieDetailInteractionButton id={parseInt(movieId)} />
      </div>
      <Image
        src={generateImagePath(data?.posterPath || "")}
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
