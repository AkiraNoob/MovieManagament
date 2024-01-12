"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigateToMovieDetail } from "~/hooks/useNavigatorToMoviePage";
import useRemoveFromWatchlist from "~/hooks/watchllist/useRemoveFromWatchlist";

export default function WatchlistPlacementButton({ id }: { id: number }) {
  const { navigate } = useNavigateToMovieDetail(id);
  const { mutate } = useRemoveFromWatchlist();

  return (
    <>
      <Button onClick={() => mutate(id)} variant="secondary">
        <DeleteIcon fontSize={"medium"} />
      </Button>
      <Button onClick={navigate} fullWidth variant="primary">
        Watch
      </Button>
    </>
  );
}
