"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";
import useRemoveFromWatchlist from "~/hooks/watchllist/useRemoveFromWatchlist";
import styles from "../../InteractionButton.module.scss";

const ExtendMovieCardInteractionButtons = ({
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
    <div className={styles.movie_card_interaction}>
      <RequestLoginHOC>
        <Button
          onClick={() =>
            !isInWatchList ? addToWatchlist(id) : removeFromWatchlist(id)
          }
          variant="secondary"
        >
          {!isInWatchList ? <AddOutlinedIcon /> : <DeleteIcon />}
        </Button>
      </RequestLoginHOC>
      <Button onClick={navigate} fullWidth variant="primary">
        More info
      </Button>
    </div>
  );
};
export default ExtendMovieCardInteractionButtons;
