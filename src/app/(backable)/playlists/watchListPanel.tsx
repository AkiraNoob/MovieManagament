import { Button } from "@mui/material";
import DefaultMovieCard, {
  DefaultMovieCardSkeleton,
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import NotFound from "~/components/not-found/NotFound";
import useGetWatchlist from "~/hooks/watchllist/useGetWatchlist";
import { CustomTabPanel } from "./component";
import styles from "./playlists.module.scss";

const WatchlistPanel = ({ currentTab }: { currentTab: number }) => {
  const {
    data,
    fetchNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useGetWatchlist(15);

  return (
    <CustomTabPanel value={currentTab} index={1}>
      {data && data.length === 0 ? (
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <NotFound />
        </div>
      ) : (
        <>
          <div className={styles.page_panel}>
            <div className={styles.page_movies}>
              {data && !isLoading ? (
                <>
                  {data.map((item) => (
                    <DefaultMovieCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      genres={item.genres}
                      place={EDefaultMovieCardPlacement.Watchlist}
                      posterPath={item.posterPath}
                      runtime={item.runtime}
                      voteAverage={item.voteAverage}
                    />
                  ))}
                  {isFetchingNextPage && <Placholder />}
                </>
              ) : (
                <Placholder />
              )}
            </div>
            {!isFetching && hasNextPage && (
              <Button
                variant="primary_outlined"
                onClick={() => fetchNextPage()}
                className={styles.page_see_more}
              >
                See more
              </Button>
            )}
          </div>
        </>
      )}
    </CustomTabPanel>
  );
};

export default WatchlistPanel;

function Placholder() {
  return new Array(20)
    .fill(10)
    .map((_, index) => <DefaultMovieCardSkeleton key={index} />);
}
