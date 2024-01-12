import { Skeleton } from "@mui/material";
import { generateBannerMovieCardBackgroundImage } from "~/helpers/generateBackgroundImage";
import { generateImagePath } from "~/helpers/generateImagePath";
import { TMovieDTO } from "~/types/data/movie.types";
import styles from "./BannerMovieCard.module.scss";
import BannerMovieCardInteractionButtons from "./components/BannerMovieCardInteractionButtons";

type TBannerMovieCard = Pick<TMovieDTO, "id" | "posterPath" | "title">;

const BannerMovieCard = ({ posterPath, title, id }: TBannerMovieCard) => {
  return (
    <div
      style={{
        backgroundImage: generateBannerMovieCardBackgroundImage(
          generateImagePath(posterPath),
        ),
      }}
      className={`${styles.banner_movie_card} movie_background`}
    >
      <h2>{title}</h2>
      <BannerMovieCardInteractionButtons id={id} />
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
