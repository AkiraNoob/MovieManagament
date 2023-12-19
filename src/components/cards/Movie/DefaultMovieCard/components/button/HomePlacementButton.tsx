import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";

export default function HomePlacementButton({ id }: { id: string }) {
  const { navigate } = useNavigateToMovieDetail(id);

  return (
    <>
      <Button variant="secondary">
        <AddOutlinedIcon fontSize={"medium"} />
      </Button>
      <Button onClick={navigate} fullWidth variant="primary">
        More info
      </Button>
    </>
  );
}
