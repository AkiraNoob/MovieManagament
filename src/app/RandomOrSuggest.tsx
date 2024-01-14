"use client";

import { useContext } from "react";
import { userContext } from "~/app/userProvider";
import RandomMovieDefault from "~/components/RandomMovieDefault";
import SuggestedMovie from "~/components/SuggestedMovie";

const RandomOrSuggest = () => {
  const { isLogin } = useContext(userContext);

  return <>{isLogin ? <SuggestedMovie /> : <RandomMovieDefault />}</>;
};

export default RandomOrSuggest;
