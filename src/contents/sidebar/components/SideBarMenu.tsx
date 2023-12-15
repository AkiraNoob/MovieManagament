"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../sidebar.module.scss";

interface ISideBarMenu {
  title: string;
  menuItem: { label: string; href: string; icon: React.ReactNode }[];
  trailingChildren?: React.ReactNode[] | React.ReactNode;
}

const SideBarMenu = ({ title, menuItem, trailingChildren }: ISideBarMenu) => {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <p>{title}</p>
      {menuItem.map(({ label, href, icon }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.menu_item} ${
            pathname === href ? styles.menu_item_isActive : ""
          }`}
        >
          {icon}
          <p>{label}</p>
        </Link>
      ))}
      {trailingChildren}
    </div>
  );
};

export default SideBarMenu;
