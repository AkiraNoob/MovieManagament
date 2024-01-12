"use client";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from "next/link";
import { useContext } from "react";
import { userContext } from "~/app/userProvider";
import { removeAuthCookie } from "~/helpers/auth";
import styles from "../Sidebar.module.scss";

const LogoutButton = () => {
  const { setIsLogin } = useContext(userContext);

  const onclick = () => {
    removeAuthCookie();
    setIsLogin(false);
  };

  return (
    <Link href={"#"} onClick={onclick} className={styles.menu_item}>
      <LogoutOutlinedIcon />
      <p>Logout</p>
    </Link>
  );
};

export default LogoutButton;
