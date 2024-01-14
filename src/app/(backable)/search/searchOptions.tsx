"use client";

import {
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CustomControlledRating } from "~/components/rating/Rating";
import { deepClone } from "~/helpers/general";
import useGetAllGenres from "~/hooks/genres/useGetAllGenres";
import styles from "./search.module.scss";
import { searchContext } from "./searchProvider";

const SearchOptions = () => {
  const {
    selected,
    setSelected,
    minRating,
    maxRating,
    setMaxRating,
    setMinRating,
    genres,
    setGenres,
  } = useContext(searchContext);

  const { data: defaultGenres } = useGetAllGenres();

  const theme = useTheme();

  const handleChangeCheckbox = (
    value: boolean,
    name: keyof typeof selected,
  ) => {
    const values = Object.values(selected);

    if (values.filter((_) => _).length <= 1 && !value) {
      toast("You can not omit 2 options");
      return;
    }

    const clone = deepClone(selected);

    clone[name] = value;
    setSelected(clone);
  };

  const handleChange = (event: SelectChangeEvent<typeof genres>) => {
    const {
      target: { value },
    } = event;

    setGenres(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };
  return (
    <div className={styles.page_main_left}>
      <FormControlLabel
        control={
          <Checkbox
            checked={selected.title}
            onChange={(e) => handleChangeCheckbox(e.target.checked, "title")}
          />
        }
        label="Search by title"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selected.overview}
            onChange={(e) => handleChangeCheckbox(e.target.checked, "overview")}
          />
        }
        label="Search by overview"
      />

      <Divider
        orientation="horizontal"
        className={styles.page_main_left_divider}
      />

      <div className={styles.page_main_left_rating}>
        <div>
          <Typography component="legend">Min rating</Typography>
          <CustomControlledRating
            value={minRating}
            onChange={(event, newValue) => {
              setMinRating(newValue || 0);
            }}
            iconSize={21}
          />
        </div>
        <div>
          <Typography component="legend">Max rating</Typography>
          <CustomControlledRating
            value={maxRating}
            onChange={(event, newValue) => {
              setMaxRating(newValue || 0);
            }}
            iconSize={21}
          />
        </div>
      </div>

      <Divider
        orientation="horizontal"
        className={styles.page_main_left_divider}
      />

      <div>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-chip-label">Genres</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={genres}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Genres" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={JSON.parse(value)?.name} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {(defaultGenres || []).map((name) => (
              <MenuItem
                key={name.id}
                value={JSON.stringify(name)}
                style={getStyles(name.name, genres, theme)}
              >
                {name.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default SearchOptions;

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
