"use client";

import GenresCard, {
  GenresCardSkeleton,
} from "~/components/cards/Genres/GenresCard";
import NotFound from "~/components/not-found/NotFound";
import useGetAllGenres from "~/hooks/genres/useGetAllGenres";
import styles from "./genres.module.scss";

const GenersList = () => {
  const { data, isLoading } = useGetAllGenres();

  if (data && data.length === 0)
    return (
      <div className={styles.page_genres}>
        <NotFound />
      </div>
    );

  return (
    <div className={styles.page_genres}>
      {data && !isLoading
        ? data.map((item) => (
            <GenresCard
              size="large"
              key={item.id}
              genres={item.name}
              genreId={item.id}
            />
          ))
        : new Array(20)
            .fill(10)
            .map((_, index) => <GenresCardSkeleton size="large" key={index} />)}
    </div>
  );
};

export default GenersList;
