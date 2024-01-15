"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ISelected {
  title: boolean;
  overview: boolean;
}

export type TSearchContext = {
  selected: ISelected;
  setSelected: Dispatch<SetStateAction<ISelected>>;
  minRating: number;
  setMinRating: Dispatch<SetStateAction<number>>;
  maxRating: number;
  setMaxRating: Dispatch<SetStateAction<number>>;
  genres: string[];
  setGenres: Dispatch<SetStateAction<string[]>>;
};

export const searchContext = createContext<TSearchContext>({
  selected: {
    title: true,
    overview: true,
  },
  setSelected: () => {},
  minRating: 0,
  setMinRating: () => {},
  maxRating: 0,
  setMaxRating: () => {},
  genres: [],
  setGenres: () => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<ISelected>({
    title: true,
    overview: true,
  });
  const [minRating, setMinRating] = useState<number>(0);
  const [maxRating, setMaxRating] = useState<number>(5);
  const [genres, setGenres] = useState<string[]>([]);

  return (
    <searchContext.Provider
      value={{
        selected,
        setSelected,
        minRating,
        setMinRating,
        maxRating,
        setMaxRating,
        genres,
        setGenres,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
