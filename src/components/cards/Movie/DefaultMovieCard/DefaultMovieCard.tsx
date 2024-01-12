import { Skeleton } from "@mui/material";
import CustomRating from "~/components/rating/Rating";
import { generateImagePath } from "~/helpers/generateImagePath";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import { TMovieDTO } from "~/types/data/movie.types";
import { generatEDefaultMovieCardPlacementBackgroundImage } from "../../../../helpers/generateBackgroundImage";
import styles from "./DefaultMovieCard.module.scss";
import DefaultMovieCardInteractionButtons from "./components/DefaultMovieCardInteractionButtons";

export enum EDefaultMovieCardPlacement {
  Home = "Home",
  Watchlist = "Watchlist",
  Recent = "Recent",
}

export type TDefaultMovieCard = Pick<
  TMovieDTO,
  "id" | "posterPath" | "title" | "runtime" | "voteAverage"
> & { genres: string[]; place: EDefaultMovieCardPlacement };

const DefaultMovieCard = ({
  id,
  title,
  genres,
  place,
  posterPath,
  runtime,
  voteAverage,
}: TDefaultMovieCard) => {
  return (
    <div
      style={{
        backgroundImage: generatEDefaultMovieCardPlacementBackgroundImage(
          generateImagePath(posterPath),
        ),
      }}
      className={`${styles.default_movie_card} movie_background`}
    >
      <div>
        <h3>{title}</h3>
        <CustomRating size={21} value={voteAverage} />
      </div>
      <div>
        <div className={styles.default_movie_card_duration_genres}>
          <p>{parseDurationVideo(runtime)}</p>
          <p className="truncate">{genres.slice(0, 2).join(", ")}</p>
        </div>
        <DefaultMovieCardInteractionButtons place={place} id={id} />
      </div>
    </div>
  );
};

export default DefaultMovieCard;

export const DefaultMovieCardSkeleton = () => {
  return (
    <div
      style={{
        backgroundImage: generatEDefaultMovieCardPlacementBackgroundImage(""),
      }}
      className={`${styles.default_movie_card} movie_background`}
    >
      <Skeleton variant="rounded" width={"60%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={100} />
    </div>
  );
};
