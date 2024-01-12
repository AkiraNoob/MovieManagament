import styles from "./genres_label.module.scss";
import GenreMovieList from "./movieList";
import GenresDetailTitle from "./title";

export default function Page({
  params,
}: {
  params: {
    genreId: string;
  };
}) {
  return (
    <div className={styles.page}>
      <GenresDetailTitle genreId={params.genreId} />

      <GenreMovieList genreId={params.genreId} />
    </div>
  );
}
