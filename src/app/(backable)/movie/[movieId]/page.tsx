
import MovieDetailInformation from "./information";
import styles from "./moveiDetail.module.scss";
import SuggestedMovie from "~/components/SuggestedMovie";
import { useContext } from "react";
import { userContext } from "~/app/userProvider";
import RandomList from "~/app/randomList";
import RandomMovieDefault from "~/components/RandomMovieDefault";
import RandomOrSuggest from "~/app/RandomOrSuggest";

export default function Page({ params }: { params: { movieId: string } }) {


  return (
    <div className={styles.movie_detail_page}>
      <div className={styles.movie_detail_page_main}>
        <MovieDetailInformation movieId={params.movieId} />
      </div>

      <div className={styles.movie_detail_page_related_movies}>
        <h3 className={styles.movie_detail_page_related_movies_title}>
          Related movie
        </h3>

       <RandomOrSuggest/>
      </div>
    </div>
  );
}
