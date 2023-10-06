"use client";
import { useSession } from "next-auth/react";

export const Welcome = () => {
  const { data: session } = useSession();
  return <div>Welcome {session?.user?.name || "guest"}</div>;
};
