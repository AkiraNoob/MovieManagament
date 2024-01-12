"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import styles from "./playlists.module.scss";
import RecentPanel from "./recentPanel";
import WatchlistPanel from "./watchListPanel";

function a11yProps(index: number) {
  return {
    id: `playlist-tab-${index}`,
    "aria-controls": `playlist-tabpanel-${index}`,
  };
}

export default function Page() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>Playlist</h1>

      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Recent" {...a11yProps(0)} />
        <Tab label="Watchlist" {...a11yProps(1)} />
      </Tabs>
      <RecentPanel currentTab={currentTab} />
      <WatchlistPanel currentTab={currentTab} />
    </div>
  );
}
