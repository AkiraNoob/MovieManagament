"use client";

import RandomOrSuggest from "~/app/RandomOrSuggest";
import styles from "./movie_watch.module.scss";
import WatchIframe from "./watchIframe";

export default function Page({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  return (
    <div className={styles.movie_watch_page}>
      <WatchIframe movieId={params.movieId} />

      <div className={styles.movie_watch_page_related_movies}>
        <RandomOrSuggest />
      </div>
    </div>
  );
}
