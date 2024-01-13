import SearchInput from "~/contents/search/SearchInput";
import SideBar from "~/contents/sidebar/SideBar";
import ContinueList from "./continueLits";
import GenersList from "./genresList";
import RandomList from "./randomList";
import styles from "./root.module.scss";
import TopRated from "./topRated";
import SuggestedMovie from "~/components/SuggestedMovie";
import RandomOrSuggest from "~/app/RandomOrSuggest";

export default function Home() {
  return (
    <>
      <div className={styles.home_content_left}>
        <SearchInput sidebar={<SideBar />} />
        <RandomList />
        <h2>Movies for you</h2>
         <RandomOrSuggest/>
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
