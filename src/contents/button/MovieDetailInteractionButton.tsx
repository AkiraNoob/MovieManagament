"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";
import useRemoveFromWatchlist from "~/hooks/watchllist/useRemoveFromWatchlist";
import styles from "./MovieDetailInteractionButton.module.scss";

const MovieDetailInteractionButton = ({
  id,
  isInWatchList: _isInWatchList,
}: {
  id: number;
  isInWatchList: boolean;
}) => {
  const { navigate } = useNavigateContinueWatchMovie(id);
  const { mutate: addToWatchlist } = useAddToWatchlist();
  const { mutate: removeFromWatchlist } = useRemoveFromWatchlist();

  const [isInWatchList, setIsInWatchList] = useState(_isInWatchList);

  useEffect(() => {
    setIsInWatchList(_isInWatchList);
  }, [_isInWatchList]);

  return (
    <div className={styles.movie_detail_interaction_button}>
      <RequestLoginHOC>
        <Button
          onClick={() =>
            !isInWatchList ? addToWatchlist(id) : removeFromWatchlist(id)
          }
          sx={{
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          variant="secondary"
          startIcon={!isInWatchList ? <AddIcon /> : <DeleteIcon />}
        >
          {!isInWatchList ? `Watchlist` : "Remove"}
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
