import SearchInput from "~/contents/search/SearchInput";
import SideBar from "~/contents/sidebar/SideBar";
import ContinueList from "./continueLits";
import GenersList from "./genresList";
import RandomList from "./randomList";
import styles from "./root.module.scss";
import TopRated from "./topRated";

export default function Home() {
  return (
    <>
      <div className={styles.home_content_left}>
        <SearchInput sidebar={<SideBar />} />
        <RandomList />
        <h2>Movies for you</h2>
        {/* <TitleSwiper>
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
        </TitleSwiper> */}
      </div>
      <div className={styles.home_content_right}>
        <div>
          <ContinueList />
        </div>
        <div>
          <TopRated />
        </div>
        <div>
          <GenersList />
        </div>
      </div>
    </>
  );
}
