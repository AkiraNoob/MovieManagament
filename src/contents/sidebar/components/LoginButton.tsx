"use client";

import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Link from "next/link";
import RequestLoginHOC from "~/contents/HOC/RequestLoginHOC";
import styles from "../Sidebar.module.scss";

const LoginButton = () => {
  return (
    <RequestLoginHOC>
      <Link href={"#"} className={styles.menu_item}>
        <LoginOutlinedIcon />
        <p>Login</p>
      </Link>
    </RequestLoginHOC>
  );
};

export default LoginButton;
