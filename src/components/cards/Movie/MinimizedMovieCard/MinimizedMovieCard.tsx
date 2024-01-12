import { Skeleton } from "@mui/material";
import { generateImagePath } from "~/helpers/generateImagePath";
import { parseDurationVideo } from "~/helpers/parseDurationVideo";
import { TMovieDTO } from "~/types/data/movie.types";
import { generateMinimizeMovieCardBackgroundImage } from "../../../../helpers/generateBackgroundImage";
import styles from "./MinimizedMovieCard.module.scss";
import MinimizedMovieCardInteractionButtons from "./components/MinimizedMovieCardInteractionButtons";

type TMinimizedMovieCard = Pick<
  TMovieDTO,
  "id" | "posterPath" | "title" | "runtime"
> & { genres: string[] };

const MinimizedMovieCard = ({
  id,
  posterPath,
  title,
  runtime,
  genres,
}: TMinimizedMovieCard) => {
  return (
    <div
      style={{
        backgroundImage: generateMinimizeMovieCardBackgroundImage(
          generateImagePath(posterPath),
        ),
      }}
      className={`${styles.minimized_movie_card} movie_background`}
    >
      <h3 className="line-clamp-2">{title}</h3>
      <div>
        <p>{parseDurationVideo(runtime)}</p>
        <p className="truncate">{genres.slice(0, 2).join(", ")}</p>
      </div>
      <MinimizedMovieCardInteractionButtons id={id} />
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
