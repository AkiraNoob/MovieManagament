import ExtendMovieCard from "~/components/cards/Movie/ExtendMovieCard/ExtendMovieCard";
import styles from "./top-rated.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page_header}>Top Rated Movies</h1>

      <div className={styles.page_movies}>
        {new Array(20).fill(10).map((_, index) => (
          <ExtendMovieCard
            key={index}
            id={"tt0111161"}
            cover={"/mock_cover.png"}
            title={"Loki"}
            rating={4.5}
            dateRelease={new Date().toISOString()}
            description={
              "Avatar release is expected to draw large crowds due to popularity | NewsBytes"
            }
            duration={"01:33:47"}
            genres={["Movie", "Horror", "Love", "Fiction"]}
          />
        ))}
      </div>
    </div>
  );
}
