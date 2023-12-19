import { generateBannerMovieCardBackgroundImage } from "~/helpers/generateBackgroundImage";
import styles from "./BannerMovieCard.module.scss";
import ContinueMovieCardInteractionButtons from "./components/BannerMovieCardInteractionButtons";

interface IBannerMovieCard {
  cover: string;
  title: string;
  id: string;
}

const BannerMovieCard = ({ cover, title, id }: IBannerMovieCard) => {
  return (
    <div
      style={{
        backgroundImage: generateBannerMovieCardBackgroundImage(cover),
      }}
      className={`${styles.banner_movie_card} movie_background`}
    >
      <h2>{title}</h2>

      <ContinueMovieCardInteractionButtons id={id} />
    </div>
  );
};

export default BannerMovieCard;
