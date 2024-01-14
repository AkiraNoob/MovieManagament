"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";
import useRemoveFromWatchlist from "~/hooks/watchllist/useRemoveFromWatchlist";
import styles from "./BannerMovieCardInteractionButtons.module.scss";

const BannerMovieCardInteractionButtons = ({
  id,
  isInWatchList: _isInWatchList,
}: {
  id: number;
  isInWatchList: boolean;
}) => {
  const { navigate } = useNavigateToMovieDetail(id);
  const { mutate: addToWatchlist } = useAddToWatchlist();
  const { mutate: removeFromWatchlist } = useRemoveFromWatchlist();

  const [isInWatchList, setIsInWatchList] = useState(_isInWatchList);

  useEffect(() => {
    setIsInWatchList(_isInWatchList);
  }, [_isInWatchList]);

  return (
    <div className={styles.banner_movie_card_interaction}>
      <RequestLoginHOC>
        <Button
          onClick={() =>
            !isInWatchList ? addToWatchlist(id) : removeFromWatchlist(id)
          }
          variant="secondary"
          startIcon={!isInWatchList ? <AddOutlinedIcon /> : <DeleteIcon />}
        >
          {!isInWatchList ? `Watchlist` : "Remove"}
        </Button>
      </RequestLoginHOC>
      <Button onClick={navigate} variant="primary">
        Watch Now
      </Button>
    </div>
  );
};

export default BannerMovieCardInteractionButtons;
