import { NavBar } from "./components/navbar/NavBar";
import { CustomToaster } from "./components/ui/CustomToaster";
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
        <CustomToaster />
      </body>
    </html>
  );
}
