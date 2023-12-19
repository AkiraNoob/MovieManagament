"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import DefaultMovieCard, {
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import styles from "./playlists.module.scss";

function a11yProps(index: number) {
  return {
    id: `playlist-tab-${index}`,
    "aria-controls": `playlist-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`playlist-tabpanel-${index}`}
      aria-labelledby={`playlist-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
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

      <CustomTabPanel value={currentTab} index={0}>
        <div className={styles.page_movies}>
          {new Array(20).fill(10).map((_, index) => (
            <DefaultMovieCard
              key={index}
              id={"tt0111161"}
              cover={"/mock_cover.png"}
              title={"Loki"}
              rating={4.5}
              duration={"01:33:47"}
              genres={["Movie", "Horror", "Love", "Fiction"]}
              place={EDefaultMovieCardPlacement.Recent}
            />
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={currentTab} index={1}>
        <div className={styles.page_movies}>
          {new Array(20).fill(10).map((_, index) => (
            <DefaultMovieCard
              key={index}
              id={"tt0111161"}
              cover={"/mock_cover.png"}
              title={"Loki"}
              rating={4.5}
              duration={"01:33:47"}
              genres={["Movie", "Horror", "Love", "Fiction"]}
              place={EDefaultMovieCardPlacement.Watchlist}
            />
          ))}
        </div>
      </CustomTabPanel>
    </div>
  );
}
