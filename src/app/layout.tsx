import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "~/theme/ThemeRegistry";

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
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
