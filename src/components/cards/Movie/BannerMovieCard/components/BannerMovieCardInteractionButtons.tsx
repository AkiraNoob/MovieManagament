"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";
import styles from "./BannerMovieCardInteractionButtons.module.scss";

const BannerMovieCardInteractionButtons = ({ id }: { id: number }) => {
  const { navigate } = useNavigateToMovieDetail(id);
  const { mutate } = useAddToWatchlist();

  return (
    <div className={styles.banner_movie_card_interaction}>
      <RequestLoginHOC>
        <Button
          onClick={() => mutate(id)}
          variant="secondary"
          startIcon={<AddOutlinedIcon />}
        >
          Watchlist
        </Button>
      </RequestLoginHOC>
      <Button onClick={navigate} variant="primary">
        Watch Now
      </Button>
    </div>
  );
};

export default BannerMovieCardInteractionButtons;
