import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "~/contents/sidebar/SideBar";
import ThemeRegistry from "~/theme/ThemeRegistry";
import "./globals.scss";
import Providers from "./provider";
import styles from "./root.module.scss";
import { UserProvider } from "./userProvider";
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
      <body className={styles.container}>
        <Providers>
          <UserProvider>
            <ThemeRegistry>
              <div className={styles.sidebar}>
                <SideBar />
              </div>
              <main className={styles.main}>{children}</main>
            </ThemeRegistry>
            <ToastContainer />
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
