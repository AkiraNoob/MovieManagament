"use client";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const searchParams = useSearchParams();

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <>
      <div className={styles.search_input_wrapper}>
        <TextField
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              router.push(`/search?search=${search}`);
            }
          }}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          placeholder="Find movie"
          variant="outlined"
        />
      </div>
    </>
  );
};

export default SearchInput;
