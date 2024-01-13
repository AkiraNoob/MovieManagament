"use client";

import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import useRemoveFromWatchinglist from "~/hooks/watching/useRemoveFromWatchinglist";
import styles from "../../InteractionButton.module.scss";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";

const ContinueMovieCardInteractionButtons = ({ id }: { id: number }) => {
  const { navigate } = useNavigateContinueWatchMovie(id);
  const { mutate } = useRemoveFromWatchinglist();

  return (
    <div className={styles.movie_card_interaction}>
      <RequestLoginHOC>

      <Button onClick={() => mutate(id)} variant="secondary">
        Drop
      </Button>
      </RequestLoginHOC>
      <Button fullWidth variant="primary" onClick={navigate}>
        Watch
      </Button>
    </div>
  );
};

export default ContinueMovieCardInteractionButtons;
