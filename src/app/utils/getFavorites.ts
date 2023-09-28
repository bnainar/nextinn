import { db } from "./db";
import getCurrentUser from "./getCurrentUser";

export async function getFavorites() {
  try {
    const user = await getCurrentUser();
    if (!user) return [];

    return await db.listing.findMany({
      where: { id: { in: [...(user.favIds || [])] } },
    });
  } catch (err) {
    console.log("fav error", err);
  }
}
