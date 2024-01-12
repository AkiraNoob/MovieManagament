"use client";

import useGetGenreDetail from "~/hooks/genres/useGetGenreDetail";
import styles from "./genres_label.module.scss";

export default function GenresDetailTitle({ genreId }: { genreId: string }) {
  const { data } = useGetGenreDetail(genreId, { enabled: !!genreId });

  return <h1 className={styles.page_header}>{data?.name} Movies</h1>;
}
