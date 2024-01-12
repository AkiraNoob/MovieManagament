import styles from "./genres.module.scss";
import GenersList from "./genresList";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>Genres</h1>

      <GenersList />
    </div>
  );
}
