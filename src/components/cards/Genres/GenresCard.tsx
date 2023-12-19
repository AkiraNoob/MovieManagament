"use client";

import Button from "@mui/material/Button";
import { useNavigatorGenresMovies } from "~/hooks/useNavigatorGenresMovies";
import styles from "./GenresCard.module.scss";

interface IGenresCard {
  genres: string;
  size: "small" | "large";
}

const GenresCard = ({ genres, size }: IGenresCard) => {
  const { navigate } = useNavigatorGenresMovies(genres);

  return (
    <Button onClick={navigate} variant="transperant">
      <div
        style={{
          width:
            size === "large"
              ? styles.genresCardWidthLarge
              : styles.genresCardWidthSmall,
          height:
            size === "large"
              ? styles.genresCardHeightLarge
              : styles.genresCardHeightSmall,
        }}
        className={styles.genres_card}
      >
        <p className={styles.genres_card_label}>{genres}</p>
      </div>
    </Button>
  );
};
export default GenresCard;
