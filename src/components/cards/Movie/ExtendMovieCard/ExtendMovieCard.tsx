"use client";

import { Skeleton } from "@mui/material";
import Image from "next/image";
import CustomRating from "~/components/rating/Rating";
import { generateImagePath } from "~/helpers/generateImagePath";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import { TMovieDTO } from "~/types/data/movie.types";
import styles from "./ExtendMovieCard.module.scss";
import ExtendMovieCardInteractionButtons from "./components/ExtendMovieCardInteractionButtons";

type TExtendMovieCard = Pick<
  TMovieDTO,
  | "id"
  | "posterPath"
  | "title"
  | "runtime"
  | "overview"
  | "voteAverage"
  | "releaseDate"
> & { genres: string[] };

const ExtendMovieCard = ({
  id,
  title,
  genres = [],
  posterPath,
  runtime,
  releaseDate,
  overview,
  voteAverage,
}: TExtendMovieCard) => {
  return (
    <div className={styles.extend_movie_card}>
      <Image
        src={generateImagePath(posterPath)}
        width={parseInt(styles.movieCardWidth)}
        height={417}
        alt="movie cover"
        className={styles.extend_movie_card_cover}
      />
      <div className={styles.extend_movie_card_rating_score}>{voteAverage}</div>
      <div className={styles.extend_movie_card_interaction}>
        <div>
          <p>{parseDurationVideo(runtime)}</p>
          <p>{genres[0]}</p>
        </div>
        <ExtendMovieCardInteractionButtons id={id} />
      </div>
      <div className={styles.extend_movie_card_information}>
        <h6 className={styles.extend_movie_card_information_title}>{title}</h6>
        <CustomRating size={21} value={voteAverage} />
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
      <Skeleton variant="rounded" width={"100%"} height={120} />
      <Skeleton variant="rounded" width={"100%"} height={120} />
    </div>
  );
};
