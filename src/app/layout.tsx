import { NavBar } from "./components/navbar/NavBar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextInn",
  description: "Find your next great escape",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
