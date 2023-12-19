import Image from "next/image";
import CustomRating from "~/components/rating/Rating";
import styles from "./ExtendMovieCard.module.scss";
import ExtendMovieCardInteractionButtons from "./components/ExtendMovieCardInteractionButtons";

interface IExtendMovieCard {
  id: string;
  cover: string;
  title: string;
  rating: number;
  dateRelease: string;
  description: string;
  duration: string;
  genres: string[];
}

const ExtendMovieCard = ({
  id,
  cover,
  title,
  rating,
  dateRelease,
  description,
  duration,
  genres = [],
}: IExtendMovieCard) => {
  return (
    <div className={styles.extend_movie_card}>
      <Image
        src={cover}
        width={parseInt(styles.movieCardWidth)}
        height={417}
        alt="movie cover"
        className={styles.extend_movie_card_cover}
      />
      <div className={styles.extend_movie_card_rating_score}>{rating}</div>
      <div className={styles.extend_movie_card_interaction}>
        <div>
          <p>{duration}</p>
          <p>{genres[0]}</p>
        </div>
        <ExtendMovieCardInteractionButtons id={id} />
      </div>
      <div className={styles.extend_movie_card_information}>
        <h6 className={styles.extend_movie_card_information_title}>{title}</h6>
        <CustomRating size={21} value={rating} />
        <p className={styles.extend_movie_card_information_date_released}>
          {new Date(dateRelease).toLocaleDateString()}
        </p>
        <p
          className={`${styles.extend_movie_card_information_description} line-clamp-3`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExtendMovieCard;
