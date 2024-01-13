"use client";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import styles from "./MovieDetailInteractionButton.module.scss";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";

const MovieDetailInteractionButton = ({ id }: { id: number }) => {
  const { navigate } = useNavigateContinueWatchMovie(id);
  const { mutate } = useAddToWatchlist()

  return (
    <div className={styles.movie_detail_interaction_button}>
      <RequestLoginHOC>

      <Button
        sx={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
        variant="secondary"
        startIcon={<AddIcon />}
        onClick={() => {mutate(id)}}
      >
        Watchlist
      </Button>
      </RequestLoginHOC>
      <Button
        onClick={navigate}
        sx={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
        variant="primary_outlined"
      >
        Watch now
      </Button>
    </div>
  );
};

export default MovieDetailInteractionButton;
