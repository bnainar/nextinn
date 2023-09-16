import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";
import { NavBar } from "./components/navbar/NavBar";
import { CustomToaster } from "./components/ui/CustomToaster";
import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Welcome } from "./components/Welcome";

export const metadata: Metadata = {
  title: "NextInn",
  description: "Find your next great escape",
};
const font = Public_Sans({
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={font.className + " bg-purple-300"}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
          <Welcome />
          <CustomToaster />
        </SessionProvider>
      </body>
    </html>
  );
}
