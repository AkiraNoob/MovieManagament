import Rating from "@mui/material/Rating";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { userContext } from "~/app/userProvider";
import {
  useGetRating,
  usePostRating,
  usePutRating,
} from "~/hooks/rating/useRating";
import variants from "../../app/_variants.module.scss";
type T = React.SVGProps<SVGSVGElement>;

interface ICustomRating {
  size: number;
  value: number;
}

const FilledStarIcon = (props: T) => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <path
        d="M19.0494 1.58337C20.7741 1.58337 23.5336 9.81879 24.3239 12.2932C24.4565 12.7084 24.8343 12.992 25.27 13.0043C27.8524 13.0774 36.4167 13.4584 36.4167 15.2973C36.4167 17.1162 30.2722 21.8435 28.3059 23.3098C27.9517 23.5739 27.8066 24.0341 27.9448 24.4538C28.7528 26.9081 31.2741 35.0068 29.7852 36.2291C28.3127 37.438 21.7433 32.3125 19.6459 30.6138C19.2686 30.3083 18.7311 30.3079 18.3536 30.6132C16.2538 32.3113 9.68159 37.4381 8.31358 36.2291C6.92866 35.0052 9.31415 26.886 10.0721 24.4437C10.2011 24.0282 10.0536 23.5777 9.70477 23.3177C7.75001 21.8605 1.58337 17.1195 1.58337 15.2973C1.58337 13.4569 10.1619 13.0767 12.7365 13.0041C13.1693 12.9919 13.5447 12.7125 13.6797 12.3011C14.4878 9.83638 17.3229 1.58337 19.0494 1.58337Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const OutlinedStarIcon = (props: T) => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <path
        d="M19.0494 1.58325C20.7741 1.58325 23.5336 9.81867 24.3239 12.2931C24.4565 12.7083 24.8343 12.9918 25.27 13.0042C27.8524 13.0773 36.4167 13.4583 36.4167 15.2972C36.4167 17.1161 30.2722 21.8434 28.3059 23.3096C27.9517 23.5738 27.8066 24.034 27.9448 24.4536C28.7528 26.908 31.2741 35.0067 29.7852 36.229C28.3127 37.4378 21.7433 32.3124 19.6459 30.6137C19.2686 30.3082 18.7311 30.3078 18.3536 30.6131C16.2538 32.3112 9.68159 37.438 8.31358 36.229C6.92866 35.0051 9.31415 26.8859 10.0721 24.4436C10.2011 24.0281 10.0536 23.5776 9.70477 23.3175C7.75001 21.8604 1.58337 17.1193 1.58337 15.2972C1.58337 13.4568 10.1619 13.0766 12.7365 13.004C13.1693 12.9918 13.5447 12.7124 13.6797 12.301C14.4878 9.83626 17.3229 1.58325 19.0494 1.58325Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function CustomRating({ size, value }: ICustomRating) {
  return (
    <Rating
      icon={
        <FilledStarIcon width={size} height={size} color={variants.primary} />
      }
      emptyIcon={
        <OutlinedStarIcon width={size} height={size} color={variants.primary} />
      }
      readOnly
      precision={0.1}
      value={value}
    />
  );
}

export const CustomActiveRating = ({ size }: { size: number }) => {
  const { isLogin } = useContext(userContext);
  const { movieId } = useParams();

  const { isError, data, isSuccess } = useGetRating();

  const { mutate: postRating } = usePostRating();
  const { mutate: putRating } = usePutRating();

  return (
    <div
      style={{
        marginTop: "-20px",
        marginBottom: "30px",
      }}
    >
      <p>How much you rate this film?</p>
      <Rating
        icon={
          <FilledStarIcon width={size} height={size} color={variants.primary} />
        }
        emptyIcon={
          <OutlinedStarIcon
            width={size}
            height={size}
            color={variants.primary}
          />
        }
        disabled={!isLogin}
        precision={0.1}
        value={data?.score}
        onChange={(e, value) => {
          if (isSuccess) {
            putRating({
              movieId: parseInt(movieId as string),
              timestamp: new Date().toISOString(),
              score: value || 0,
            });
          } else {
            postRating({
              movieId: parseInt(movieId as string),
              timestamp: new Date().toISOString(),
              score: value || 0,
            });
          }
        }}
      />
    </div>
  );
};
