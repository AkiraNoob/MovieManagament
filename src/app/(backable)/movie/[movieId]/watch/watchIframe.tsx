"use client";

import { Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useGetDetailMovie from "~/hooks/movie/useGetDetailMovie";
import usePostValidateVidSrcUrl from "~/hooks/movie/usePostValidateVidSrcUrl";
import useAddToWatching from "~/hooks/watching/useAddToWatching";
import styles from "./movie_watch.module.scss";

const WatchIframe = ({ movieId }: { movieId: string }) => {
  const { data } = useGetDetailMovie(movieId, {
    enabled: !!movieId,
  });
  const { mutate: addToWatching } = useAddToWatching();

  const { mutate, isPending, isSuccess } = usePostValidateVidSrcUrl({
    onSuccess(data, variables, context) {
      if (!data) {
        setPrefix("tv");
        return;
      }

      addToWatching({
        movieId: parseInt(movieId),
        lastViewMoment: "00:00:00",
      });
    },
    onError(error, variables, context) {
      toast("Có lỗi xảy ra khi lấy thông tin phim.");
    },
  });

  const [prefix, setPrefix] = useState<"movie" | "tv">("movie");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (data?.imdbId && prefix) {
      mutate(`https://vidsrc.to/embed/${prefix}/${data?.imdbId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.imdbId, prefix]);

  return isSuccess ? (
    <iframe
      ref={iframeRef}
      className={styles.movie_watch_page_iframe}
      allow="fullscreen"
      allowFullScreen
      src={`https://vidsrc.to/embed/${prefix}/${data?.imdbId}`}
    />
  ) : (
    <Skeleton
      className={styles.movie_watch_page_iframe}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default WatchIframe;
