import RandomOrSuggest from "~/app/RandomOrSuggest";
import SearchInput from "~/contents/search/SearchInput";
import ContinueList from "./continueLits";
import GenersList from "./genresList";
import RandomList from "./randomList";
import styles from "./root.module.scss";
import TopRated from "./topRated";

export default function Home() {
  return (
    <>
      <div className={styles.home_content_left}>
        <SearchInput />
        <RandomList />
        <RandomOrSuggest />
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
