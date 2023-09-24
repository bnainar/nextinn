import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";
import "./globals.css";
import type { Metadata } from "next";
// import { CustomToaster } from "./components/ui/CustomToaster";
// import { Public_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "NextInn",
  description: "Find your next great escape",
};
// const font = Public_Sans({
//   subsets: ["latin"],
// });
// <body className={font.className + " bg-purple-100"}>

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="bg-purple-100">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
