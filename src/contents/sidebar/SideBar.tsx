import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
import SideBarMenu from "./SideBarMenu";
import styles from "./Sidebar.module.scss";
import LogoutButton from "./components/LogoutButton";

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

export default SideBar;
