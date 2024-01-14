import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { TMovieDTO } from "~/types/data/movie.types";
import styles from "./ContinueMovieCard.module.scss";
import ContinueMovieCardInteractionButtons from "./components/ContinueMovieCardInteractionButtons";

const ContinueMovieCard = ({
  id,
  title,
  lastSeenMoment,
  posterPath,
}: TMovieDTO & {
  lastSeenMoment: string;
}) => {
  const [img, setImg] = useState(posterPath);

  return (
    <div className={styles.continue_movie_card}>
      <div className={styles.continue_movie_card_information}>
        <Image
          src={img}
          onError={(e) => {
            setImg("/placeholder.jpg");
          }}
          width={55}
          height={59}
          alt="movie cover"
        />
        <div className={styles.continue_movie_card_information_text}>
          <h3 className="line-clamp-2">{title}</h3>
          <p>{lastSeenMoment}</p>
          <div></div>
        </div>
      </div>
      <ContinueMovieCardInteractionButtons id={id} />
    </div>
  );
};

export default ContinueMovieCard;

export const ContinueMovieCardSkeleton = () => {
  return (
    <div className={styles.continue_movie_card}>
      <div className={styles.continue_movie_card_information}>
        <Image
          src={"/placholder.jpg"}
          width={55}
          height={59}
          alt="movie cover"
        />
        <Skeleton variant="rounded" width={"60%"} height={40} />
      </div>
      <Skeleton variant="rounded" width={"100%"} height={64} />
    </div>
  );
};
