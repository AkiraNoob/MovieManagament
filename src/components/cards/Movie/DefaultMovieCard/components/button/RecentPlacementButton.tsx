"use client";

import Button from "@mui/material/Button";
import { useNavigateContinueWatchMovie } from "~/hooks/useNavigatorToMoviePage";

export default function RecentPlacementButton({ id }: { id: string }) {
  const { navigate } = useNavigateContinueWatchMovie(id);
  return (
    <>
      <Button variant="secondary">Drop</Button>
      <Button onClick={navigate} fullWidth variant="primary">
        Continue
      </Button>
    </>
  );
}
