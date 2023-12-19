import { generateMinimizeMovieCardBackgroundImage } from "../../../../helpers/generateBackgroundImage";
import styles from "./MinimizedMovieCard.module.scss";
import MinimizedMovieCardInteractionButtons from "./components/MinimizedMovieCardInteractionButtons";

interface IMinimizedMovieCard {
  id: string;
  cover: string;
  title: string;
  duration: string;
  genres: string[];
}

const MinimizedMovieCard = ({
  id,
  cover,
  title,
  duration,
  genres,
}: IMinimizedMovieCard) => {
  return (
    <div
      style={{
        backgroundImage: generateMinimizeMovieCardBackgroundImage(cover),
      }}
      className={`${styles.minimized_movie_card} movie_background`}
    >
      <h3>{title}</h3>
      <div>
        <p>{duration}</p>
        <p className="truncate">{genres.slice(0, 2).join(", ")}</p>
      </div>
      <MinimizedMovieCardInteractionButtons id={id} />
    </div>
  );
};

export default MinimizedMovieCard;
