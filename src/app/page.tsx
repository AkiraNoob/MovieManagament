import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GenresCard from "~/components/cards/Genres/GenresCard";
import BannerMovieCard from "~/components/cards/Movie/BannerMovieCard/BannerMovieCard";
import ContinueMovieCard from "~/components/cards/Movie/ContinueMovieCard/ContinueMovieCard";
import DefaultMovieCard, {
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import MinimizedMovieCard from "~/components/cards/Movie/MinimizedMovieCard/MinimizedMovieCard";
import InlineNavigationSwiper from "~/components/swiper/InlineNavigationSwiper/InlineNavigationSwiper";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import SearchInput from "~/contents/search/SearchInput";
import styles from "./root.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home_content_left}>
        <SearchInput />
        <InlineNavigationSwiper>
          {new Array(10).fill(0).map((_, index) => (
            <BannerMovieCard
              key={index}
              cover={"/mock_large_cover.png"}
              title={"Rick and Morty"}
              id={"tt0111161"}
            />
          ))}
        </InlineNavigationSwiper>
        <h2>Movies for you</h2>
        <TitleSwiper>
          {new Array(10).fill(0).map((_, index) => (
            <DefaultMovieCard
              key={index}
              id={"tt0111161"}
              cover={"/mock_cover.png"}
              title={"Loki"}
              duration={"01:30:00"}
              genres={["Horror", "Fantasy"]}
              rating={4.5}
              place={EDefaultMovieCardPlacement.Home}
            />
          ))}
        </TitleSwiper>
      </div>
      <div className={styles.home_content_right}>
        <div>
          <TitleSwiper
            navigation
            title="Continue"
            moreControl={
              <div className={styles.home_content_right_swiper_more_control}>
                <span>See more</span> <ChevronRightIcon />
              </div>
            }
          >
            {new Array(10).fill(0).map((_, index) => (
              <ContinueMovieCard
                key={index}
                id={"tt0111161"}
                cover={"/mock_cover.png"}
                title={"Loki"}
                lastSeenMoment={"01:10:00"}
              />
            ))}
          </TitleSwiper>
        </div>
        <div>
          <TitleSwiper
            navigation
            title="Top Rated"
            moreControl={
              <div className={styles.home_content_right_swiper_more_control}>
                <span>See more</span> <ChevronRightIcon />
              </div>
            }
          >
            {new Array(10).fill(0).map((_, index) => (
              <MinimizedMovieCard
                key={index}
                id={"tt0111161"}
                cover={"/mock_large_cover.png"}
                title={"Rick and Morty"}
                duration={"01:10:00"}
                genres={["Horror", "Love"]}
              />
            ))}
          </TitleSwiper>
        </div>
        <div>
          <TitleSwiper
            navigation
            title="Genres"
            moreControl={
              <div className={styles.home_content_right_swiper_more_control}>
                <span>See more</span> <ChevronRightIcon />
              </div>
            }
          >
            {new Array(10).fill(0).map((_, index) => (
              <div
                key={index}
                className={styles.home_content_right_genres_slide_col}
              >
                <GenresCard size="small" genres="Horror" />
                <GenresCard size="small" genres="Horror" />
              </div>
            ))}
          </TitleSwiper>
        </div>
      </div>
    </>
  );
}
