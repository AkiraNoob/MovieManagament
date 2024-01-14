import { Skeleton } from "@mui/material";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import { TMovieDTO } from "~/types/data/movie.types";
import { generateMinimizeMovieCardBackgroundImage } from "../../../../helpers/generateBackgroundImage";
import styles from "./MinimizedMovieCard.module.scss";
import MinimizedMovieCardInteractionButtons from "./components/MinimizedMovieCardInteractionButtons";

const MinimizedMovieCard = ({
  id,
  posterPath,
  title,
  runtime,
  genres,
  isInWatchList,
}: TMovieDTO) => {
  return (
    <div
      style={{
        backgroundImage: generateMinimizeMovieCardBackgroundImage(posterPath),
      }}
      className={`${styles.minimized_movie_card} movie_background`}
    >
      <h3 className="line-clamp-2">{title}</h3>
      <div>
        <p>{parseDurationVideo(runtime)}</p>
        <p className="truncate">{genres.slice(0, 2).join(", ")}</p>
      </div>
      <MinimizedMovieCardInteractionButtons
        id={id}
        isInWatchList={isInWatchList || false}
      />
    </div>
  );
};

export default MinimizedMovieCard;

export const MinimizedMovieCardSkeleton = () => {
  return (
    <div
      style={{
        backgroundImage: generateMinimizeMovieCardBackgroundImage(""),
      }}
      className={`${styles.minimized_movie_card} movie_background`}
    >
      <Skeleton width={"100%"} height={110} variant="rounded" />
    </div>
  );
};
