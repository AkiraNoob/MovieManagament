import { Button } from "@mui/material";
import DefaultMovieCard, {
  DefaultMovieCardSkeleton,
  EDefaultMovieCardPlacement,
} from "~/components/cards/Movie/DefaultMovieCard/DefaultMovieCard";
import NotFound from "~/components/not-found/NotFound";
import useGetWatchingList from "~/hooks/watching/useGetWatchingList";
import { CustomTabPanel } from "./component";
import styles from "./playlists.module.scss";

const RecentPanel = ({ currentTab }: { currentTab: number }) => {
  const {
    data,
    fetchNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = useGetWatchingList(15);

  return (
    <CustomTabPanel value={currentTab} index={0}>
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
          <div className={styles.page_movies}>
            {data && !isLoading ? (
              <>
                {data.map((item) => (
                  <DefaultMovieCard
                    key={item.id}
                    place={EDefaultMovieCardPlacement.Recent}
                    {...item}
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
        </>
      )}
    </CustomTabPanel>
  );
};

export default RecentPanel;

function Placholder() {
  return new Array(20)
    .fill(10)
    .map((_, index) => <DefaultMovieCardSkeleton key={index} />);
}
