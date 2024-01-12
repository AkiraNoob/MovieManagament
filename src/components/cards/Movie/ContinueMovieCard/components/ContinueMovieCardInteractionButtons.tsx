"use client";

import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import useRemoveFromWatchinglist from "~/hooks/watching/useRemoveFromWatchinglist";
import styles from "../../InteractionButton.module.scss";

const ContinueMovieCardInteractionButtons = ({ id }: { id: number }) => {
  const { navigate } = useNavigateContinueWatchMovie(id);
  const { mutate } = useRemoveFromWatchinglist();

  return (
    <div className={styles.movie_card_interaction}>
      <Button onClick={() => mutate(id)} variant="secondary">
        Drop
      </Button>
      <Button fullWidth variant="primary" onClick={navigate}>
        Watch
      </Button>
    </div>
  );
};

export default ContinueMovieCardInteractionButtons;
