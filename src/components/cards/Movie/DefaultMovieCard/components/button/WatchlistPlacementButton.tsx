import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";

export default function WatchlistPlacementButton({ id }: { id: string }) {
  const { navigate } = useNavigateToMovieDetail(id);
  return (
    <>
      <Button variant="secondary">
        <DeleteIcon fontSize={"medium"} />
      </Button>
      <Button onClick={navigate} fullWidth variant="primary">
        Watch
      </Button>
    </>
  );
}
