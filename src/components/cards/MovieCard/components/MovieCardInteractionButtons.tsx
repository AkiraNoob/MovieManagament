"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Button from "@mui/material/Button";

const MovieCardInteractionButtons = ({ id }: { id: string }) => {
  return (
    <div>
      <Button variant="secondary">
        <AddOutlinedIcon fontSize={"medium"} />
      </Button>
      <Button fullWidth variant="primary">
        More info
      </Button>
    </div>
  );
};
export default MovieCardInteractionButtons;
