"use client";

import { Skeleton } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigatorGenresMovies } from "~/hooks/useNavigatorGenresMovies";
import styles from "./GenresCard.module.scss";

interface IGenresCard {
  genres: string;
  genreId: number;
  size: "small" | "large";
}

const GenresCard = ({ genres, size, genreId }: IGenresCard) => {
  const { navigate } = useNavigatorGenresMovies(genreId);

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
        <p className={`${styles.genres_card_label} line-clamp-2`}>{genres}</p>
      </div>
    </Button>
  );
};
export default GenresCard;

export const GenresCardSkeleton = ({ size }: Pick<IGenresCard, "size">) => {
  return (
    <Skeleton
      variant="rounded"
      width={
        size === "large"
          ? styles.genresCardWidthLarge
          : styles.genresCardWidthSmall
      }
      height={
        size === "large"
          ? styles.genresCardHeightLarge
          : styles.genresCardHeightSmall
      }
    />
  );
};
