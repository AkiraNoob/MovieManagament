import type { Metadata } from "next";
import SideBar from "~/contents/sidebar/SideBar";
import ThemeRegistry from "~/theme/ThemeRegistry";
import "./globals.scss";
import styles from "./root.module.scss";

export const metadata: Metadata = {
  title: "Honey Movies",
  description: "Where you can watch all your favourite movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={styles.container}>
          <SideBar />
          <main className={styles.main}>{children}</main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
