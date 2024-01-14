import RandomOrSuggest from "~/app/RandomOrSuggest";
import MovieDetailInformation from "./information";
import styles from "./moveiDetail.module.scss";

export default function Page({ params }: { params: { movieId: string } }) {
  return (
    <div className={styles.movie_detail_page}>
      <div className={styles.movie_detail_page_main}>
        <MovieDetailInformation movieId={params.movieId} />
      </div>

      <div className={styles.movie_detail_page_related_movies}>
        <RandomOrSuggest />
      </div>
    </div>
  );
}
