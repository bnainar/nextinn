import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";
// import { CustomToaster } from "./components/ui/CustomToaster";
import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

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
      <body className={font.className + " bg-purple-100"}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
