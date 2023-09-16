"use client";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  const { data: session } = useSession();
  return <div>Welcome {session?.user?.name || "guest"}</div>;
};

export { Welcome };
