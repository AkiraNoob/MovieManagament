import BackableButton from "~/contents/button/BackableButton";
import styles from "./backable.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.backable_layout}>
      <BackableButton />
      {children}
    </div>
  );
}
