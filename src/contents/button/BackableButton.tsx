"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import styles from "./BackableButton.module.scss";

const BackableButton = () => {
  const router = useRouter();

  return (
    <div className={styles.backable_button}>
      <Button onClick={() => router.back()} variant="secondary">
        <ChevronLeftIcon />
      </Button>
      <p>Back</p>
    </div>
  );
};

export default BackableButton;
