import BackableButton from "~/contents/button/BackableButton";
import SearchInput from "~/contents/search/SearchInput";
import styles from "./backable.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.backable_layout}>
      <div className={styles.backable_layout_search}>
        <SearchInput />
      </div>
      <BackableButton />

      {children}
    </div>
  );
}
