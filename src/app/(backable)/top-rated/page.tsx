import styles from "./top-rated.module.scss";
import TopRatedList from "./topRatedList";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>Top Rated Movies</h1>

      <TopRatedList />
    </div>
  );
}
