import Image from "next/image";
import ExtendMovieCard from "~/components/cards/Movie/ExtendMovieCard/ExtendMovieCard";
import CustomRating from "~/components/rating/Rating";
import TitleSwiper from "~/components/swiper/TitleSwiper/TitleSwiper";
import MovieDetailInteractionButton from "~/contents/button/MovieDetailInteractionButton";
import styles from "./moveiDetail.module.scss";

export default function Page({ params }: { params: { movieId: string } }) {
  const data = {
    cover: "/mock_cover.png",
    title: "Loki",
    rating: 4.6,
    viewsCount: 10123123,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iusto, deleniti perferendis tempora ad ipsa dolores nemo sint qui eligendi alias saepe fugit doloribus assumenda nam aut, nobis esse aperiam.",
  };

  return (
    <div className={styles.movie_detail_page}>
      <div className={styles.movie_detail_page_main}>
        <div className={styles.movie_detail_page_main_information}>
          <h1 className={styles.movie_detail_page_main_information_title}>
            {data.title}
          </h1>
          <CustomRating size={38} value={data.rating} />
          <p className={styles.movie_detail_page_main_information_views_count}>
            {data.viewsCount} views
          </p>
          <p className={styles.movie_detail_page_main_information_description}>
            {data.description}
          </p>
          <MovieDetailInteractionButton id={params.movieId} />
        </div>
        <Image
          src={data.cover}
          alt="movie cover"
          width={452}
          height={568}
          className={styles.movie_detail_page_main_cover}
          quality={100}
        />
      </div>

      <div className={styles.movie_detail_page_related_movies}>
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
      </div>
    </div>
  );
}
