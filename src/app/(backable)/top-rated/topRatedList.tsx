"use client";

import { Button } from "@mui/material";
import ExtendMovieCard, {
  ExtendMovieCardSkeleton,
} from "~/components/cards/Movie/ExtendMovieCard/ExtendMovieCard";
import NotFound from "~/components/not-found/NotFound";
import useGetTopRatedMovies from "~/hooks/movie/useGetTopRatedMovies";
import styles from "./top-rated.module.scss";

const TopRatedList = () => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetTopRatedMovies(10);

  if (data && data.length === 0)
    return (
      <div className={styles.page_movies}>
        <NotFound />
      </div>
    );

  return (
    <>
      <div className={styles.page_movies}>
        {data && !isLoading ? (
          <>
            {data.map((item) => (
              <ExtendMovieCard
                key={item.id}
                id={item.id}
                genres={["Movie", "Horror", "Love", "Fiction"]}
                posterPath={item.posterPath}
                title={item.title}
                runtime={item.runtime}
                overview={item.overview}
                voteAverage={item.voteAverage}
                releaseDate={item.releaseDate}
              />
            ))}
            {isFetchingNextPage && <Placholder />}
          </>
        ) : (
          <Placholder />
        )}
      </div>
      {!isFetching && hasNextPage && (
        <Button
          variant="primary_outlined"
          onClick={() => fetchNextPage()}
          className={styles.page_see_more}
        >
          See more
        </Button>
      )}
    </>
  );
};

function Placholder() {
  return new Array(10)
    .fill(0)
    .map((_, index) => <ExtendMovieCardSkeleton key={index} />);
}

export default TopRatedList;
