import Rating from "@mui/material/Rating";
import Image from "next/image";
import styles from "./MovieCard.module.scss";
import MovieCardInteractionButtons from "./components/MovieCardInteractionButtons";

interface IMovieCard {
  id: string;
  cover: string;
  title: string;
  rating: number;
  dateRelease: string;
  description: string;
  episodesCount: number;
  genres: string[];
}

const MovieCard = ({
  id,
  cover,
  title,
  rating,
  dateRelease,
  description,
  episodesCount,
  genres = [],
}: IMovieCard) => {
  return (
    <div className={styles.movie_card}>
      <Image
        src={cover}
        width={parseInt(styles.movieCardWidth)}
        height={417}
        layout="contain"
        alt="movie cover"
        className={styles.movie_card_cover}
      />
      <div className={styles.movie_card_interaction}>
        <div>
          <p>{episodesCount} Ep</p>
          <p>{genres[0]}</p>
        </div>
        <MovieCardInteractionButtons id={id} />
      </div>
      <div className={styles.movie_card_information}>
        <h6 className={styles.movie_card_information_title}>{title}</h6>
        <Rating readOnly precision={0.1} defaultValue={rating} />
        <p className={styles.movie_card_information_date_released}>
          {new Date(dateRelease).toLocaleDateString()}
        </p>
        <p
          className={`${styles.movie_card_information_description} line-clamp-3`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
