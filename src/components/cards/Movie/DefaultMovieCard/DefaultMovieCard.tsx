import CustomRating from "~/components/rating/Rating";
import { generatEDefaultMovieCardPlacementBackgroundImage } from "../../../../helpers/generateBackgroundImage";
import styles from "./DefaultMovieCard.module.scss";
import DefaultMovieCardInteractionButtons from "./components/DefaultMovieCardInteractionButtons";

export enum EDefaultMovieCardPlacement {
  Home = "Home",
  Watchlist = "Watchlist",
  Recent = "Recent",
}

export interface IDefaultMovieCard {
  id: string;
  cover: string;
  title: string;
  duration: string;
  genres: string[];
  rating: number;
  place: EDefaultMovieCardPlacement;
}

const DefaultMovieCard = ({
  id,
  cover,
  title,
  duration,
  genres,
  rating,
  place,
}: IDefaultMovieCard) => {
  return (
    <div
      style={{
        backgroundImage:
          generatEDefaultMovieCardPlacementBackgroundImage(cover),
      }}
      className={`${styles.default_movie_card} movie_background`}
    >
      <div>
        <h3>{title}</h3>
        <CustomRating size={21} value={rating} />
      </div>
      <div>
        <div className={styles.default_movie_card_duration_genres}>
          <p>{duration}</p>
          <p className="truncate">{genres.slice(0, 2).join(", ")}</p>
        </div>
        <DefaultMovieCardInteractionButtons place={place} id={id} />
      </div>
    </div>
  );
};

export default DefaultMovieCard;
