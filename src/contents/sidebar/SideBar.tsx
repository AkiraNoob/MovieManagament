import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import LogoutButton from "./components/LogoutButton";
import SideBarMenu from "./components/SideBarMenu";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Image src={"/branding.png"} alt="branding" width={176} height={74} />

      <SideBarMenu
        title={"Menu"}
        menuItem={[
          {
            label: "Home",
            icon: <HomeIcon />,
            href: "/",
          },
          {
            label: "Genres",
            icon: <ExploreOutlinedIcon />,
            href: "/genres",
          },
          {
            label: "Top rated",
            icon: <StarBorderIcon />,
            href: "/top-rated",
          },
          {
            label: "Playlists",
            icon: <FavoriteBorderIcon />,
            href: "/playlists",
          },
        ]}
      />
      <SideBarMenu
        title={"General"}
        menuItem={[
          {
            label: "Settings",
            icon: <SettingsOutlinedIcon />,
            href: "/settings",
          },
        ]}
        trailingChildren={<LogoutButton />}
      />
    </div>
  );
};

function SideBarSkeleton() {
  return (
    <div className={styles.menu}>
      <Skeleton
        variant="text"
        style={{
          fontSize: "inherit",
        }}
      />

      {new Array(5).fill(0).map((_item, index) => (
        <div key={index} className={styles.menu_item}>
          <Skeleton width={24} height={24} variant="rounded" />
          <Skeleton width={"100%"} height={24} variant="rounded" />
        </div>
      ))}
    </div>
  );
}

export default SideBar;
