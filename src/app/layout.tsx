import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>;
}
