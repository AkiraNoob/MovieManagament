import { Skeleton } from "@mui/material";
import { generateBannerMovieCardBackgroundImage } from "~/helpers/generateBackgroundImage";
import { TMovieDTO } from "~/types/data/movie.types";
import styles from "./BannerMovieCard.module.scss";
import BannerMovieCardInteractionButtons from "./components/BannerMovieCardInteractionButtons";

const BannerMovieCard = ({
  posterPath,
  title,
  id,
  isInWatchList,
}: TMovieDTO) => {
  return (
    <div
      style={{
        backgroundImage: generateBannerMovieCardBackgroundImage(posterPath),
      }}
      className={`${styles.banner_movie_card} movie_background`}
    >
      <h2>{title}</h2>
      <BannerMovieCardInteractionButtons
        id={id}
        isInWatchList={isInWatchList || false}
      />
    </div>
  );
};

export default BannerMovieCard;

export const BannerMovieCardSkeleton = () => {
  return (
    <div
      style={{
        backgroundImage: generateBannerMovieCardBackgroundImage(""),
      }}
      className={`${styles.banner_movie_card} movie_background`}
    >
      <Skeleton width={"100%"} height={277} variant="rounded" />
    </div>
  );
};
