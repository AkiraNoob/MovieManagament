"use client";

import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import styles from "../../InteractionButton.module.scss";

const ContinueMovieCardInteractionButtons = ({ id }: { id: string }) => {
  const { navigate } = useNavigateContinueWatchMovie(id);

  return (
    <div className={styles.movie_card_interaction}>
      <Button variant="secondary">Drop</Button>
      <Button fullWidth variant="primary" onClick={navigate}>
        Watch
      </Button>
    </div>
  );
};

export default ContinueMovieCardInteractionButtons;
