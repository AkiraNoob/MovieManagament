"use client";

import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import styles from "../../InteractionButton.module.scss";
import {
  EDefaultMovieCardPlacement,
  IDefaultMovieCard,
} from "../DefaultMovieCard";

const loading = () => (
  <div className={styles.movie_card_interaction}>
    <Skeleton variant="rounded" width={120} height={54} />
    <Skeleton variant="rounded" width={"100%"} height={54} />
  </div>
);

const HomePlacementButton = dynamic(
  () => import("./button/HomePlacementButton"),
  {
    loading,
  },
);
const RecentPlacementButton = dynamic(
  () => import("./button/RecentPlacementButton"),
  {
    loading,
  },
);
const WatchlistPlacementButton = dynamic(
  () => import("./button/WatchlistPlacementButton"),
  {
    loading,
  },
);

const DefaultMovieCardInteractionButtons = ({
  id,
  place,
}: { id: string } & Pick<IDefaultMovieCard, "place">) => {
  const hashButtonPairs: {
    [key in IDefaultMovieCard["place"]]: React.ReactNode;
  } = {
    [EDefaultMovieCardPlacement.Home]: <HomePlacementButton id={id} />,
    [EDefaultMovieCardPlacement.Recent]: <RecentPlacementButton id={id} />,
    [EDefaultMovieCardPlacement.Watchlist]: (
      <WatchlistPlacementButton id={id} />
    ),
  };

  return (
    <div className={styles.movie_card_interaction}>
      {hashButtonPairs[place]}
    </div>
  );
};

export default DefaultMovieCardInteractionButtons;
