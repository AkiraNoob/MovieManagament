'use client'

import { useContext } from "react";
import { userContext } from "~/app/userProvider";
import SuggestedMovie from "~/components/SuggestedMovie";
import RandomMovieDefault from "~/components/RandomMovieDefault";

const RandomOrSuggest = () => {
  const {isLogin} = useContext(userContext)

  return <>

    {isLogin ?
      <SuggestedMovie/>
      :<RandomMovieDefault/>}</>
}

export  default  RandomOrSuggest
