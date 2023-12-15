import MovieCard from "~/components/cards/MovieCard/MovieCard";

export default function Home() {
  return (
    <div>
      <MovieCard
        id={"132"}
        cover={"/mock_image.jpg"}
        title={"Avatar"}
        rating={4.5}
        dateRelease={new Date().toISOString()}
        description={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio alias voluptatibus maxime quidem error ipsam ipsa enim, fugit quae obcaecati doloremque neque ut perferendis rerum iste molestias quibusdam expedita exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio alias voluptatibus maxime quidem error ipsam ipsa enim, fugit quae obcaecati doloremque neque ut perferendis rerum iste molestias quibusdam expedita exercitationem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio alias voluptatibus maxime quidem error ipsam ipsa enim, fugit quae obcaecati doloremque neque ut perferendis rerum iste molestias quibusdam expedita exercitationem."
        }
        episodesCount={6}
        genres={["horror"]}
      />
    </div>
  );
}
