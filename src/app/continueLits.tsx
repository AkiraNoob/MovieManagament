"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import ContinueMovieCard, {
  ContinueMovieCardSkeleton,
} from "~/components/cards/Movie/ContinueMovieCard/ContinueMovieCard";
import NotFound from "~/components/not-found/NotFound";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetWatchingList from "~/hooks/watching/useGetWatchingList";
import styles from "./root.module.scss";

const ContinueList = () => {
  const { data, isLoading, isError } = useGetWatchingList(15, { retry: 2 });

  return (
    <TitleSwiper
      navigation
      title="Continue"
      moreControl={
        <Link
          href={"/playlist"}
          className={styles.home_content_right_swiper_more_control}
        >
          <span>See more</span> <ChevronRightIcon />
        </Link>
      }
    >
      {isError
        ? [<NotFound key={1} />]
        : data && !isLoading
          ? data.length === 0
            ? [<NotFound key={1} />]
            : data.map((item) => (
                <ContinueMovieCard
                  key={item.id}
                  id={item.id}
                  posterPath={item.posterPath}
                  title={item.title}
                  lastSeenMoment={"01:10:00"}
                />
              ))
          : new Array(10)
              .fill(0)
              .map((_, index) => <ContinueMovieCardSkeleton key={index} />)}
    </TitleSwiper>
  );
};

export default ContinueList;
