import GenresCard from "~/components/cards/Genres/GenresCard";
import styles from "./genres.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>Genres</h1>

      <div className={styles.page_genres}>
        {new Array(20).fill(10).map((_, index) => (
          <GenresCard size="large" key={index} genres="Horror" />
        ))}
      </div>
    </div>
  );
}
