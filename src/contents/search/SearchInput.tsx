"use client";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import variants from "~/app/_variants.module.scss";
import useToggle from "~/hooks/useToggle";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [openSideBar, toggle] = useToggle(false);

  const isMobile = useMediaQuery(`(max-width:${variants.lg})`);

  return (
    <>
      <div className={styles.search_input_wrapper}>
        <div className={styles.search_input_wrapper_hamburger}>
          {isMobile && (
            <Button onClick={toggle} variant="secondary">
              <MenuIcon />
            </Button>
          )}
        </div>

        <TextField
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

      {isMobile && (
        <Drawer anchor={"left"} open={openSideBar} onClose={toggle}>
          {sidebar}
        </Drawer>
      )}
    </>
  );
};

export default SearchInput;
