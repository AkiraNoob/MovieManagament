import MovieDetailInformation from "./information";
import styles from "./moveiDetail.module.scss";

export default function Page({ params }: { params: { movieId: string } }) {
  return (
    <div className={styles.movie_detail_page}>
      <div className={styles.movie_detail_page_main}>
        <MovieDetailInformation movieId={params.movieId} />
      </div>

      {/* <div className={styles.movie_detail_page_related_movies}>
        <h3 className={styles.movie_detail_page_related_movies_title}>
          Related movie
        </h3>

        <TitleSwiper
          navigation={false}
          swiperProps={{
            spaceBetween: "56px",
          }}
        >
          {new Array(10).fill(0).map((_, index) => (
            <ExtendMovieCard
              key={index}
              id={"tt0111161"}
              cover={"/mock_cover.png"}
              title={"Rick and Morty"}
              duration={"01:10:00"}
              genres={["Horror", "Love"]}
              rating={4.5}
              dateRelease={new Date().toISOString()}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iusto, deleniti perferendis tempora ad ipsa dolores nemo sint qui eligendi alias saepe fugit doloribus assumenda nam aut, nobis esse aperiam."
              }
            />
          ))}
        </TitleSwiper>
      </div> */}
    </div>
  );
}
