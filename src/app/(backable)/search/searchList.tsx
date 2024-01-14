"use client";

import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import ExtendMovieCard, {
  ExtendMovieCardSkeleton,
} from "~/components/cards/Movie/ExtendMovieCard/ExtendMovieCard";
import useGetAllMovies from "~/hooks/movie/useGetAllMovies";
import styles from "./search.module.scss";
import { searchContext } from "./searchProvider";

const TopRatedList = () => {
  const searchParams = useSearchParams();

  const { selected, minRating, maxRating, genres } = useContext(searchContext);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetAllMovies(
    {
      searchByOverview: selected.overview
        ? (searchParams.get("search") as string)
        : "",
      searchByTitle: selected.title
        ? (searchParams.get("search") as string)
        : "",
      maxRating: maxRating || 5,
      minRating,
      genres: genres.map((item) => JSON.parse(item)?.id),
    },
    10,
  );

  return (
    <div className={styles.page_main_right}>
      <div className={styles.page_movies}>
        {data && !isLoading ? (
          <>
            {data.map((item) => (
              <ExtendMovieCard key={item.id} {...item} />
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
    </div>
  );
};

function Placholder() {
  return new Array(10)
    .fill(0)
    .map((_, index) => <ExtendMovieCardSkeleton key={index} />);
}

export default TopRatedList;
