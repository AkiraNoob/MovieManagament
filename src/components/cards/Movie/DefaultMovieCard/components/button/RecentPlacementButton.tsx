"use client";

import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";
import useRemoveFromWatchinglist from "~/hooks/watching/useRemoveFromWatchinglist";

export default function RecentPlacementButton({ id }: { id: number }) {
  const { navigate } = useNavigateContinueWatchMovie(id);
  const { mutate } = useRemoveFromWatchinglist();
  return (
    <>
      <Button onClick={() => mutate(id)} variant="secondary">
        Drop
      </Button>
      <Button onClick={navigate} fullWidth variant="primary">
        Continue
      </Button>
    </>
  );
}
