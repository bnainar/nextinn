import { getServerSession } from "next-auth/next";
import { config } from "./auth";
import { db } from "./db";

export async function getSession() {
  return await getServerSession(config);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    // Not logged in
    if (!session?.user?.email) return null;

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    // User not found in DB
    if (!currentUser) return null;

    // Convert Date to string
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    // Don't throw errors here. We can prompt the user to login without crashing the whole app
    return null;
  }
}
