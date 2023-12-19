"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import styles from "../../InteractionButton.module.scss";

const MinimizedMovieCardInteractionButtons = ({ id }: { id: string }) => {
  const { navigate } = useNavigateToMovieDetail(id);
  return (
    <div className={styles.movie_card_interaction}>
      <Button variant="secondary">
        <AddOutlinedIcon fontSize={"medium"} />
      </Button>
      <Button onClick={navigate} fullWidth variant="primary">
        Watch
      </Button>
    </div>
  );
};

export default MinimizedMovieCardInteractionButtons;
