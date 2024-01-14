"use client";

import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CustomRating from "~/components/rating/Rating";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import { TMovieDTO } from "~/types/data/movie.types";
import styles from "./ExtendMovieCard.module.scss";
import ExtendMovieCardInteractionButtons from "./components/ExtendMovieCardInteractionButtons";

const ExtendMovieCard = ({
  id,
  title,
  genres = [],
  posterPath,
  runtime,
  releaseDate,
  overview,
  voteAverage,
  voteCount,
  isInWatchList,
}: TMovieDTO) => {
  const [img, setImg] = useState(posterPath);

  return (
    <div className={styles.extend_movie_card}>
      <Image
        src={img}
        onError={(e) => {
          setImg("/placeholder.jpg");
        }}
        width={parseInt(styles.movieCardWidth)}
        height={417}
        alt="movie cover"
        className={styles.extend_movie_card_cover}
      />
      <div className={styles.extend_movie_card_rating_score}>
        {Math.round((voteAverage || 0) * 100) / 100}
      </div>
      <div className={styles.extend_movie_card_interaction}>
        <div>
          <p>{parseDurationVideo(runtime)}</p>
          <p
            style={{
              maxWidth: "160px",
            }}
            className="truncate"
          >
            {genres.join(", ")}
          </p>
        </div>
        <ExtendMovieCardInteractionButtons
          id={id}
          isInWatchList={isInWatchList || false}
        />
      </div>
      <div className={styles.extend_movie_card_information}>
        <h6 className={styles.extend_movie_card_information_title}>{title}</h6>
        <CustomRating size={21} value={Math.round(voteAverage || 0)} />
        <p>{voteCount || 0} votes</p>
        <p className={styles.extend_movie_card_information_date_released}>
          {new Date(releaseDate).toLocaleDateString()}
        </p>
        <p
          className={`${styles.extend_movie_card_information_description} line-clamp-3`}
        >
          {overview}
        </p>
      </div>
    </div>
  );
};

export default ExtendMovieCard;

export const ExtendMovieCardSkeleton = () => {
  return (
    <div className={styles.extend_movie_card}>
      <Skeleton
        width={parseInt(styles.movieCardWidth)}
        height={417}
        variant="rounded"
        className={styles.extend_movie_card_cover}
      />
      <Skeleton variant="rounded" width={140} height={64} />
      <Skeleton variant="rounded" width={"100%"} height={40} />
      <Skeleton variant="rounded" width={"100%"} height={120} />
    </div>
  );
};
