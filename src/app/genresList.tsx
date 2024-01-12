"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { useMemo } from "react";
import { TGetGenresResponse } from "~/api/genres.api";
import GenresCard, {
  GenresCardSkeleton,
} from "~/components/cards/Genres/GenresCard";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import useGetAllGenres from "~/hooks/genres/useGetAllGenres";
import styles from "./root.module.scss";

const GenersList = () => {
  const { data, isLoading } = useGetAllGenres();

  const genres = useMemo(() => {
    let result: TGetGenresResponse[] = [];

    if (data) {
      const _data = data.slice(0, 12);

      result = new Array(Math.ceil(_data.length / 2)).fill(0).map(() => []);

      _data.forEach((item, index) => {
        result[Math.floor(index / 2)].push(item);
      });
    }

    return result;
  }, [data]);

  return (
    <TitleSwiper
      navigation
      title="Genres"
      moreControl={
        <Link
          href={"/genres"}
          className={styles.home_content_right_swiper_more_control}
        >
          <span>See more</span> <ChevronRightIcon />
        </Link>
      }
    >
      {data && !isLoading
        ? genres.map((subItem, index) => (
            <div
              key={index}
              className={styles.home_content_right_genres_slide_col}
            >
              {subItem.map((item) => (
                <GenresCard
                  size="small"
                  key={item.id}
                  genres={item.name}
                  genreId={item.id}
                />
              ))}
            </div>
          ))
        : new Array(20).fill(0).map((_, index) => (
            <div
              key={index}
              className={styles.home_content_right_genres_slide_col}
            >
              <GenresCardSkeleton size="small" />
              <GenresCardSkeleton size="small" />
            </div>
          ))}
    </TitleSwiper>
  );
};

export default GenersList;
