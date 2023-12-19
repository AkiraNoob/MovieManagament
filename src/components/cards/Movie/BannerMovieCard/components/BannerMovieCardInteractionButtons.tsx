"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import styles from "./BannerMovieCardInteractionButtons.module.scss";

const ContinueMovieCardInteractionButtons = ({ id }: { id: string }) => {
  const { navigate } = useNavigateToMovieDetail(id);

  return (
    <div className={styles.banner_movie_card_interaction}>
      <Button variant="secondary" startIcon={<AddOutlinedIcon />}>
        Watchlist
      </Button>
      <Button onClick={navigate} variant="primary">
        Watch Now
      </Button>
    </div>
  );
};

export default ContinueMovieCardInteractionButtons;
