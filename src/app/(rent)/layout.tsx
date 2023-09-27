import { getServerSession } from "next-auth";
import { SessionProvider } from "../components/SessionProvider";
import "../globals.css";
import type { Metadata } from "next";
import { CustomToaster } from "../components/ui/CustomToaster";
import { NavBar } from "../components/navbar/NavBar";

export const metadata: Metadata = {
  title: "NextInn",
  description: "Find your next great escape",
};

export default async function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <SessionProvider session={session}>
          <main>
            <NavBar rentPage />
            {children}
          </main>
        </SessionProvider>
        <CustomToaster />
      </body>
    </html>
  );
}
