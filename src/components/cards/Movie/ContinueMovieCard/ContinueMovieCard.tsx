import Image from "next/image";
import styles from "./ContinueMovieCard.module.scss";
import ContinueMovieCardInteractionButtons from "./components/ContinueMovieCardInteractionButtons";

interface IContinueMovieCard {
  id: string;
  cover: string;
  title: string;
  lastSeenMoment: string;
}

const ContinueMovieCard = ({
  id,
  cover,
  title,
  lastSeenMoment,
}: IContinueMovieCard) => {
  return (
    <div className={styles.continue_movie_card}>
      <div className={styles.continue_movie_card_information}>
        <Image src={cover} width={55} height={59} alt="movie cover" />
        <div className={styles.continue_movie_card_information_text}>
          <h3>{title}</h3>
          <p>{lastSeenMoment}</p>
          <div></div>
        </div>
      </div>
      <ContinueMovieCardInteractionButtons id={id} />
    </div>
  );
};

export default ContinueMovieCard;
