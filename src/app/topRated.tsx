"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import MinimizedMovieCard, {
  MinimizedMovieCardSkeleton,
} from "~/components/cards/Movie/MinimizedMovieCard/MinimizedMovieCard";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetTopRatedMovies from "~/hooks/movie/useGetTopRatedMovies";
import styles from "./root.module.scss";

const TopRated = () => {
  const { data, isLoading } = useGetTopRatedMovies(10);

  return (
    <TitleSwiper
      navigation
      title="Top Rated"
      moreControl={
        <Link
          href={"/top-rated"}
          className={styles.home_content_right_swiper_more_control}
        >
          <span>See more</span> <ChevronRightIcon />
        </Link>
      }
    >
      {data && !isLoading
        ? data.map((item, index) => (
            <MinimizedMovieCard
              key={index}
              id={item.id}
              posterPath={item.posterPath}
              title={item.title}
              runtime={item.runtime}
              genres={item.genres}
            />
          ))
        : new Array(6)
            .fill(0)
            .map((_, index) => <MinimizedMovieCardSkeleton key={index} />)}
    </TitleSwiper>
  );
};

export default TopRated;
