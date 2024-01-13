"use client";

import { CustomActiveRating } from "~/components/rating/Rating";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import styles from "./movie_watch.module.scss";
import WatchIframe from "./watchIframe";
import SuggestedMovie from "~/components/SuggestedMovie";
import RandomOrSuggest from "~/app/RandomOrSuggest";

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
      <Rating />

      <div className={styles.movie_watch_page_related_movies}>


        <RandomOrSuggest/>

      </div>
    </div>
  );
}

function Rating() {
  return (
    <RequestLoginHOC>
      <CustomActiveRating size={21} />
    </RequestLoginHOC>
  );
}
