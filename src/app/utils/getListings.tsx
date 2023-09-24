import { db } from "./db";

export default async function getListings() {
  try {
    return await db.listing.findMany({ orderBy: { createdAt: "desc" } });
  } catch (error: any) {
    console.log("cant fetch listings", error);
    throw new Error(error);
  }
}
