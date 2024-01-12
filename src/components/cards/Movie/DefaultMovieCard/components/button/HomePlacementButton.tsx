"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import useAddToWatchlist from "~/hooks/watchllist/useAddToWatchlist";

export default function HomePlacementButton({ id }: { id: number }) {
  const { navigate } = useNavigateToMovieDetail(id);
  const { mutate } = useAddToWatchlist();

  return (
    <>
      <RequestLoginHOC>
        <Button onClick={() => mutate(id)} variant="secondary">
          <AddOutlinedIcon fontSize={"medium"} />
        </Button>
      </RequestLoginHOC>
      <Button onClick={navigate} fullWidth variant="primary">
        More info
      </Button>
    </>
  );
}
