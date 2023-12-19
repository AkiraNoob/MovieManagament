import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import styles from "./MovieDetailInteractionButton.module.scss";

const MovieDetailInteractionButton = ({ id }: { id: string }) => {
  const { navigate } = useNavigateContinueWatchMovie(id);

  return (
    <div className={styles.movie_detail_interaction_button}>
      <Button
        sx={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
        variant="secondary"
        startIcon={<AddIcon />}
      >
        Watchlist
      </Button>
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
