import styles from "./search.module.scss";
import TopRatedList from "./searchList";
import SearchOptions from "./searchOptions";
import SearchProvider from "./searchProvider";

export default function Page({
  searchParams: { search },
}: {
  searchParams: {
    search?: string;
  };
}) {
  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>
        Result for <span>{search}</span>
      </h1>

      <div className={styles.page_main}>
        <SearchProvider>
          <SearchOptions />
          <TopRatedList />
        </SearchProvider>
      </div>
    </div>
  );
}
