"use client";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from "next/link";
import styles from "../Sidebar.module.scss";

const LogoutButton = () => {
  const onclick = () => {
    console.log("hahaha");
  };

  return (
    <Link href={"#"} onClick={onclick} className={styles.menu_item}>
      <LogoutOutlinedIcon />
      <p>Logout</p>
    </Link>
  );
};

export default LogoutButton;
